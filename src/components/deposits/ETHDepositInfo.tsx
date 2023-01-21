import React, { useState } from "react";
import copy from "copy-to-clipboard";

const ETHDepositInfo: React.FunctionComponent = () => {
   const [copied, setCopied] = useState(false);

   const copyToClipboard = () => {
      copy(`0x24800Cdb78Aa915410A6f397C2BC754d0EaB93aB`);
      setCopied(true);
      setTimeout(() => {
         setCopied(false);
      }, 2000);
   };
   return (
      <section className="contact-section pt-120 pb-105 form-style">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-sm-12 col-md-6">
                  <div className="contact-wrapper mb-30">
                     <h2
                        className="mb-20 wow fadeInDown text-center text-white"
                        data-wow-delay=".2s"
                     >
                        Ethereum ETH Deposit Address
                     </h2>
                     <p
                        className="mb-55 wow fadeInUp text-center text-white"
                        data-wow-delay=".4s"
                     >
                        Send your deposit amount to the address aside and fill
                        the form below for your deposit to be confirmed
                     </p>

                     {/* <p
                className="mb-55 wow fadeInUp text-center text-white fw-bold"
                data-wow-delay=".4s"
              >
               NOTE: Minimum of Ethereum ETH worth $300 should be sent.
              </p> */}
                  </div>
               </div>
               <div className="col-md-6 col-sm-12 text-center">
                  <img
                     alt="QR"
                     src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=0x24800Cdb78Aa915410A6f397C2BC754d0EaB93aB"
                  />
                  <p className="text-white">ADDRESS:</p>
                  <p className="text-white over-next">
                     0x24800Cdb78Aa915410A6f397C2BC754d0EaB93aB
                  </p>
                  <button className="theme-btn" onClick={copyToClipboard}>
                     copy address
                  </button>
                  {copied && (
                     <div className="form-group row">
                        <div className="col-md-12">
                           <p
                              className="text-success"
                              style={{ fontWeight: 500 }}
                           >
                              Address copied to clipboard
                           </p>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default ETHDepositInfo;
