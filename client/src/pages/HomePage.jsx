import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Disasters from "./Disasters";
import Carousel from "./Carousel";

const HomePage = () => {
  return (
    <div>
      <Home />
      <AboutUs />
      <Disasters />
      <Carousel />
    </div>
  );
};

export default HomePage;
