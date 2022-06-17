import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import BTCWithdrawalRequestTable from "../components/request/BTCWithdrawalRequestTable";

const BTCWithdrawalRequestScreen: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <BTCWithdrawalRequestTable /> 
    </Fragment>
  );
};

export default BTCWithdrawalRequestScreen;
