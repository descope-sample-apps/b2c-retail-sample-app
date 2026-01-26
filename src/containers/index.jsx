import React from "react";
import BillingAddress from "../components/checkout/billingAddress/BillingAddress";
import Cart from "../components/cart/Cart";
import BillingSummary from "../components/checkout/billingSummary/BillingSummary";
import OrderPlaced from "../components/checkout/orderPlaced/OrderPlaced";
import PaymentMethod from "../components/checkout/paymentMethod/PaymentMethod";
import Shipping from "../components/checkout/shipping/Shipping";
import Login from "../components/login/Login";
import Logout from "../components/logout/Logout";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "./home/Home";
import Signup from "../components/Signup/Signup";
import StepUp from "../components/checkout/orderPlaced/StepUp";
import Profile from "../components/profile/Profile";

const Container = () => {
  return (
    <div data-testid="container">
      <React.Fragment>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<ProtectedRoutes />} >
            <Route path="/" element={<Home />} >
              <Route path="/" element={
                  <Navigate replace to={'/'} />
                }  
              />
            </Route>
            </Route> */}
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<Profile />} />
            <Route path="billing-address" element={<BillingAddress />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment-method" element={<PaymentMethod />} />
            <Route path="billing-summary" element={<BillingSummary />} />
            <Route path="payment-success" element={<OrderPlaced />} />
            <Route path="step-up" element={<StepUp />} />
          </Routes>
        </Layout>
      </React.Fragment>
    </div>
  );
};

export default Container;
