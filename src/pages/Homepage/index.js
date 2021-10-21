import React from "react";
import Hero from "./../../components/Hero";
import Banner from "./../../components/Banner";
import Bestsellers from "./../../components/Bestsellers";
import Whyus from "./../../components/Whyus";
import Promotion from "./../../components/Promotion";
import Promotion2 from "./../../components/Promotion2";
import Contact from "./../../components/Contact";

const Homepage = () => {
  return (
    <div className="homepaage">
      <Hero />
      <Banner />
      <Bestsellers />
      <Whyus />
      <Promotion />
      <Promotion2 />
      <Contact />
    </div>
  );
};

export default Homepage;
