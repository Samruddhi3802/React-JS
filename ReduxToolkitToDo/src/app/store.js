import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/ToDo/TodoSlice";

export const store=configureStore({
    reducer:todoReducer
});