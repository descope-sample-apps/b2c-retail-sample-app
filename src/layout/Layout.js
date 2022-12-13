import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import NewArrivals from "../componants/newArrivals/NewArrivals";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
