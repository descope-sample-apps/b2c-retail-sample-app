import React, { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@descope/react-sdk";
import hamburger from "../../assets/hamburger.svg";
import close from "../../assets/close.svg";
import "./Header.css";
import { Badge, Button } from "antd";

const getDisplayName = (user) => {
  return user?.email || "";
};

function Header() {
  let selectedItems = JSON.parse(localStorage.getItem("selectedItem"))
    ? JSON.parse(localStorage.getItem("selectedItem"))
    : [];
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [cartLength, setCartLength] = useState([]);
  const { user, authenticated } = useAuth();
  const { loginLabel, linkPath } = authenticated
    ? { loginLabel: `${getDisplayName(user)} (Logout)`, linkPath: "/logout" }
    : { loginLabel: "Login", linkPath: "/login" };
  const doLogout = () => {
    const localStorageKeysToRemove = [
      "selectedItem",
      "productData",
      "newArrivalData",
      "loginDetails",
      "firstVisit",
    ];
    for (const key of localStorageKeysToRemove) {
      localStorage.removeItem(key);
    }
    setIsNavExpanded(!isNavExpanded);
  };
  useEffect(() => {
    if (cartLength && selectedItems.length !== cartLength.length)
      setCartLength(selectedItems);
  }, [selectedItems]);

  return (
    <>
      <nav className="main-nav">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {!isNavExpanded ? (
            <img src={hamburger} alt="hamburger" />
          ) : (
            <img src={close} alt="close" />
          )}
        </button>
        <div className="logo">
          <Link to="/">
            <h2>Tee-Hee Tees</h2>
          </Link>
        </div>

        <div className={!isNavExpanded ? "navbar-expanded" : "navbar"}>
          <ul className="menu-list">
            <li className="menu-lists">
              <NavLink
                to="/"
                className="menu-title"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Popular
              </NavLink>
            </li>
            <li className="menu-lists">
              <NavLink
                to="/"
                className="menu-title"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                New
              </NavLink>
            </li>
            <li className="menu-lists">
              <div className="btntag-mobile">
                <NavLink to={linkPath} className="nav-link" onClick={doLogout}>
                  <Button className={authenticated ? "btn-login" : "login-nav"}>
                    {loginLabel}
                  </Button>
                </NavLink>
              </div>
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
            <Badge
              count={cartLength.length}
              overflowCount={100}
              style={{ top: "2em" }}
              className="cart-display"
            >
              <img src={require("../../assets/cart.svg").default} alt="cart" />
            </Badge>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
