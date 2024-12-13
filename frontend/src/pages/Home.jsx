import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import Events from "../components/Route/Events/Events";
import FeaturedProducts from "../components/Route/FeaturedProducts/FeaturedProducts";
// import Sponsored from '../../src/components/Route/Footer/Footer.jsx';
import Footer from "../components/Route/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <div>
        <Header activeHeading={1} />
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProducts />
        {/* <Sponsored /> */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
