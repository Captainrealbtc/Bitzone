import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../axios";

const initialState = {};

const ethDepositsSlice = createSlice({
  name: "ethDeposits",
  initialState,
  reducers: {
    ethDepositsUpdated(state: any, action: any) {
      state.ethDeposits = action.payload;
    },
  },
});

export const { ethDepositsUpdated } = ethDepositsSlice.actions;
export default ethDepositsSlice.reducer;
