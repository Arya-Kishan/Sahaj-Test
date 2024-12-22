import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slices/mediaSlice";

const store = configureStore({
  reducer: {
    media: apiReducer,
  },
});

export default store;
