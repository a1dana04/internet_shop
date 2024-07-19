import { configureStore } from "@reduxjs/toolkit";
import logInSlice from "./Slice/logInSlice";
import productsSlice from "./Slice/productsSlice";
import basketSlice from "./Slice/basketSlice";

export const store = configureStore({
  reducer: {
    login: logInSlice,
    pro: productsSlice,
    bas:basketSlice
  },
});
