import React, { Fragment, useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios";
import { btcDepositsUpdated } from "../../reducers/BTCDepositSlice";

const DepositRequestTable: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state: any) => state.btcDeposits.btcDeposits);

  const deleteRequest = async (id: string) => {
    const info = { id };
    try {
      const res = await axios.post("/deleteBtcDepositRequest", info);
      dispatch(btcDepositsUpdated(res.data));
    } catch (err) {}
  };

  const redemeRequest = async (info: any) => {
    try {
      const res = await axios.post("/redemeBtcDepositRequest", info);
      dispatch(btcDepositsUpdated(res.data));
    } catch (err) {}
  };

  useEffect(() => {
    axios.get("/getBtcDepositRequests").then((res) => {
      dispatch(btcDepositsUpdated(res.data));
    });
  }, []);

  const tableData = requests?.map((info: any) => {
    
    const paymentTime = new Date(info.createdAt).getHours();
    const currentTime = new Date().getHours();
    const interval = Math.abs(currentTime - paymentTime);
    return (
      <tr>
        <td>{info.username}</td>
        <td>{info.wallet_address}</td>
        <td>{info.amount}</td>
        <td>{interval}</td>
        <td>{info.redemed ? "redemed" : "not redemed"}</td>
        <td>
          <button
            className="btn btn-sm btn-danger mr-1"
            onClick={() => deleteRequest(info._id)}
          >
            Delete
          </button>
          <button
            className="btn btn-sm btn-success "
            disabled={info.redemed}
            onClick={() => redemeRequest(info)}
          >
            {info.redemed?"Redeemed": "Redeme"}
          </button>
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      <section className="hero-section" style={{ height: "10vh" }}>
        <div className="container">
          <h1 className=" text-center text-white">BTC Deposit Requests</h1>
        </div>
      </section>

      <section id="about" className="about-section pt-150 pb-20">
        <div className="container">
          <div className="over-next">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">USERNAME</th>
                  <th scope="col">ADDRESS</th>
                  <th scope="col">AMOUNT</th>
                  <th scope="col">TIME</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>{tableData}</tbody>
            </table>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default DepositRequestTable;
