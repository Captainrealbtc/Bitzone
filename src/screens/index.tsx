import React, { Fragment } from "react";
import LoginForm from "../components/form/LoginForm";
import RegisterForm from "../components/form/RegisterForm";
import AboutSection from "../components/index/AboutSection";
import ContactSection from "../components/index/ContactSection";
import FeaturesSection from "../components/index/FeaturesSection";
import FooterSection from "../components/index/FooterSection";
import HomeSection from "../components/index/HomeSection";
import Navbar from "../components/Navbar";

const Index: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <HomeSection />
      <FeaturesSection />
      <AboutSection />
      <RegisterForm />
      <ContactSection />
      <LoginForm />
      <FooterSection />
      
      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </Fragment>
  );
};

export default Index;
