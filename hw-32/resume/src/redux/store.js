import { configureStore } from "@reduxjs/toolkit";

import swapiReducer from "./slice/swapiSlice";

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
  },
});
