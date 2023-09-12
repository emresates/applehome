import React from "react";

const Hero = () => {
  return (
    <section className="relative flex h-screen w-screen overflow-hidden bg-black">
      <div className="absolute left-0 top-0 z-0 h-full w-full">
        <video
          className="h-full w-full object-cover object-bottom"
          src="./ink.mp4"
          typeof="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <h1 className="font-source absolute left-8 top-8 text-4xl font-thin text-white">
        iPhone 14 Pro Max
      </h1>
      <p className="flex h-full w-full items-center justify-between uppercase">
        <span className="z-10 bg-gradient-to-l from-red-500 to-blue-500 bg-clip-text p-8 text-7xl font-semibold text-transparent">
          So.Cold.
        </span>
        <span className="z-10 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text p-8 text-7xl font-semibold text-transparent">
          So.Bold.
        </span>
      </p>
    </section>
  );
};

export default Hero;
