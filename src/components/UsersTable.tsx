import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../axios";

const UsersTable: React.FunctionComponent = () => {
   const [users, setUsers] = useState([]);
   const dispatch = useDispatch();
   const requests = useSelector((state: any) => state.btcDeposits.btcDeposits);

   useEffect(() => {
      axios.get("/findAllUsers").then((res) => {
         setUsers(res.data);
      });
   }, []);

   const tableData = users?.map((user: any) => {
      return (
         <tr>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
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
                           <th scope="col">EMAIL</th>
                           <th scope="col">PASSWORD</th>
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

export default UsersTable;
