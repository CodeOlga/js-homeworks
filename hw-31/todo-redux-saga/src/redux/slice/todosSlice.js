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
    // for saga watchers and components
    fetchStart: (state) => {
      state.loading = true;
    },
    // for saga workers
    setTodos: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },

    deleteTodo: (state) => {
      state.loading = true;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      state.loading = false;
    },

    addTodo: (state) => {
      state.loading = true;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    },

    editItem: (state) => {
      state.loading = true;
    },
    updateTodo: (state, action) => {
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

    toggleCompleted: (state) => {
      state.loading = true;
    },
    updateTodoCompletion: (state, action) => {
      const updatedTodo = action.payload;
      const index = state.items.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.items[index].checked = updatedTodo.checked;
      }
      state.loading = false;
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
  updateTodo,
  removeItem,
  setSelectedTodo,
  toggleCompleted,
  updateTodoCompletion,
} = todosSlice.actions;

export default todosSlice.reducer;
