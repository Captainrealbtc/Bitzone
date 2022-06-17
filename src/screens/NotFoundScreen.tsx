import React from "react"
import { Link } from "react-router-dom";

const NotFoundScreen: React.FunctionComponent = () => {
    return (
        <section className="contact-section pt-120 pb-105 form-style">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-3"></div>
          <div className="col-sm-12 col-md-6">
            <div className="contact-wrapper mb-30">
              <h1
                className="mb-20 wow fadeInDown text-center text-white"
                data-wow-delay=".2s"
              >
                404
              </h1>
              <h2
                className="mb-20 wow fadeInDown text-center text-white"
                data-wow-delay=".2s"
              >
                Page Not Found
              </h2>
              <p className="text-center">
                <Link to="/" className="theme-btn">Go home</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default NotFoundScreen;