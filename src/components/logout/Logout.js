import { useDescope } from "@descope-int/react-dynamic-sdk";
import { useNavigate } from "react-router";

const Logout = () => {
  const { logout } = useDescope();
  const navigate = useNavigate();
  logout();
  navigate("/")
};


export default Logout;
