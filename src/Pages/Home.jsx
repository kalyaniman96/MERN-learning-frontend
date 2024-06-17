import React from "react";
import Header from "../Components/Header";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log("+++", location);
  return (
    <>
      {/* <div><h1></h1></div> */}
      <Carousel />
    </>
  );
};

export default Home;
