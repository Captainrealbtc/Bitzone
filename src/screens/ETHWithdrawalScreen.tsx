import React, { Fragment } from "react"
import ETHWithdrawalForm from "../components/form/ETHWithdrawalForm"
import Navbar from "../components/Navbar"

const ETHWithdrawalScreen: React.FunctionComponent = () => {
    return(
        <Fragment>
            <Navbar />
            <ETHWithdrawalForm />
        </Fragment>
    )
}
export default ETHWithdrawalScreen