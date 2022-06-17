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

function App() {
  const [info, setInfo] = useState<any>({});
  const [transaction, setTransaction] = useState(false);
  ;
  useEffect(() => {
    setInterval(() => {
      const randBtcAddress = generateRandomAddress("bc1", 42);
      const btc = randomDecimalNumber(0.24, 1, 6);
      setInfo({ ...info, address: randBtcAddress, price: btc, symbol: "BTC" });
      setTransaction(true);
      setTimeout(() => {
        setTransaction(false);
      }, 2000);
    }, randomWholeNumber(40000, 100000));
  }, []);

  useEffect(() => {
    setInterval(() => {
      const randEthAddress = generateRandomAddress("0x", 42);
      const eth = randomDecimalNumber(4.5, 50, 6);
      setInfo({ ...info, address: randEthAddress, price: eth, symbol: "ETH" });
      setTransaction(true);
      setTimeout(() => {
        setTransaction(false);
      }, 2000);
    }, randomWholeNumber(100000, 160000));
  }, []);

  return (
    <Fragment>
      <Routes />
      {window.location.pathname !== "/" && transaction && (
        <div className="d-flex align-items-center justify-content-center m-1">
          <p className="pop-up text-center p-1 text-success">
            {info?.price}
            {info.symbol} sent to {info.address}
          </p>
        </div>
      )}
    </Fragment>
  );
}

export default App;
