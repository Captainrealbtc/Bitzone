import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import ETHWithdrawalRequestTable from "../components/request/ETHWithdrawalRequestTable";

const ETHWithdrawalRequestScreen: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <ETHWithdrawalRequestTable /> 
    </Fragment>
  );
};

export default ETHWithdrawalRequestScreen;
