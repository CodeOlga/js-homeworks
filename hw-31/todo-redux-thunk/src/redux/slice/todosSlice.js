import { createSlice } from "@reduxjs/toolkit";
import { API_URL_TODOS } from "../../constants/constants";

const initialState = {
  items: [],
  selectedTodo: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    editItem: (state, action) => {
      const { id, newName } = action.payload;
      const todo = state.items.find((todo) => todo.id === id);
      if (todo) todo.name = newName;
    },
    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
    toggleCompleted: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) todo.checked = !todo.checked;
    },
  },
});

export const {
  setTodos,
  addItem,
  removeItem,
  editItem,
  setSelectedTodo,
  toggleCompleted,
} = todosSlice.actions;

// Thunks
export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await fetch(API_URL_TODOS);
    const data = await response.json();
    dispatch(setTodos(data));
  } catch (error) {
    console.error("Error fetching todos:", error.message);
  }
};

export const addTodo = (todoText) => async (dispatch) => {
  const newTodo = { name: todoText.trim(), checked: false };

  try {
    const response = await fetch(API_URL_TODOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    const savedTodo = await response.json();
    dispatch(addItem(savedTodo));
  } catch (error) {
    console.error("Error adding todo:", error.message);
  }
};

export const deleteTodo = (todoId) => async (dispatch) => {
  try {
    await fetch(`${API_URL_TODOS}/${todoId}`, { method: "DELETE" });
    dispatch(removeItem(todoId));
  } catch (error) {
    console.error("Error deleting todo:", error.message);
  }
};

export const editTodo = (id, newName) => async (dispatch) => {
  try {
    await fetch(`${API_URL_TODOS}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });
    dispatch(editItem({ id, newName }));
  } catch (error) {
    console.error("Error editing todo:", error.message);
  }
};

export const toggleTodoCompleted =
  (todoId, currentState) => async (dispatch) => {
    try {
      await fetch(`${API_URL_TODOS}/${todoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ checked: !currentState }),
      });
      dispatch(toggleCompleted(todoId));
    } catch (error) {
      console.error("Error toggling completed:", error.message);
    }
  };

export default todosSlice.reducer;
