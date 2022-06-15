import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../data/dummyData";


const getDataFromStorage = () => {
  let data = localStorage.getItem("data");
  data = data ? JSON.parse(data) : dummyData;
  return data;
};




const initialState = {
  data: getDataFromStorage(),
  pending: false,
  error: false,
  singleBook: {},
};
console.log(initialState.data);



export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getSingleBook:  (state, action) => {
      let single  = state.data.filter(item=>item.id===action.payload)
      state.singleBook = single;
      console.log(single);
      state.pending = false;
      state.error = false;
    },
   deleteFromList:(state,action)=>{
let single = state.data.filter((item) => item.id !== action.payload);
state.data = single;
state.pending = false;
state.error = false;
   },
   handleNewBook:(state,action)=>{
     let newBook = action.payload

     state.data= [...state.data,newBook]
     console.log(state.data);
   }

  },
  extraReducers: {
    
  },
});

// Action creators are generated for each case reducer function
export const { getSingleBook,deleteFromList,handleNewBook} = booksSlice.actions;

export default booksSlice.reducer;
