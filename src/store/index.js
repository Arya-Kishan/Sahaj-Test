import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slices/mediaSlice";
import modalReducer from "./slices/modalSlice"; 

const store = configureStore({
  reducer: {
    media: apiReducer, 
    modal: modalReducer, 
  },
});

export default store;
