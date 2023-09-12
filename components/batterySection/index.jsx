"use client";

import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const Battery = () => {
  const battery = useRef(null);

  let elements = gsap.utils.selector(battery);

  useLayoutEffect(() => {
    // console.log(elements("li"));

    let t1 = gsap.timeline();

    elements("li").forEach((el) => {
      t1.to(
        el,

        {
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
          opacity: 1,
        },
      );
    });

    return () => {};
  }, []);

  return (
    <div className="relative flex h-screen w-screen items-center justify-end bg-slate-100">
      <h1 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-9xl font-medium capitalize">
        Go all day with single charge...
      </h1>
      <ul
        ref={battery}
        className="absolute right-20 w-64 rounded-md border-2 border-black bg-white p-2"
      >
        <li className="h-20 w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-0"></li>
        <li className="mt-2 h-20 w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-0"></li>
        <li className="mt-2 h-20 w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-0"></li>
        <li className="mt-2 h-20 w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-0"></li>
        <li className="mt-2 h-20 w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-0"></li>
      </ul>
    </div>
  );
};

export default Battery;
