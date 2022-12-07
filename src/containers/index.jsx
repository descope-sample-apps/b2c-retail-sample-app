import React from "react";
import Product from "../componants/popularProduct/Product";
import Banner from "../componants/banner/Banner";
import NewArrivals from "../componants/newArrivals/NewArrivals";
import Footer from "../common/footer/Footer";
import Header from "../componants/header/Header";
const Container = () => {
  return (
    <div>
       <Header/>
      <Banner />
      <Product />
      <NewArrivals />
      <Footer />
    </div>
  );
};

export default Container;
