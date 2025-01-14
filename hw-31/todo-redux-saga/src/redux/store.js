import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import todosReducer from "./slice/todosSlice";
import rootSaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

// then run the saga
sagaMiddleware.run(rootSaga);
