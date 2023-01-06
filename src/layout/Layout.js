import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

const Layout = (props) => {
  return (
    <div style={{height: '100%'}}>
      <Header />
      <main style={{minHeight: '69%', backgroundColor: '#efebfb'}}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
