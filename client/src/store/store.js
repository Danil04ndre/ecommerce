import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import adminSlice from "../reducers/adminSlice";
import productsSlice from "../reducers/productsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminSlice,
    products: productsSlice,
  },
});
