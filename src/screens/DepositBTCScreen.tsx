import React, { Fragment } from "react";
import BTCDepositInfo from "../components/deposits/BTCDepositInfo";
import BTCDepositForm from "../components/form/BTCDepositForm";
import Navbar from "../components/Navbar";

const DepositBTCScreen: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <BTCDepositInfo />
      <BTCDepositForm />

      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </Fragment>
  );
};

export default DepositBTCScreen;
