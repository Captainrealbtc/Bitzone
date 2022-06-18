import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar: React.FunctionComponent = () => {
  const [cookies, , removeCookies] = useCookies();
  const user = cookies.user;

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
                    style={{ position: "absolute", left: 90, top: 20 }}
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
                        <a className="page-scroll active" href="#home">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#feature">
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#contact">
                          Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#login">
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#register">
                          Register
                        </a>
                      </li>
                    </Fragment>
                  )}
                  {user && (
                    <li className="nav-item">
                      <Link className="page-scroll" to="/dashboard">
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
                        >
                          BTC Deposit Requests
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="page-scroll"
                          to="/eth-deposit-requests"
                        >
                          ETH Deposit Requests
                        </Link>
                      </li>
                    </Fragment>
                  )}
                  {user && (
                    <li className="nav-item">
                      <Link
                        to=""
                        className="page-scroll text-danger fw-bold"
                        onClick={() => removeCookies("user")}
                      >
                        Logout
                      </Link>
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
