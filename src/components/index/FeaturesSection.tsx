import React from "react";

const FeaturesSection: React.FunctionComponent = () => {
   return (
      <section id="feature" className="feature-section pt-150">
         <div className="container">
            <div className="row">
               <div className="col-xl-7 col-lg-8 mx-auto">
                  <div className="section-title text-center mb-55">
                     <h2 className="mb-20 wow fadeInUp" data-wow-delay=".2s">
                        Crypto Investing Simplified
                     </h2>
                     <p className="wow fadeInUp" data-wow-delay=".4s">
                        Cryptovesto makes crypto investing accessible to
                        everyone.
                     </p>
                  </div>
               </div>
            </div>
            <div className="features-wrapper">
               <div className="row justify-content-center">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div
                        className="single-feature text-center mb-30 wow fadeInUp"
                        data-wow-delay=".2s"
                     >
                        <div className="feature-img mb-20">
                           <img src="assets/img/feature-1.svg" alt="" />
                        </div>
                        <div className="feature-content">
                           <h5>Buy and Deposit Your Crypto</h5>
                           <p>Register and deposit to your account.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div
                        className="single-feature text-center mb-30 wow fadeInUp"
                        data-wow-delay=".6s"
                     >
                        <div className="feature-img mb-20">
                           <img src="assets/img/feature-3.svg" alt="" />
                        </div>
                        <div className="feature-content">
                           <h5>Invest for long term</h5>
                           <p>
                              Invest daily. You get 10% increase of your
                              investment amount every day when you login. You
                              invest as many times you like.
                           </p>
                           <p>
                              You also get 20% increase on your first deposit.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div
                        className="single-feature text-center mb-30 wow fadeInUp"
                        data-wow-delay=".4s"
                     >
                        <div className="feature-img mb-25">
                           <img src="assets/img/feature-2.svg" alt="" />
                        </div>
                        <div className="feature-content">
                           <h5>Withdraw instantly</h5>
                           <p>
                              Withdrawal made simple for everyone. it happens at
                              an instant. No referral needed for withdrawal.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FeaturesSection;
