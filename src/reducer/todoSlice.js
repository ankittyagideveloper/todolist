import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("data") || "[]");

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      localStorage.setItem("data", JSON.stringify([...state, payload]));
      return [...state, payload];
    },
    deleteTodo: (state, { payload }) => {
      return payload;
    },
    editTodo: (state, { payload }) => {
      console.log(payload);
      localStorage.setItem("data", JSON.stringify(payload));
      return payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
