import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../context/jobsContext";

export const store = configureStore({
  reducer: {
    giphy: jobsReducer,
  },
});
