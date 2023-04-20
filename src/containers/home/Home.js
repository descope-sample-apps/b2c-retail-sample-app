import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import Product from "../../components/popularProduct/Product";
import WelcomeModal from "../../components/welcomeModal/WelcomeModal";

const Home = () => {
  useEffect(() => {
    localStorage.removeItem('pathState');
  }, []);
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
