import React from "react";
import Hero from "./Hero";
import Quality from "./Quality";
import Products from "./Products";
import bg1 from "../assets/./more/1.png";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="  bg-center" style={{ backgroundImage: `url(${bg1})` }}>
        <section className="max-w-5xl mx-auto px-5">
          <Quality></Quality>
          <Products></Products>
        </section>
      </div>
    </div>
  );
};

export default Home;
