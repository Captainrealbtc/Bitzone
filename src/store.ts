import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import btcDepositsSlice from "./reducers/BTCDepositSlice";
import ethDepositsSlice from "./reducers/ETHDepositSlice";


const reducers = combineReducers({
   btcDeposits: btcDepositsSlice,
   ethDeposits: ethDepositsSlice
});


const store = configureStore({
   reducer: reducers,
});

export default store;