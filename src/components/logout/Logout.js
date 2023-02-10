import React from "react";
import { useAuth } from "@descope/react-sdk";
import { useNavigate } from "react-router";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  logout();
  navigate("/")
};

export default Logout;
