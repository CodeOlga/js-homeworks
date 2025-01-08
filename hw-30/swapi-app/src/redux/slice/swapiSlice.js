import { createSlice } from "@reduxjs/toolkit";

import { API_URL } from "../../constants/constants";

const initialState = {
  items: null,
  loading: false,
};

export const swapiSlice = createSlice({
  name: "swapi",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getData: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    clearData: (state) => {
      state.items = null;
      state.loading = false;
    },
  },
});

export const { fetchStart, getData, clearData } = swapiSlice.actions;

//асінхронний екшен - async thunk
//повертаємо функцію (а не об'єкт), яка приймає dispatch
export const fetchData = (endpoint) => async (dispatch) => {
  dispatch(fetchStart());

  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    const data = await response.json();

    dispatch(getData(data));
  } catch (error) {
    console.error(error);
  }
};

export default swapiSlice.reducer;
