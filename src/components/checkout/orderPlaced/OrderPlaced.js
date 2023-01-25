import React, {useState, useEffect} from "react";
import { Typography, Button } from "antd";
import "./order.css";
import { useNavigate } from "react-router";
import { getAllEntries } from "../../../services/apiManager";
function OrderPlaced() {
  const navigate = useNavigate();
  const [screenDetails, setScreenDetails] = useState({});
  const getAllScreemDetails = async () => {
    try {
      const response = await getAllEntries('checkout');
      setScreenDetails(response[0].fields);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    localStorage.setItem('pathState', 'CART');
    getAllScreemDetails();
  }, []);

  return (
    <div className="checkout-order-container">
      <Typography className="checkout-text">{screenDetails.heading}</Typography>
      <br />
      <br />
      <div className="order-container">
        <Typography className="order-heading">
        You have successfully completed step-up verification.<br></br> Thank You, your order has been placed!
        </Typography>
        <Typography className="order-sub-heading">
          {screenDetails.checkoutBoxSubtitile}
        </Typography>
        <br />
        <div className="btn-just-cont">
          <Button className="btn-just" onClick={() => navigate("/")}>
            {screenDetails.backBtnText}
          </Button>
          <a
            href="https://docs.descope.com"
            target="_blank"
            className="btn-feel"
            rel="noreferrer"
          >
            <Button className="btn-feed">{screenDetails.nextBtnText}</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OrderPlaced;
