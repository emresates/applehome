"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import { useRef } from "react";

const Camera = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);

  useEffect(() => {
    const element = sectionRef.current;
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;

    //* pin the section
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom+=500 bottom",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=500 bottom",
          scrub: true,
        },
      })
      .to(video1, { scale: 0.3 }, "key1")
      .to(video2, { scale: 0.6 }, "key1");

    elements("h1").forEach((el) => {
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-10 h-screen w-screen overflow-hidden"
    >
      <video
        ref={videoRef1}
        src="/scuba.mp4"
        type="video/mp4"
        autoPlay
        muted
        loop
        className="absolute left-0 top-0 z-[2] h-full w-full object-cover object-bottom"
      />
      <video
        ref={videoRef2}
        src="/skate.mp4"
        type="video/mp4"
        autoPlay
        muted
        loop
        className="absolute right-[40%] top-0 z-[1] h-auto w-3/5"
      />
      <div
        ref={titleRef}
        className="absolute right-0 top-0 flex h-full w-1/2 flex-col items-center"
      >
        <h1 className="z-[5] text-9xl font-bold capitalize">Ready</h1>
        <h1 className="z-[5] text-9xl font-bold capitalize ml-24">Steady</h1>
        <h1 className="z-[5] text-9xl font-bold capitalize ml-48">Action</h1>
      </div>
    </div>
  );
};

export default Camera;
