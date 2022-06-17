import React, { Fragment, useEffect, useState } from "react";
import axios from "../../axios";

const BTCWithdrawalRequestTable: React.FunctionComponent = () => {
  const [requests, setRequests] = useState<any>([]);

  useEffect(() => {
    axios.get("/getBtcWithdrawalRequests").then((res) => {
      setRequests(res.data);
    });
  }, []);

  const tableData = requests.map((info: any) => {
    const paymentTime = new Date(info.createdAt).getHours();
    const currentTime = new Date().getHours();
    const interval = Math.abs(currentTime - paymentTime);
    return (
      <tr>
        <td>{info.username}</td>
        <td>{info.wallet_address}</td>
        <td>{info.amount}</td>
        <td>{interval}</td>
        <td>
          <button className="btn btn-md btn-danger mr-1">Delete</button>
        </td>
      </tr>
    );
  });
  
  return (
    <Fragment>
      <section className="hero-section" style={{ height: "10vh" }}>
        <div className="container">
          <h1 className=" text-center text-white">BTC Withdrawal Requests</h1>
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
                  <th scope="col">DURATION</th>
                  <th scope="col">DELETE</th>
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

export default BTCWithdrawalRequestTable;
