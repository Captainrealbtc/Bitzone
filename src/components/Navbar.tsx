import React, { Fragment, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, removeCookies } from "cookies-next";

const Navbar: React.FunctionComponent = () => {
   const navigate = useNavigate();
   const userS: any = getCookie("user");
   const user = userS ? JSON.parse(userS) : null;
   const toggleRef: any = useRef();

   return (
      <header className="header navbar-area text-danger">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg">
                     <a className="navbar-brand">
                        <div style={{ position: "relative" }}>
                           <img
                              src="assets/img/site-logo.png"
                              className="logo"
                              alt="Logo"
                           />{" "}
                           <span
                              className="logo-text"
                              style={{
                                 position: "absolute",
                                 left: 90,
                                 top: 20,
                              }}
                           >
                              Cryptovesto
                           </span>
                        </div>
                     </a>
                     <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        ref={toggleRef}
                     >
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                     </button>

                     <div
                        className="collapse navbar-collapse sub-menu-bar"
                        id="navbarSupportedContent"
                     >
                        <ul id="nav" className="navbar-nav ml-auto">
                           {!user && (
                              <Fragment>
                                 <li className="nav-item">
                                    <a
                                       className="page-scroll active"
                                       href="#home"
                                       onClick={() => toggleRef.current.click()}
                                    >
                                       Home
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a
                                       className="page-scroll"
                                       href="#feature"
                                       onClick={() => toggleRef.current.click()}
                                    >
                                       Features
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a
                                       className="page-scroll"
                                       href="#about"
                                       onClick={() => toggleRef.current.click()}
                                    >
                                       About
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a
                                       className="page-scroll"
                                       href="#contact"
                                       onClick={() => toggleRef.current.click()}
                                    >
                                       Contact
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a
                                       className="page-scroll"
                                       href="#login"
                                       onClick={() => toggleRef.current.click()}
                                    >
                                       Login
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a
                                       className="page-scroll"
                                       href="#register"
                                       onClick={() => toggleRef.current.click()}
                                    >
                                       Register
                                    </a>
                                 </li>
                              </Fragment>
                           )}
                           {user && (
                              <li className="nav-item">
                                 <Link
                                    className="page-scroll"
                                    to="/dashboard"
                                    onClick={() => toggleRef.current.click()}
                                 >
                                    Dashboard
                                 </Link>
                              </li>
                           )}
                           {user?.isAdmin && (
                              <Fragment>
                                 <li className="nav-item">
                                    <Link
                                       className="page-scroll"
                                       to="/btc-deposit-requests"
                                       onClick={() => toggleRef.current.click()}
                                    >
                                       BTC Deposit Requests
                                    </Link>
                                 </li>
                                 <li className="nav-item">
                                    <Link
                                       className="page-scroll"
                                       to="/eth-deposit-requests"
                                       onClick={() => toggleRef.current.click()}
                                    >
                                       ETH Deposit Requests
                                    </Link>
                                 </li>
                                 <li className="nav-item">
                                    <Link
                                       className="page-scroll"
                                       to="/users"
                                       onClick={() => toggleRef.current.click()}
                                    >
                                       Users
                                    </Link>
                                 </li>
                              </Fragment>
                           )}
                           {user && (
                              <li className="nav-item">
                                 <button
                                    className="page-scroll text-danger fw-bold btn btn-default"
                                    onClick={() => {
                                       removeCookies("user");
                                       navigate("/");
                                       console.log("Login out");
                                    }}
                                 >
                                    Logout
                                 </button>
                              </li>
                           )}
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
