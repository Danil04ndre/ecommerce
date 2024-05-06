import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  productsList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.totalCount += 1;
      let iteminCart = state.productsList.find(
        (product) => product.id_product === action.payload.id_product
      );

      if (iteminCart) {
        state.productsList = state.productsList.map((product) =>
          product.id_product === action.payload.id_product
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        state.productsList = [
          ...state.productsList,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
    removeOneFromCart: (state, action) => {
      state.totalCount -= 1;
      let itemToDelete = state.productsList.find(
        (product) => product.id_product === action.payload
      );

      if (itemToDelete.quantity > 1) {
        state.productsList = state.productsList.map((product) =>
          product.id_product === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      } else {
        state.productsList = state.productsList.filter(
          (product) => product.id_product !== action.payload
        );
      }
    },
    removeProductFromCart: (state, action) => {
      state.totalCount -= action.payload.quantity;
      state.productsList = state.productsList.filter(
        (product) => product.id_product !== action.payload.id_product
      );
    },
    removeAllProducts: (state) => {
      state.totalCount = 0;
      state.productsList = [];
    }
  },
});

export const { addProductToCart, removeOneFromCart, removeProductFromCart, removeAllProducts } =
  cartSlice.actions;

export default cartSlice.reducer;
