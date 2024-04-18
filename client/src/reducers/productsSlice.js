import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [

  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    readAllProducts: (state,action) => {
      state.data = action.payload;
    }
  },
});

export const { readAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
