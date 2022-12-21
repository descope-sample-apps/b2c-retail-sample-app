import React from "react";
import BillingAddress from "../componants/checkout/billingAddress/BillingAddress";
import Cart from "../componants/cart/Cart";
import BillingSummary from "../componants/checkout/billingSummary/BillingSummary";
import OrderPlaced from "../componants/checkout/orderPlaced/OrderPlaced";
import PaymentMethod from "../componants/checkout/paymentMethod/PaymentMethod";
import Shipping from "../componants/checkout/shipping/Shipping";
import Login from "../componants/login/Login";
import Logout from "../componants/logout/Logout";
import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Home from "./home/Home";
import Signup from "../componants/Signup/Signup";

// const ProtectedRoutes=()=>{
//   let user = JSON.parse(localStorage.getItem('loginDetails'));
//   return user?<Outlet/>:<Navigate replace to="/login"/>
// }

const Container = () => {
  return (
    <div>
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
            <Route path="billing-address" element={<BillingAddress />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment-method" element={<PaymentMethod />} />
            <Route path="billing-summary" element={<BillingSummary />} />
            <Route path="payment-success" element={<OrderPlaced />} />
          </Routes>
        </Layout>
      </React.Fragment>
    </div>
  );
};

export default Container;
