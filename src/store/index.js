import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slices/mediaSlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;
