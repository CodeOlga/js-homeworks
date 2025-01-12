import { all, call, put, takeEvery } from "redux-saga/effects";

import { API_URL_TODOS } from "../constants/constants";
import {
  fetchStart,
  setTodos,
  addTodo,
  addItem,
  editItem,
  updateTodo,
  toggleCompleted,
  updateTodoCompletion,
  deleteTodo,
  removeItem,
} from "./slice/todosSlice";

function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return response.json(); //we return the promise
  });
}

//Workers
function* fetchItemsSaga() {
  try {
    const todos = yield call(fetchHelper, API_URL_TODOS);

    yield put(setTodos(todos));
  } catch (error) {
    console.error("Error fetching todos:", error.message);
  }
}

function* deleteItemSaga(action) {
  try {
    const todo = yield call(fetchHelper, `${API_URL_TODOS}/${action.payload}`, {
      method: "DELETE",
    });

    yield put(removeItem(todo.id));
  } catch (error) {
    console.error("Error fetching todos:", error.message);
  }
}

function* addItemSaga(action) {
  try {
    const todo = yield call(fetchHelper, API_URL_TODOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: action.payload }),
    });

    yield put(addItem(todo));
  } catch (error) {
    console.error("Error fetching todos:", error.message);
  }
}

function* editTodoSaga(action) {
  try {
    const { id, newName } = action.payload;
    const updatedTodo = yield call(fetchHelper, `${API_URL_TODOS}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });

    yield put(updateTodo(updatedTodo));
  } catch (error) {
    console.error("Error editing todo:", error.message);
  }
}

function* toggleCompletedSaga(action) {
  try {
    const { todoId, currentState } = action.payload;
    const updatedTodo = yield call(fetchHelper, `${API_URL_TODOS}/${todoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked: !currentState }),
    });

    yield put(updateTodoCompletion(updatedTodo));
  } catch (error) {
    console.error("Error toggling completion:", error.message);
  }
}

//Watchers

function* watchFetchTodos() {
  yield takeEvery(fetchStart.type, fetchItemsSaga);
}

function* watchDeleteTodo() {
  yield takeEvery(deleteTodo.type, deleteItemSaga);
}

function* watchAddTodo() {
  yield takeEvery(addTodo.type, addItemSaga);
}

function* watchEditTodo() {
  yield takeEvery(editItem.type, editTodoSaga);
}

function* watchToggleCompleted() {
  yield takeEvery(toggleCompleted.type, toggleCompletedSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchDeleteTodo(),
    watchAddTodo(),
    watchEditTodo(),
    watchToggleCompleted(),
  ]);
}
