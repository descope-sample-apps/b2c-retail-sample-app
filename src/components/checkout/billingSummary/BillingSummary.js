import React from "react";
import { Button, Typography, Col, Row, Divider } from "antd";
import "./billingSummary.css";
import { useNavigate } from "react-router-dom";
function BillingSummary() {
  const navigate = useNavigate();
  return (
    <div className="billing-main-container">
      <br />
      <Typography className="checkout-cart-heading">Checkout</Typography>
      <br />
      <div className="summary-container">
        <h3 className="bill-heading">Billing Summary</h3>

        <Row className="subtotal-row">
          <Col span={16} className="title-row">
            Subtotal
          </Col>
          <Col span={5} className="total-col">
            $24.99
          </Col>
        </Row>

        <Row className="subtotal-row">
          <Col span={16} className="title-row">
            Shipping
          </Col>
          <Col span={5} className="total-col">
            $24.99
          </Col>
        </Row>

        <Divider />

        <Row className="grandtotal-row">
          <Col span={16} className="title-row">
            Grand Total{" "}
          </Col>
          <Col span={5} className="total-col">
            $24.99
          </Col>
        </Row>

        <Row className="btn-row">
          <Col span={12}>
            <Button
              className="back-button"
              onClick={() => navigate("/payment-method")}
            >
              Back
            </Button>
          </Col>
          <Col span={12}>
            <Button
              className="payamt-button"
              onClick={() => navigate("/payment-success")}
            >
              Pay
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BillingSummary;
