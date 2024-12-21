import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./actions/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
