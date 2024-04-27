import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [

  ],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    readProducts: (state,action) => {
      state.data = action.payload
    },
  },
});


export const { readProducts } = adminSlice.actions;

export default adminSlice.reducer;
