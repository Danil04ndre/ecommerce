import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import adminSlice from "../reducers/adminSlice";
import productsSlice from "../reducers/productsSlice";
import cartSlice from "../reducers/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminSlice,
    products: productsSlice,
    cart: cartSlice
  },
});
