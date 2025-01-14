import { all, call, put, takeEvery } from "redux-saga/effects";

import { API_URL_TODOS } from "../constants/constants";
import {
  startFetchingTodos,
  setTodos,
  startDeletingTodo,
  deleteTodo,
  startAddingTodo,
  addTodo,
  startEditingTodo,
  updateTodo,
  startToggling,
  toggleTodo,
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

// function* - це функція-генератор

// call - функція, яка викликає інші функції з аргументами:
// перший параметр - функція, яку потрібно викликати; і далі аргументи

// put - відповідає за функцію відправки action (можна сприймати як dispatch)
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

    yield put(deleteTodo(todo.id));
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

    yield put(addTodo(todo));
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

    yield put(toggleTodo(updatedTodo));
  } catch (error) {
    console.error("Error toggling completion:", error.message);
  }
}

//Watchers

// takeEvery призупиняє виконання певної саги і прослуховувати певний action

// перший параметр - тип єкшена, якій ми хочемо відслідковувати =>
// якщо він відпрацював - redux saga викликає відповідний worker
function* watchFetchTodos() {
  yield takeEvery(startFetchingTodos.type, fetchItemsSaga);
}

function* watchDeleteTodo() {
  yield takeEvery(startDeletingTodo.type, deleteItemSaga);
}

function* watchAddTodo() {
  yield takeEvery(startAddingTodo.type, addItemSaga);
}

function* watchEditTodo() {
  yield takeEvery(startEditingTodo.type, editTodoSaga);
}

function* watchToggleCompleted() {
  yield takeEvery(startToggling.type, toggleCompletedSaga);
}

// all - об'єднює watchers всі в один
export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchDeleteTodo(),
    watchAddTodo(),
    watchEditTodo(),
    watchToggleCompleted(),
  ]);
}
