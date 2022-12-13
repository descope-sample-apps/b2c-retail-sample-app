import React from "react";
import Banner from "../../componants/banner/Banner";
import NewArrivals from "../../componants/newArrivals/NewArrivals";
import Product from "../../componants/popularProduct/Product";
import WelcomeModal from "../../componants/welcomeModal/WelcomeModal";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <WelcomeModal />
      <Product />
      <NewArrivals />
    </React.Fragment>
  );
};

export default Home;
