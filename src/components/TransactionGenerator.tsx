import { useEffect, useState } from "react";

import {
   generateRandomAddress,
   randomDecimalNumber,
   randomWholeNumber,
} from "../helpers/generator";

const TransactionGenerator = () => {
   const [ethMess, setEthMess] = useState("");
   const [btcMess, setBtcMess] = useState("");
   useEffect(() => {
      setInterval(() => {
         const randBtcAddress = generateRandomAddress("bc1", 42);
         const btc = randomDecimalNumber(0.24, 1, 6);
         if (window.location.pathname !== "/") {
            setBtcMess(`${btc} BTC was sent to ${randBtcAddress}`);
         }
      }, randomWholeNumber(40000, 60000));
   }, []);

   useEffect(() => {
      setInterval(() => {
         const randEthAddress = generateRandomAddress("0x", 42);
         const eth = randomDecimalNumber(4.5, 50, 6);
         if (window.location.pathname !== "/") {
            setEthMess(`${eth} ETH was sent to ${randEthAddress}`);
         }
      }, randomWholeNumber(60000, 90000));
   }, []);

   useEffect(() => {
      if (ethMess.length > 1) {
         setTimeout(() => setEthMess(""), 2000);
      }
      if (btcMess.length > 1) {
         setTimeout(() => setBtcMess(""), 2000);
      }
   }, [ethMess, btcMess]);

   return (
      <>
         {btcMess.length > 1 && (
            <div className="sticky d-flex p-3 w-100 align-items-center justify-content-center bg-success text-white">
               {btcMess}
            </div>
         )}
         {ethMess.length > 1 && (
            <div className="sticky p-3 d-flex w-100 align-items-center justify-content-center bg-success text-white">
               {ethMess}
            </div>
         )}
      </>
   );
};

export default TransactionGenerator;
