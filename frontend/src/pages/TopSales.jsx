import React, { useEffect, useState } from "react";
// import axios from "axios";
import Alerter from "sweetalert2";
import "./Pages.css";

const TopSales = async () => {
  const [sales, setSales] = useState([""]);

  useEffect(() => {
    fetch("http://localhost:8000/top5Sales", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("authToken") },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            Alerter.fire({
              title: "Error!",
              text: "Failed To Fetch Or Login First",
              icon: "error",
              confirmButtonText: "Cool",
            })
          );
        }
        return response.json();
      })
      .then((data) => setSales(data.sales))
      .catch((error) => console.error(error));
  }, []);

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
          {sales &&
            sales.map((sales) => (
              <tr key={sales._id}>
                <td>{sales + 1}</td>
                <td>{sales._id}</td>
                <td>{sales.productName}</td>
                <td>{sales.quantity}</td>
                <td>{sales.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSales;
