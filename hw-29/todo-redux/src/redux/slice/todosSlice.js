import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selectedTodo: null,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },

    editItem: (state, action) => {
      const { id, newName } = action.payload;
      const todo = state.items.find((todo) => todo.id === id);
      if (todo) {
        todo.name = newName;
      }
    },

    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, editItem, setSelectedTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
