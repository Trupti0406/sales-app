import React from "react";
import "./Pages.css";

const Login = () => {
  return (
    <div className="container">
      <h1 className="text-center fw-bolder mb-3">Login Form</h1>
      <div className="mb-3">
        <label
          for="exampleFormControlInput1"
          className="form-label fw-semibold fs-6"
        >
          Email
        </label>
        <input
          type="email"
          className="form-control py-2 fw-semibold"
          id="exampleFormControlInput1"
          placeholder="Enter Email ID"
        />
      </div>
      <div className="mb-5">
        <label
          for="exampleFormControlInput1"
          className="form-label fw-semibold fs-6"
        >
         Password
        </label>
        <input
          type="password"
          className="form-control py-2 fw-semibold"
          id="exampleFormControlInput1"
          placeholder="Enter Password"
        />
      </div>
      <div className="d-grid">
        <button className="btn py-2 fs-5 fw-bold" type="button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
