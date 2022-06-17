import React, { Fragment } from "react"
import BTCWithdrawalForm from "../components/form/BTCWithdrawalForm"
import Navbar from "../components/Navbar"

const BTCWithdrawalScreen: React.FunctionComponent = () => {
    return(
        <Fragment>
            <Navbar />
            <BTCWithdrawalForm />
        </Fragment>
    )
}
export default BTCWithdrawalScreen