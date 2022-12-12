import React from "react";
import Banner from "../../componants/banner/Banner";
import NewArrivals from "../../componants/newArrivals/NewArrivals";
import Product from "../../componants/popularProduct/Product";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Product />
      <NewArrivals />
    </React.Fragment>
  );
};

export default Home;
