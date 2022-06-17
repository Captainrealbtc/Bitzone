import React, { Fragment, useEffect, useState } from "react";
import axios from "../../axios";

const ETHWithdrawalRequestTable: React.FunctionComponent = () => {
  const [requests, setRequests] = useState<any>([]);

  useEffect(() => {
    axios.get("/getEthWithdrawalRequests").then((res) => {
      setRequests(res.data);
    });
  }, []);

  const tableData = requests.map((info: any) => {
    return (
      <tr>
        <td>{info.username}</td>
        <td>{info.wallet_address}</td>
        <td>{info.amount}</td>
        <td>
          <button className="btn btn-md btn-danger mr-1">Delete</button>
        </td>
      </tr>
    );
  });

  console.log(requests);
  return (
    <Fragment>
      <section className="hero-section" style={{ height: "10vh" }}>
        <div className="container">
          <h1 className=" text-center text-white">ETH Withdrawal Requests</h1>
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

export default ETHWithdrawalRequestTable;
