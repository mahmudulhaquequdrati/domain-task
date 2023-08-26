import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chargeItems: [],
  subTotal: 0,
  total: 0,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setChargeItems: (state, action) => {
      state.chargeItems.push(action.payload);
    },
    setSubTotal: (state, action) => {
      state.subTotal = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setChargeItems, setSubTotal, setTotal } = stockSlice.actions;

export default stockSlice.reducer;
