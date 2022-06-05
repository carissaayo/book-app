import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  pending: false,
  error: false,
};

export const fetchJobs = createAsyncThunk("jobs/update", async () => {
  const results = await axios(
    "https://api.terawork.com/service-categories/sellers-services/computer-software-development" 
  );

  return results.data.data;
});

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    getGiphys: async (state, action) => {
      state.data = action.payload;
      state.isError = false;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [fetchJobs.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchJobs.fulfilled]: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    [fetchJobs.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { getGiphys } = jobsSlice.actions;

export default jobsSlice.reducer;
