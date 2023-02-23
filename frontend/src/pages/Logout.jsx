import React from "react";

const Logout = () => {
  return (
    <div className="container">
      <h1 className="text-center fw-bolder mb-5">Are you sure youwant to Logout?</h1>
      <div className="d-grid col-3 m-auto">
        <button className="btn py-2 fs-5 fw-bold" type="button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
