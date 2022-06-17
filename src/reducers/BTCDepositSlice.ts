import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {};

const btcDepositsSlice = createSlice({
  name: "btcDeposits",
  initialState,
  reducers: {
    btcDepositsUpdated(state: any, action: any) {
      console.log(state.btcDeposits)
      state.btcDeposits = action.payload;
      console.log(state.btcDeposits)
    },
  },
});

export const { btcDepositsUpdated } = btcDepositsSlice.actions;
export default btcDepositsSlice.reducer;
