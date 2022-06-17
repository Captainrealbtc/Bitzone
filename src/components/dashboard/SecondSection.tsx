import React from "react";

const SecondSection: React.FunctionComponent = () => {
  return (
    <section id="about" className="about-section pt-150 pb-20">
      <div className="container">
        <h1 className="wow text-center">Transaction Record</h1>
        <div className="over-next">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">DATE</th>
                <th scope="col">TYPE</th>
                <th scope="col">AMOUNT</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
