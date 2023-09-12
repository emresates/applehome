import React from "react";
import Quote from "@/components/quote";
import Hero from "@/components/heroSection";
import PhoneModel from "@/components/3dmodel";
import Design from "@/components/designSection";
import Display from "@/components/displaySection";
import Processor from "@/components/processorSection";
import Battery from "@/components/batterySection";

const HomeContainer = () => {
  return (
    <div className="overflow-hidden">
      <Quote />
      <Hero />
      {/* <PhoneModel /> */}
      <Design />
      <Display />
      <Processor />
      <Battery />
    </div>
  );
};

export default HomeContainer;
