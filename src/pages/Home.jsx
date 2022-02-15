import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import ExploreMenu from "../components/ExploreMenu";
import ChefSpecial from "../components/ChefSpecial";
import Drinks from "../components/Drinks";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <ExploreMenu />
      <ChefSpecial />
      <Drinks />
      {/* <Products/> */}
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
