import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import "./Custome.css";
import Routes from "./Router";
import { useEffect } from "react";
import {
  generateRandomAddress,
  randomDecimalNumber,
  randomWholeNumber,
} from "./helpers/generator";
import { toast } from "react-toastify";

function App() {
  const [info, setInfo] = useState<any>({});
  const [transaction, setTransaction] = useState(false);
  ;
  useEffect(() => {
    setInterval(() => {
      const randBtcAddress = generateRandomAddress("bc1", 42);
      const btc = randomDecimalNumber(0.24, 1, 6);
      if(window.location.pathname !== "/"){
      toast.success(`${btc} BTC was sent to ${randBtcAddress}`, {autoClose: 2000})
      }
    }, randomWholeNumber(40000, 60000));
  }, []);

  useEffect(() => {
    setInterval(() => {
      const randEthAddress = generateRandomAddress("0x", 42);
      const eth = randomDecimalNumber(4.5, 50, 6);
      if(window.location.pathname !== "/"){
      toast.success(`${eth} ETH was sent to ${randEthAddress}`, {autoClose: 2000})
      }
    }, randomWholeNumber(60000, 90000));
  }, []);

  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
}

export default App;
