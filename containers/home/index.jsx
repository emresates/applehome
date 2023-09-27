import React from "react";
import Quote from "@/components/quote";
import Hero from "@/sections/heroSection";
import PhoneModel from "@/components/3dmodel";
import Design from "@/sections/designSection";
import Display from "@/sections/displaySection";
import Processor from "@/sections/processorSection";
import Battery from "@/sections/batterySection";
import Camera from "@/sections/cameraSection";

const HomeContainer = () => {
  return (
    <div className="overflow-hidden">
      <Quote />
      <Hero />
      <PhoneModel />
      <Design />
      <Display />
      <Processor />
      <Battery />
      <Camera />
    </div>
  );
};

export default HomeContainer;
