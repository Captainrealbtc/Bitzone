import React, { Fragment } from "react";
import ETHDepositInfo from "../components/deposits/ETHDepositInfo";
import ETHDepositForm from "../components/form/ETHDepositForm";
import Navbar from "../components/Navbar";

const DepositETHScreen: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <ETHDepositInfo />
      <ETHDepositForm />

      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </Fragment>
  );
};

export default DepositETHScreen;
