import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../context/booksContext";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
