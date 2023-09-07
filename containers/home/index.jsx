import React from "react";
import Quote from "../../components/quote";
import Hero from "../../components/heroSection";

const HomeContainer = () => {
  return (
    <div className="overflow-hidden">
      <Quote />
      <Hero />
    </div>
  );
};

export default HomeContainer;
