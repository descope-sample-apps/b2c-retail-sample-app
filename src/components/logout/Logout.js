import { useDescope } from "@descope/react-sdk";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useDescope();
  const navigate = useNavigate();
  logout();
  navigate("/")
};


export default Logout;
