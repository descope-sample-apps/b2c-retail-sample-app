import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/">
            <h2>Tee-Hee Tees</h2>
          </Link>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={isNavExpanded ? "navbar expanded" : "navbar"}>
          <ul>
            <li>
              <a href="/" exact to="">
                Popular
              </a>
            </li>
            <li>
              <a href="/" to="">
                New
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="btntag">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </div>
          <NavLink to="cart">
            <img src={require("../../assets/cart.svg").default} />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
