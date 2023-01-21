import React, { Fragment } from "react";
import FirstSection from "../components/dashboard/FirstSection";
import SecondSection from "../components/dashboard/SecondSection";
import Navbar from "../components/Navbar";

const DashboardScreen: React.FunctionComponent = () => {
   return (
      <Fragment>
         <Navbar />
         <FirstSection />
         {/* <SecondSection /> */}
         <a href="#" className="scroll-top">
            <i className="lni lni-chevron-up"></i>
         </a>
      </Fragment>
   );
};

export default DashboardScreen;
