import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [

  ],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    createProduct: (state,action) => {},
    readProducts: (state,action) => {
      state.data = action.payload
    },
    updateProduct: (state,action) => {},
    deleteProduct: (state,action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { readProducts } = adminSlice.actions;

export default adminSlice.reducer;
