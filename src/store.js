import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducer/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
