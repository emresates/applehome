import React from "react";

const Processor = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col justify-center overflow-hidden bg-black text-white">
      <h1 className="absolute bottom-8 left-1/2 w-full -translate-x-1/2 bg-gradient-to-b from-red-500 to-blue-500 bg-clip-text text-center font-source text-9xl text-transparent">
        Fastest Processor
      </h1>
      <div className="absolute left-1/2 top-1/2 flex h-auto w-1/4 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <img
          className="animate-blur h-auto w-full p-2"
          src="./A15.jpg"
          alt="bionic"
        />
      </div>
      <div className="flex h-1/2 w-2/6 flex-col justify-center text-xl text-gray-700">
        <span className="mx-1 pl-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
          praesentium sed beatae ducimus reiciendis corrupti totam quod
          voluptatum porro adipisci quibusdam molestias necessitatibus magni.
          Cumque commodi quibusdam at similique explicabo!
        </span>
        <br />
        <span className="mx-1 pl-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
          praesentium sed beatae ducimus reiciendis corrupti totam quod
          voluptatum porro adipisci.
        </span>
      </div>
    </div>
  );
};

export default Processor;
