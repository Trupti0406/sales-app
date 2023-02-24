import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fw-semibold">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          SalesApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink to="/" className="nav-item">
              <div className="nav-link me-3">Add Sales</div>
            </NavLink>
            <NavLink to="/top5Sales" className="nav-item">
              <div className="nav-link me-3">Top 5 Sales</div>
            </NavLink>
            <NavLink to="/revenue" className="nav-item">
              <div className="nav-link me-3">Today's Total Revenue</div>
            </NavLink>
            <NavLink to="/login" className="nav-item">
              <div className="nav-link me-3">Login</div>
            </NavLink>
            <NavLink to="/register" className="nav-item">
              <div className="nav-link me-3">Register</div>
            </NavLink>
            <NavLink to="/logout" className="nav-item">
              <div className="nav-link me-3">Logout</div>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
