import React from "react";
import HeroImage from "../components/HeroImage";
import LatestedProducts from "../components/LatestedProducts";
import BestProducts from "../components/BestProducts";

const Home = () => {
  console.log("hola")
  return (
    <>
      <HeroImage />
      <LatestedProducts />
      <BestProducts />

    </>
  );
};

export default Home;
