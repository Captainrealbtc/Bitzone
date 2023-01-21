import React from "react";

const FooterSection: React.FunctionComponent = () => {
   return (
      <footer
         className="footer pt-100 img-bg"
         style={{ backgroundImage: "url(assets/img/common-bg.jpg)" }}
      >
         <div className="container">
            <div className="row">
               <div className="col-xl-4 col-lg-4 col-md-6">
                  <div
                     className="footer-widget mb-60 wow fadeInLeft"
                     data-wow-delay=".2s"
                  >
                     <div style={{ position: "relative" }}>
                        <img
                           src="assets/img/site-logo.png"
                           className="logo"
                           alt="Logo"
                        />{" "}
                        <span
                           className="logo-text"
                           style={{ position: "absolute", left: 90, top: 20 }}
                        >
                           Cryptovesto
                        </span>
                     </div>
                     <p className="mb-30">Fast, easy and reliable.</p>
                  </div>
               </div>
               <div className="col-xl-2 col-lg-2 col-md-6">
                  <div
                     className="footer-widget mb-60 wow fadeInUp"
                     data-wow-delay=".4s"
                  >
                     <h4>Quick links</h4>
                     <ul className="footer-links">
                        <li>
                           <a href="#home">Home</a>
                        </li>
                        <li>
                           <a href="#about">About</a>
                        </li>
                        <li>
                           <a href="#feature">Features</a>
                        </li>
                        <li>
                           <a href="#contact">Contact</a>
                        </li>
                        <li>
                           <a href="#login">Login</a>
                        </li>
                        <li>
                           <a href="#register">Register</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                     className="footer-widget mb-60 wow fadeInRight"
                     data-wow-delay=".8s"
                  >
                     <h4>Info</h4>
                     <ul>
                        <li className="mb-30">
                           <p>
                              Company No: C5B345 <br />
                              CSINE GROUP LTD.
                           </p>
                        </li>
                        <li>
                           <p>
                              Address: M-321 Volunt Ave, <br /> Staten Islandm,
                              NY 201526
                           </p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="copyright-area">
               <p className="mb-0 text-white text-center">
                  Copyright &copy; {new Date().getFullYear()} Cryptovesto. All
                  rights reserved
               </p>
            </div>
         </div>
      </footer>
   );
};

export default FooterSection;
