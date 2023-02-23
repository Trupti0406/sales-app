import React from "react";
import './Pages.css'

const TopSales = () => {
  return (
    <div className="top-sales container">
      <h1 className="text-center fw-bolder mb-4">Top 5 Sales</h1>
      <table className="table table-hover table-bordered fw-semibold">
        <thead> 
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sales Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Sale Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>s1212</td>
            <td>Laptop</td>
            <td>2</td>
            <td>₹ 75000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>s1423</td>
            <td>Mobile</td>
            <td>5</td>
            <td>₹ 60000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TopSales;
