import React from "react";

const AboutSection: React.FunctionComponent = () => {
  return (
    <section id="about" className="about-section pt-150 pb-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="about-img mb-30">
              <img
                src="assets/img/about-img.svg"
                alt="image"
                className=" wow fadeInLeft"
                data-wow-delay=".4s"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-content mb-30">
              <div className="section-title mb-40">
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  About Us
                </h2>
              </div>
              <p className="mb-15 wow fadeInUp" data-wow-delay=".4s">
                Cryptovesto is a distinctive
                investment company offering our investors access to high-growth
                investment opportunities in Bitcoin and Ethereum markets and other services.
                We implement best practices of trading, investing & mining of Bitcoins
                through our operations, while offering flexibility in our
                investment plans. Our company benefits from an extensive network
                of global clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
