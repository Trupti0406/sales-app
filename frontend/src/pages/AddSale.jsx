import React from "react";
import "./Pages.css";

const AddSale = () => {
  return (
    <div>
      <div className="registration container">
        <h1 className="text-center fw-bolder mb-3">Add Sale Entry</h1>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label fw-semibold fs-6"
          >
            Product Name
          </label>
          <input
            type="text"
            className="form-control py-2 fw-semibold"
            id="exampleFormControlInput1"
            placeholder="Enter Product Name"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label fw-semibold fs-6"
          >
            Quantity
          </label>
          <input
            type="number"
            className="form-control py-2 fw-semibold"
            id="exampleFormControlInput1"
            placeholder="Enter Qauntity of Product"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label fw-semibold fs-6"
          >
            Amount
          </label>
          <input
            type="number"
            className="form-control py-2 fw-semibold"
            id="exampleFormControlInput1"
            placeholder="Enter the amount"
          />
        </div>
        <div className="d-grid">
          <button className="btn py-2 fs-5 fw-bold" type="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSale;
