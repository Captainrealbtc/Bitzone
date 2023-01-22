import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "cookies-next";
import copy from "copy-to-clipboard";
import moment from "moment";
import axios from "../../axios";
import TransactionGenerator from "../TransactionGenerator";

const FirstSection: React.FunctionComponent = () => {
   const [user, setUser] = useState<any>({});
   const [copied, setCopied] = useState(false);

   const userS: any = getCookie("user");
   const LoggedUser = userS ? JSON.parse(userS) : null;
   const [coinsList, setCoinsList] = useState<any>([]);

   useEffect(() => {
      axios
         .get("https://api.coinstats.app/public/v1/coins?skip=0")
         .then((res) => {
            setCoinsList(res.data.coins);
         });
   }, []);

   useEffect(() => {
      axios
         .get("/findAllUsers")
         .then((res) => {
            const use = res.data.filter(
               (user: any) => user.username === LoggedUser.username
            );
            setUser(use[0]);
         })
         .catch();
   }, [LoggedUser]);

   const copyToClipboard = () => {
      copy(`https://cryptovesto.vercel.app/?ref=${user.username}`);
      setCopied(true);
      setTimeout(() => {
         setCopied(false);
      }, 2000);
   };

   const deposit_date = moment(LoggedUser?.first_deposit_date).add("days", 1);
   const today = moment(new Date()).add("days", 1);
   const interval = today.diff(deposit_date, "days");
   const compoundInterest = (
      p: number,
      r: number,
      t: number,
      n: number
   ): any => {
      const amount = p * Math.pow(1 + r / n, n * t);
      const interest = amount - p;
      return interest;
   };

   const btc_balance =
      user?.btc_balance + compoundInterest(user?.btc_balance, 0.1, interval, 1);

   const eth_balance =
      user?.eth_balance + compoundInterest(user?.eth_balance, 0.1, interval, 1);

   const btcPrice = Math.round(coinsList[0]?.price);
   const ethPrice = Math.round(coinsList[1]?.price);
   const currentBTCPrice = Math.round(btcPrice * btc_balance);
   const currentETHPrice = Math.round(ethPrice * eth_balance);

   return (
      <section id="dashboard" className="hero-sec">
         <TransactionGenerator />
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-sm-12 mt-5">
                  <div className="card">
                     <h5 className="card-header text-center p-3">
                        Bitcoin BTC Price: ${btcPrice ? btcPrice : 0}
                     </h5>
                     <div className="align-items-center d-flex justify-content-center">
                        <div className="card-body">
                           <h5 className="card-title p-4">
                              Your BTC Balance: {btc_balance?.toFixed(6)} BTC{" "}
                              <br />
                              <br />
                              Price: ${currentBTCPrice ? currentBTCPrice : 0}
                           </h5>
                           <Link to="/btc-deposit">
                              <button className="theme-btn wow fadeInUp">
                                 Deposit
                              </button>
                           </Link>
                           <Link to="/btc-withdrawal" className="float-right">
                              <button className="theme-btn wow fadeInUp float-right">
                                 Withdraw
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-md-6 col-sm-12 mt-5">
                  <div className="card">
                     <h5 className="card-header text-center p-3">
                        Ethereum ETH Price: ${ethPrice ? ethPrice : 0}
                     </h5>
                     <div className="align-items-center d-flex justify-content-center">
                        <div className="card-body">
                           <h5 className="card-title p-4">
                              Your ETH Balance: {eth_balance?.toFixed(6)} ETH{" "}
                              <br />
                              <br />
                              Price: ${currentETHPrice ? currentETHPrice : 0}
                           </h5>
                           <Link to="/eth-deposit">
                              <button className="theme-btn wow fadeInUp">
                                 Deposit
                              </button>
                           </Link>
                           <Link to="/eth-withdrawal" className="float-right">
                              <button className="theme-btn wow fadeInUp float-right">
                                 Withdraw
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-md-3"></div>
               <div className="col-md-6 col-sm-12 mt-5">
                  <div className="card">
                     <h5 className="card-header text-center p-3">Referral</h5>
                     <div className="card-body">
                        <div className="align-items-center d-flex justify-content-center">
                           <h5 className="card-title p-4">
                              Total Referral: {user.total_referral} <br />
                              <br />
                              Referral BTC Commission: {user.btc_commision} BTC
                              <br />
                              <br />
                              Referral ETH Commission: {user.eth_commision} ETH
                           </h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row ">
               <div className="col-12 text-white text-center mt-5">
                  <h1 className="text-white">Referral Link</h1>
                  You get 40% of your downline first deposit.
                  <br />
                  NOTE: Referrals is optional
                  <p className="fw-bold text-white p-2">
                     https://cryptovesto.vercel.app/?ref={user.username}
                  </p>
                  <p>
                     <button
                        className="btn btn-md btn-info text-white"
                        onClick={copyToClipboard}
                     >
                        Copy referral link
                     </button>
                  </p>
                  {copied && (
                     <div className="form-group row">
                        <div className="col-md-12">
                           <p
                              className="text-success"
                              style={{ fontWeight: 500 }}
                           >
                              Referral link copied!
                           </p>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
         <br />
         <br />
      </section>
   );
};

export default FirstSection;
