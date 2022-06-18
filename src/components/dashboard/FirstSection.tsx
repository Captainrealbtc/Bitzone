import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import copy from "copy-to-clipboard";
import axios from "../../axios";

const FirstSection: React.FunctionComponent = () => {
  const [cookies] = useCookies();
  const [user, setUser] = useState<any>({});
  const [copied, setCopied] = useState(false);
  const LoggedUser = cookies.user;
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

  const btcPrice = Math.round(coinsList[0]?.price);
  const ethPrice = Math.round(coinsList[1]?.price);
  const currentBTCPrice = Math.round(btcPrice * user?.btc_balance);
  const currentETHPrice = Math.round(ethPrice * user?.eth_balance);

  return (
    <section id="dashboard" className="hero-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-5">
            <div className="card">
              <h5 className="card-header text-center p-3">
                Bitcoin BTC Price: ${btcPrice? btcPrice: 0}
              </h5>
              <div className="align-items-center d-flex justify-content-center">
                <div className="card-body">
                  <h5 className="card-title p-4">
                    Your BTC Balance: {user?.btc_balance?.toFixed(6)} BTC <br />
                    <br />
                    Price: ${currentBTCPrice? currentBTCPrice: 0}
                  </h5>
                  <Link to="/btc-deposit">
                    <button className="theme-btn wow fadeInUp">Deposit</button>
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
                Ethereum ETH Price: ${ethPrice?ethPrice:0}
              </h5>
              <div className="align-items-center d-flex justify-content-center">
                <div className="card-body">
                  <h5 className="card-title p-4">
                    Your ETH Balance: {user.eth_balance?.toFixed(6)} ETH <br />
                    <br />
                    Price: ${currentETHPrice? currentETHPrice: 0}
                  </h5>
                  <Link to="/eth-deposit">
                    <button className="theme-btn wow fadeInUp">Deposit</button>
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
                  <p className="text-success" style={{ fontWeight: 500 }}>
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
