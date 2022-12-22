import React, { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '@descope/react-sdk'
import "./Header.css";
import { Badge } from "antd";

const getDisplayName = (user) => {
  return user?.email || "";
}

function Header() {
  let selectedItems = JSON.parse(localStorage.getItem('selectedItem')) ? JSON.parse(localStorage.getItem('selectedItem')) : [];
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [cartLength, setCartLength] = useState([]);
  const { user, authenticated } = useAuth();
  const {loginLabel,linkPath} = (authenticated) ? {loginLabel:`${getDisplayName(user)} (Logout)`, linkPath:'/logout'} : {loginLabel: "Login", linkPath:'/login'};
  const doLogout = () => {
    const localStorageKeysToRemove = ["selectedItem", "productData", "newArrivalData", "loginDetails"]
    for (const key of localStorageKeysToRemove) {
      localStorage.removeItem(key)
    }    
  }
  useEffect(() => {
    if (cartLength && selectedItems.length !== cartLength.length)
      setCartLength(selectedItems);
  },[selectedItems]);
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
            <NavLink to={linkPath} className="nav-link" onClick={doLogout}>
              {loginLabel}
            </NavLink>
          </div>
          <NavLink to="cart">
          <Badge count={cartLength.length} overflowCount={100} style={{top: '1em'}}>
            <img src={require("../../assets/cart.svg").default} alt='cart'/>
          </Badge>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
