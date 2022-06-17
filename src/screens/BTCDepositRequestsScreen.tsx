import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import DepositRequestTable from "../components/request/BTCDepositRequestTable";

const DepositRequestScreen: React.FunctionComponent = () => {

  return (
    <Fragment>
      <Navbar />
        <DepositRequestTable />
    </Fragment>
  );
};

export default DepositRequestScreen;
