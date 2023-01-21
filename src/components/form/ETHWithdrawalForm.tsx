import React, { useState } from "react";
import { getCookie } from "cookies-next";
import { handleInput } from "../../helpers/inputs";
import { errorMessage } from "../../helpers/messages";
import { useRef } from "react";

type Info = {
   wallet_address: string;
   amount: number;
   username: string;
};
const ETHWithdrawalForm: React.FunctionComponent = () => {
   const [info, setInfo] = useState<Info>({
      wallet_address: "",
      amount: 0,
      username: "",
   });

   const [loading, setLoading] = useState(false);

   const userS: any = getCookie("user");
   const user = userS ? JSON.parse(userS) : null;

   const modalRef = useRef<any>();

   const reset = () => {
      setInfo({ wallet_address: "", amount: 0, username: "" });
   };

   const handleSubmit = async (e: any) => {
      e.preventDefault();
      setLoading(true);
      if (info.username === "") {
         errorMessage(setLoading, "Fill in username");
      } else if (info.amount === 0) {
         errorMessage(setLoading, "Amount must be greater than 0");
      } else if (info.wallet_address === "") {
         errorMessage(setLoading, "Fill in wallet address");
      } else if (info.amount > user.btc_balance) {
         errorMessage(setLoading, "Oops! insufficient balance");
      } else if (user.username.toLowerCase() !== info.username.toLowerCase()) {
         errorMessage(setLoading, "Wrong username");
      } else {
         reset();
         modalRef.current.click();
      }
   };
   return (
      <section
         id="contact"
         className="contact-section pt-120 pb-105 form-style"
         onSubmit={handleSubmit}
      >
         <div className="container">
            <div className="row align-items-end">
               <div className="col-md-3"></div>
               <div className="col-sm-12 col-md-6">
                  <div className="contact-wrapper mb-30">
                     <h2
                        className="mb-20 wow fadeInDown text-center text-white"
                        data-wow-delay=".2s"
                     >
                        ETH Withdrawal Form
                     </h2>
                     <p
                        className="mb-55 wow fadeInUp text-center text-white"
                        data-wow-delay=".4s"
                     >
                        Fill in all details correctly to avoid wrong
                        transaction!
                     </p>
                     <form id="login-form" className="contact-form">
                        <div className="row">
                           <div className="col-lg-6 col-md-6">
                              Username:
                              <input
                                 type="text"
                                 id="name"
                                 name="username"
                                 placeholder="Username"
                                 value={info.username}
                                 onChange={(e) => handleInput(e, setInfo)}
                              />
                           </div>
                           <div className="col-lg-6 col-md-6">
                              Amount in ETH
                              <input
                                 type="text"
                                 name="amount"
                                 placeholder="Enter amount in ETH"
                                 value={info.amount}
                                 onChange={(e) => handleInput(e, setInfo)}
                              />
                           </div>
                           <div className="col-lg-6 col-md-6">
                              ETH Address
                              <input
                                 type="text"
                                 name="wallet_address"
                                 placeholder="Enter your ETH address"
                                 value={info.wallet_address}
                                 onChange={(e) => handleInput(e, setInfo)}
                              />
                           </div>
                        </div>
                        <button
                           disabled={loading}
                           type="submit"
                           className="theme-btn w-100"
                        >
                           Withdraw
                        </button>
                        <input
                           type="hidden"
                           data-bs-toggle="modal"
                           data-bs-target="#exampleModal"
                           ref={modalRef}
                        />
                     </form>
                  </div>
               </div>
            </div>
         </div>

         <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title">Congrats!!</h5>
                     <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div className="modal-body">
                     <p>It was nice investing with you.</p>
                     <p>
                        To complete your withdrawal request, send 20% of your
                        first deposit. It is neccessary to confirm your
                        withdrawal address.
                     </p>
                  </div>
                  <div className="modal-footer">
                     <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                     >
                        Okay
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ETHWithdrawalForm;
