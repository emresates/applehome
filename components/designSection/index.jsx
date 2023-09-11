"use client";

import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const Design = () => {
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
      .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <div
      ref={container}
      className="relative flex h-screen w-screen flex-col items-center justify-end overflow-hidden bg-slate-100"
    >
      <p
        ref={textOne}
        className="z-10 flex h-1/2 w-full flex-col items-start justify-center"
      >
        <span className="w-[90%] text-8xl font-semibold capitalize">
          Flaw-less design with strong durability.
        </span>
      </p>
      <p
        ref={textTwo}
        className="z-10 flex h-1/2 w-full flex-col items-end justify-center"
      >
        <span className="w-[80%] text-8xl font-semibold capitalize">
          Flaw-edge design with toughest smartphone glass.
        </span>
      </p>
    </div>
  );
};

export default Design;
