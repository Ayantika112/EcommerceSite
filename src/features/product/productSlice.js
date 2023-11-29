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
      console.log('state is ----> ',JSON.parse(JSON.stringify(state.card)))
    },
  },
  extraReducers: (builder) => {
    
  },
});

export const { increment } = productSlice.actions;
export default productSlice.reducer;
