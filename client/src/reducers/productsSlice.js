import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  currentProduct: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    readAllProducts: (state, action) => {
      state.data = action.payload;
    },
    readDetailProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { readAllProducts, readDetailProduct } = productsSlice.actions;

export default productsSlice.reducer;
