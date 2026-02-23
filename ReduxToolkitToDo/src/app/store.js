import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/ToDo/TodoSlice";
import themeReducer from "../features/Theme/ThemeSlice";

export const store=configureStore({
    reducer:{
        todo : todoReducer,
        theme:themeReducer
    }
});