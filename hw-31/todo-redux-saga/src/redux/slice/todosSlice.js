import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selectedTodo: null,
  loading: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    deleteTodo: (state) => {
      state.loading = true;
    },
    addTodo: (state) => {
      state.loading = true;
    },
    setTodos: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      state.loading = false;
    },
    editItem: (state, action) => {
      const updatedTodo = action.payload;
      const index = state.items.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.items[index] = updatedTodo;
      }
      state.loading = false;
    },
    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
    toggleCompleted: (state, action) => {
      const updatedTodo = action.payload;
      const index = state.items.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.items[index].checked = updatedTodo.checked;
      }
    },
  },
});

export const {
  fetchStart,
  deleteTodo,
  addTodo,
  setTodos,
  addItem,
  editItem,
  removeItem,
  setSelectedTodo,
  toggleCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;
