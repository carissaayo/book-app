import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
 
  data: [],
  favoriteList:[],
  pending: false,
  error: false,
};

export const fetchJobs = createAsyncThunk("jobs/update", async () => {
  const results = await axios(
    "https://api.terawork.com/service-categories/sellers-services/computer-software-development" 
  );
      console.log(results.data);
  return results.data.data.service_search_results.hits;
});

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    getJobs: async (state, action) => {
      state.data = action.payload;
      state.pending = false;
      state.error = false;
      
    },
    addToFavorite:(state,action)=>{
        state.favoriteList = [...state.favoriteList,action.payload]
    },
    removeFromFavorite:(state,action)=>{
        let  newList = state.favoriteList.filter(item=> item.id !== action.payload.id )
        state.favoriteList =newList
    }
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
export const { getJobs,addToFavorite,removeFromFavorite } = jobsSlice.actions;

export default jobsSlice.reducer;
