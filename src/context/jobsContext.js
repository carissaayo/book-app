import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getDataFromStorage = () => {
  let data = localStorage.getItem("data");
  data = data ? JSON.parse(data) : [];
  return data;
};

const getFavoriteFromStorage = () => {
  let favorite = localStorage.getItem("favorite");
  favorite = favorite ? JSON.parse(favorite) : [];
  return favorite;
};

const getCurrenciesFromStorage = () => {
  let currencies = localStorage.getItem("currencies");
  currencies = currencies ? JSON.parse(currencies) : [];
  return currencies;
};
const initialState = {
  data: getDataFromStorage(),
  favoriteList: getFavoriteFromStorage(),
  currencies: getCurrenciesFromStorage(),
  pending: false,
  error: false,
  singleCurrency: {},
};

export const fetchJobs = createAsyncThunk("jobs/update", async () => {
  const results = await axios(
    "https://api.terawork.com/service-categories/sellers-services/computer-software-development"
  );
  console.log(results.data);
  localStorage.setItem(
    "data",
    JSON.stringify(results.data.data.service_search_results.hits)
  );

  return results.data.data.service_search_results.hits;
});
export const fetchCurrencies = createAsyncThunk("jobs/update", async () => {
  const results = await axios("https://api.terawork.com/resources");
  console.log(results.data);
  localStorage.setItem(
    "currencies",
    JSON.stringify(results.data.data.currencies)
  );

  return results.data.data.currencies;
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
    addToFavorite: (state, action) => {
      console.log(action.payload.cust_id);
      if (state.favoriteList.indexOf(action.payload)===true){ 
        return 
      }else{

         state.favoriteList = [...state.favoriteList, action.payload];
      }
      console.log(state.favoriteList);
    },
    removeFromFavorite: (state, action) => {
      let newList = state.favoriteList.filter(
        (item) => item.cust_id !== action.payload.cust_id
      );
      state.favoriteList = newList;
      console.log(state.favoriteList);
    },
    currencyHandler: (state, action) => {
     
      state.singleCurrency = action.payload;
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
    [fetchCurrencies.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchCurrencies.fulfilled]: (state, action) => {
      state.pending = false;
      state.currencies = action.payload;
    },
    [fetchCurrencies.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getJobs, addToFavorite, removeFromFavorite,currencyHandler} = jobsSlice.actions;

export default jobsSlice.reducer;
