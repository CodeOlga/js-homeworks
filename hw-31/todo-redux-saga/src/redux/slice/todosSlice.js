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
    startFetchingTodos: (state) => {
      state.loading = true;
    },
    // for saga workers
    setTodos: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },

    startDeletingTodo: (state) => {
      state.loading = true;
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      state.loading = false;
    },

    startAddingTodo: (state) => {
      state.loading = true;
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    },

    startEditingTodo: (state) => {
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

    startToggling: (state) => {
      state.loading = true;
    },
    toggleTodo: (state, action) => {
      const updatedTodo = action.payload;
      const index = state.items.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.items[index].checked = updatedTodo.checked;
      }
      state.loading = false;
    },

    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
  },
});

export const {
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
  setSelectedTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
