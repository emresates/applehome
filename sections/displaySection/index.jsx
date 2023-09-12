"use client";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const Display = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "20%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-20%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <div className="relative flex h-[200vh] w-screen flex-col justify-around bg-black text-white">
      <h1 className="bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text font-source text-8xl text-transparent">
        Immersive <br /> Display
      </h1>
      <div className="mr-20 flex w-1/2 flex-col items-end self-end text-right">
        <h1 className="mb-4 text-5xl">Super Ratine XDR Display</h1>
        <p className="mb-2 w-7/12 text-xl text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          harum dolorum dolores magnam itaque blanditiis doloribus eligendi
          inventore expedita.
        </p>
      </div>
      <div ref={container} className="ml-20 flex w-1/2 flex-col items-start">
        <h1 className="mb-4 text-5xl">Big is better.</h1>
        <p className="mb-2 w-7/12 text-xl text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          harum dolorum dolores magnam itaque blanditiis doloribus eligendi
          inventore expedita.
        </p>
      </div>
      <div className="z-10 mb-20 flex w-full -rotate-12 select-none flex-col items-center justify-center">
        <h1
          ref={textOne}
          className="bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text p-2 font-source text-8xl text-transparent"
        >
          Tougher then ever!
        </h1>
        <h1
          ref={textTwo}
          className="bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text font-source text-8xl text-transparent"
        >
          Every touch matters.
        </h1>
      </div>
    </div>
  );
};

export default Display;
