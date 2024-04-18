import { createSlice } from "@reduxjs/toolkit";
import { tokenData } from "../helpers/tokenData";

const userData = tokenData();

const initialState = {
  id: userData ? userData.id : null,
  name: userData ? userData.name : "",
  email: userData ? userData.email : "",
  token: userData ? userData.token : "",
  isAuth: userData ? true : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuth = action.payload.isAuth;
    },

    unsetUser: (state) => {
      state.id = null;
      state.name = "";
      state.email = "";
      state.token = "";
      state.isAuth = false;
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
