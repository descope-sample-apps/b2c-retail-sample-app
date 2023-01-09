import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main style={{backgroundColor: '#efebfb'}}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
