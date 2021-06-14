import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>Shoppy</h2>
      </div>

      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            Cart <span className="cartlogo__badge"></span>
          </Link>
        </li>
        <li>
          <Link to="/">Go Back</Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
