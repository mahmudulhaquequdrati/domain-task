import { configureStore } from "@reduxjs/toolkit";

import layoutSlice from "../features/layout/layoutSlice";
import authSlice from "../features/auth/authSlice";
import stockSlice from "../features/stock/stockSlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    auth: authSlice,
    stock: stockSlice,
  },
  devTools: import.meta.env.MODE !== "production",
});
