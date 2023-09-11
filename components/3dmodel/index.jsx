"use client";
import { Model } from "@/public/3dmodel/Scene";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const PhoneModel = () => {
  return (
    <div
      id="phoneModel"
      className="fixed top-0 z-10 h-screen w-screen bg-transparent transition-all"
    >
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="night" />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default PhoneModel;
