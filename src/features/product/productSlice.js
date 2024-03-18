import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  card : [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state , data) => {
      state.card.push(data.data)
    },
    uniqueProductDetails:(state,data)=>{
      console.log('particular product state --> '+state.card);
      console.log('particular product data --> '+JSON.stringify(data.data));
    }
  },
  extraReducers: (builder) => {
    
  },
});

export const { increment , uniqueProductDetails} = productSlice.actions;
export default productSlice.reducer;
