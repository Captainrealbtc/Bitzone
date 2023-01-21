import React, { useState } from "react";
import { getCookie } from "cookies-next";
import { handleInput } from "../../helpers/inputs";
import { errorMessage, successMessage } from "../../helpers/messages";
import { createBtcDeposit } from "../../request";

type Info = {
   wallet_address: string;
   amount: number;
   date: any;
   username: string;
};

const BTCDepositForm: React.FunctionComponent = () => {
   const userS: any = getCookie("user");
   const user = userS ? JSON.parse(userS) : null;

   const [info, setInfo] = useState<Info>({
      username: user?.username,
      wallet_address: "",
      amount: 0,
      date: "",
   });

   const [loading, setLoading] = useState(false);

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
      setLoading(true);
      if (info.wallet_address === "") {
         errorMessage(setLoading, "Fill in wallet address");
      } else if (info.date === "") {
         errorMessage(setLoading, "Select date");
      } else if (info.amount === 0) {
         errorMessage(setLoading, "Enter amount greater than 0");
      } else {
         try {
            const res = await createBtcDeposit(info);
            if (res?.status === 200) {
               successMessage(
                  setLoading,
                  "Deposit submitted successfully. Account would be updated within 3 hours."
               );
               reset();
            } else if (res?.status === 400) {
               errorMessage(setLoading, `${res?.data}`);
            } else {
               errorMessage(setLoading, `${res?.data}`);
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
                        Manual confirmation is neccessary in order to filter
                        fake transactions and protect our company and investors
                        fund.
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
                        <button
                           disabled={loading}
                           type="submit"
                           className="theme-btn theme-btn-2 w-100"
                        >
                           {loading
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
