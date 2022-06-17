import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import ETHDepositRequestTable from "../components/request/ETHDepositRequestTable";

const ETHDepositRequestScreen: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <ETHDepositRequestTable /> 
    </Fragment>
  );
};

export default ETHDepositRequestScreen;
