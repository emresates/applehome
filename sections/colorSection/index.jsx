"use client";

import { Model2 } from "@/components/3dmodel/Scene2";
import { Environment, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import React, { Suspense, useLayoutEffect, useRef } from "react";

const Colors = () => {
  const { nodes, materials } = useGLTF("/scene-transformed.glb");

  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let element = sectionRef.current;
    let rightElement = rightRef.current;
    let leftElement = leftRef.current;
    let textElement = textRef.current;

    let updateColor = (color, text, rgbColor) => {
      materials.Body.color.set(color);
      textElement.innerText = text;
      textElement.style.color = color;
      rightElement.style.backgroundColor = `rgba(${rgbColor}, 0.4)`;
      leftElement.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
    };

    // Pin the section
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: `+=${element.offsetWidth + 1000}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `+=${element.offsetWidth + 1000}`,
          scrub: true,
        },
      })
      .to(element, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      })
      .to(element, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      })
      .to(element, {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      })
      .to(element, {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      })
      .to(element, {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      })
      .to(element, {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
      });

    return () => {};
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex h-screen w-screen items-center justify-between"
    >
      <div ref={leftRef} className="bg-bgblue relative flex h-full w-1/2"></div>
      <h1
        ref={textRef}
        className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 -rotate-90 text-center text-5xl uppercase brightness-90"
      >
        Sierra Blue
      </h1>
      <div ref={rightRef} className="bg-bgblueVis relative flex h-full w-1/2">
        <Canvas camera={{ fov: 6.5 }}>
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model2 />
          </Suspense>
          <Environment preset="night" />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </div>
  );
};

export default Colors;
