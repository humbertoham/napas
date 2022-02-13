import React from "react";
import Banner from "./Banner";
import About from "./About";
import Separator from "./Separator";
import Map from "./Map";
import Doing from "./Doing";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Separator />
      <Doing />
      <Separator />
      <Contact />
      <Map />
    </>
  );
};

export default Home;
