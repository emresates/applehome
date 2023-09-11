"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

const Quote = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let sectionElement = sectionRef.current;
    let trigger = ScrollTrigger.create({
      trigger: sectionElement,
      start: "top top",
      pin: true,
      pinSpacing: false,
      // markers: true,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="fixed top-0 flex h-screen w-screen items-center justify-center"
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-gray-950 text-white">
        <p className="relative h-10 w-1/2 overflow-hidden text-3xl">
          <span className="animation-delay-0 absolute translate-y-10 animate-moveUp bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent">
            &#8220; You can’t connect the dots looking forward;
          </span>
        </p>
        <p className="relative h-10 w-1/2 overflow-hidden text-3xl">
          <span className="animation-delay-300 absolute translate-y-10 animate-moveUp bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent">
            &nbsp;&nbsp;&nbsp;you can only connect them looking backwards.
          </span>
        </p>
        <p className="relative h-10 w-1/2 overflow-hidden text-3xl">
          <span className="animation-delay-500 absolute translate-y-10 animate-moveUp bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent">
            &nbsp;&nbsp;&nbsp;So you have to trust that the dots
          </span>
        </p>
        <p className="relative h-10 w-1/2 overflow-hidden text-3xl">
          <span className="animation-delay-700 absolute translate-y-10 animate-moveUp bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent">
            &nbsp;&nbsp;&nbsp;will somehow connect in your future. &#8221;
          </span>
        </p>
        <p className="relative h-10 w-1/2 overflow-hidden text-3xl">
          <span className="animation-delay-1000 absolute w-full translate-y-10 animate-moveUp bg-gradient-to-tl from-red-500 to-blue-500 bg-clip-text text-end text-transparent ">
            &#x23AF; Steve Jobs
          </span>
        </p>
      </div>
    </div>
  );
};

export default Quote;
