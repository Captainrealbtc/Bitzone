import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { handleInput } from "../../helpers/inputs";
import { createBtcDeposit } from "../../request";
import { setSuccMsg, setErrMsg, clrMsg } from "../../helpers/messages";

type Info = {
  wallet_address: string;
  amount: number;
  date: any;
  username: string;
};

const BTCDepositForm: React.FunctionComponent = () => {
  const [cookies] = useCookies();
  const user = cookies.user;

  const [info, setInfo] = useState<Info>({
    username: user?.username,
    wallet_address: "",
    amount: 0,
    date: "",
  });

  const [msg, setMsg] = useState({ success: "", error: "" });
  const [bools, setBools] = useState({
    error: false,
    success: false,
    loading: false,
  });

  const reset = () => {
    setInfo({
      username: user.username,
      wallet_address: "",
      amount: 0,
      date: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setBools({...bools, loading: true})
    if (info.wallet_address === "") {
      setErrMsg(setBools, setMsg, "Fill in wallet address");
      clrMsg(setBools, setMsg);
    } else if (info.date === "") {
      setErrMsg(setBools, setMsg, "select date");
      clrMsg(setBools, setMsg);
    } else if (info.amount === 0) {
      setErrMsg(setBools, setMsg, "Amount must be greater than 0");
      clrMsg(setBools, setMsg);
    } else if (info.amount < user.btc_balance) {
      setErrMsg(setBools, setMsg, "Oops! balance is insufficient");
      clrMsg(setBools, setMsg);
    } else {
      try {
        const res = await createBtcDeposit(info);
        if (res?.status === 200) {
          setSuccMsg(
            setBools,
            setMsg,
            "Deposit submitted successfully. Account would be updated within 24 hours"
          );
          setTimeout(() => {
            setBools({ ...bools, success: false });
          }, 5000);
          reset();
        } else {
          setErrMsg(setBools, setMsg, res?.data);
          clrMsg(setBools, setMsg);
        }
      } catch (err) {}
    }
  };
  return (
    <section id="contact" className="contact-section pt-120 pb-105">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-3"></div>
          <div className="col-md-6 col-sm-12">
            <div className="contact-wrapper mb-30">
              <h2 className="mb-20 wow fadeInDown" data-wow-delay=".2s">
                BTC Deposit Confirmation Form
              </h2>
              <p
                className="mb-55 wow fadeInUp text-danger"
                data-wow-delay=".4s"
              >
                Manual confirmation is neccessary in order to filter fake
                transactions and protect our company and investors fund.
              </p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    BTC Address
                    <input
                      type="text"
                      id=""
                      name="wallet_address"
                      placeholder="Enter your BTC address"
                      value={info.wallet_address}
                      onChange={(e) => handleInput(e, setInfo)}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    Amount in BTC:
                    <input
                      type="text"
                      name="amount"
                      placeholder="Enter amount sent in BTC"
                      value={info.amount}
                      onChange={(e) => handleInput(e, setInfo)}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    Date of transaction:
                    <input
                      type="date"
                      name="date"
                      placeholder="Select Date"
                      value={info.date}
                      onChange={(e) => handleInput(e, setInfo)}
                    />
                  </div>
                </div>
                {bools.error && (
                  <div className="form-group row">
                    <div className="col-md-12">
                      <p className="text-danger" style={{ fontWeight: 500 }}>
                        {msg.error}
                      </p>
                    </div>
                  </div>
                )}

                {bools.success && (
                  <div className="form-group row">
                    <div className="col-md-12">
                      <p className="text-success" style={{ fontWeight: 500 }}>
                        {msg.success}
                      </p>
                    </div>
                  </div>
                )}
                <button
                  disabled={bools.loading}
                  type="submit"
                  className="theme-btn theme-btn-2 w-100"
                >
                  {bools.loading
                    ? "Submitting request ..."
                    : "Request confirmation"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BTCDepositForm;
