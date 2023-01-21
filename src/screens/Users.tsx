import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import UsersTable from "../components/UsersTable";

const UsersScreen: React.FunctionComponent = () => {
   return (
      <Fragment>
         <Navbar />
         <UsersTable />
      </Fragment>
   );
};

export default UsersScreen;
