import React from "react";
import { Link } from "react-router-dom";

const HomeSection: React.FunctionComponent = () => {
  return (
    <section id="home" className="hero-section">
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="hero-content-wrapper">
              <h1 className="text-white wow fadeInDown" data-wow-delay=".2s">
                Trade and Invest on Crypto Using Our Platform
              </h1>
              <p className="text-white wow fadeInLeft" data-wow-delay=".4s">
                Investing in crypto currency shouldn't be complicated. Cryptovesto is designed to make accumulating and growing of crypto simple for everyone.
              </p>
              <a
              href="#register"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".6s"
              >
                Register Now
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="hero-img">
              <img
                src="assets/img/hero-img.svg"
                alt=""
                className="wow fadeInRight"
                data-wow-delay=".5s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
