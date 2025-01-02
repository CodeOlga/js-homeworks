import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem } = todosSlice.actions;

export default todosSlice.reducer;
