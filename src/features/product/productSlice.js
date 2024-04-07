import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  card : [],
  isLogging : false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state , data) => {
      state.card.push(data.data)
    },
    setLoggingValue: (state) => {
      // console.log('Before changeing the state --> '+JSON.stringify(state));
      state.isLogging = true;
      // console.log('After changeing the state --> '+JSON.stringify(state));
    },
    uniqueProductDetails:(state,data)=>{
      console.log('particular product state --> '+state.card);
      console.log('particular product data --> '+JSON.stringify(data.data));
    }
  },
  extraReducers: (builder) => {
  },
});

export const { increment , uniqueProductDetails, setLoggingValue} = productSlice.actions;
export const isLogging = (state) => state.product;
export default productSlice.reducer;
