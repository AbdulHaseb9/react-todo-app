import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todo.Slice";

export const store = configureStore({
    reducer: todoSlice
})