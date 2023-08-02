import { useDescope } from "@descope/react-sdk";
import { useNavigate } from "react-router";

const Logout = async () => {
  const { logout } = useDescope();
  const navigate = useNavigate();
  await logout();
  navigate("/")
};


export default Logout;
