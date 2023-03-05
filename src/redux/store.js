import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from './todoSlice'
import bannerReducer from './bannerSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    banner: bannerReducer
  }
});
