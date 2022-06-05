import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../context/giphyContext";

export const store = configureStore({
  reducer: {
    giphy: jobsReducer,
  },
});
