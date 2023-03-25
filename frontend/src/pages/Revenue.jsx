import React, { useEffect, useState } from "react";
import axios from "axios";

const Revenue = () => {
  // const [sales, setSales] = useState([]);
  // useEffect(() => {
  //   const
  //   fetch("http://localhost:8000/revenue", {
  //     method: "GET",
  //     headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setSales(data.sales))
  //     .catch((error) => console.error(error));
  // }, []);
  const [revenue, setRevenue] = useState();

  const generateTodaysRevenue = async () => {
    // ! get today's revenue from the backend
    const response = await axios.get("http://localhost:8000/revenue");

    // ! then set that revenue

    // !sum_val is coming from the aggregate function we defined in the backend! remember?

    setRevenue(response.data.amount[0].sum_val);
  };

  useEffect(() => {
    generateTodaysRevenue();
  }, []);

  //total revenue

  const totalRevenue = () => {
    try {
      let total = 0;
      revenue?.map((sitem) => (total = total + sitem.amount));
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  // const totalRevenue = sales.reduce((sum, sale) => sum + sale.amount, 0);
  return (
    <div className="container">
      <h1 className="text-center fw-bolder mb-3">Today's Revenue Is:</h1>
      <input
        type="number"
        className="fw-bolder h3"
        value={totalRevenue()}
        readOnly
      />
      {/* <h3 className="fw-bolder">₹ 17500</h3> */}
    </div>
  );
};

export default Revenue;
