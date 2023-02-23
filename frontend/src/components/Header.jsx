import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fw-semibold">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
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
              <a className="nav-link me-3" href="#">
                Add Sales
              </a>
            </NavLink>
            <NavLink to="/top5Sales" className="nav-item">
              <a className="nav-link me-3" href="#">
                Top 5 Sales
              </a>
            </NavLink>
            <NavLink to="/revenue" className="nav-item">
              <a className="nav-link me-3" href="#">
                Today's Total Revenue
              </a>
            </NavLink>
            <NavLink to="/login" className="nav-item">
              <a className="nav-link me-3" href="#">
                Login
              </a>
            </NavLink>
            <NavLink to="/register" className="nav-item">
              <a className="nav-link me-3" href="#">
                Register
              </a>
            </NavLink>
            <NavLink to="/logout" className="nav-item">
              <a className="nav-link me-3" href="#">
                Logout
              </a>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
