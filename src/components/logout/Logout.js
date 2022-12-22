import React from "react";
import { useAuth } from "@descope/react-sdk";

const Logout = () => {
  const { logout } = useAuth();
  logout();
  window.location.href = "/";
  return (<></>)
};

export default Logout;
