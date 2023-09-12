/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf --transform --keepmaterials 
Files: scene.gltf [49.54KB] > scene-transformed.glb [111.99KB] (-126%)
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9
Title: Apple iPhone 13 Pro Max
*/

import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Model2(props) {
  const { nodes, materials } = useGLTF("/scene-transformed.glb");

  let camera = useThree((state) => state.camera);
  let scene = useThree((state) => state.scene);

  useLayoutEffect(() => {
    camera.position.set(-0.1, 0.4, 5);
    materials.Body.color.set("#9BB5CE");
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Frame_Frame_0.geometry}
        material={materials.Frame}
      />
      <mesh
        geometry={nodes.Frame_Frame2_0.geometry}
        material={materials.Frame2}
      />
      <mesh geometry={nodes.Frame_Port_0.geometry} material={materials.Port} />
      <mesh
        geometry={nodes.Frame_Antenna_0.geometry}
        material={materials.Antenna}
      />
      <mesh
        geometry={nodes.Frame_Mic_0.geometry}
        material={materials.material}
      />
      <mesh geometry={nodes.Body_Bezel_0.geometry} material={materials.Bezel} />
      <mesh geometry={nodes.Body_Body_0.geometry} material={materials.Body} />
      <mesh
        geometry={nodes.Body_Wallpaper_0.geometry}
        material={materials.Wallpaper}
      />
      <mesh
        geometry={nodes.Body_Camera_Glass_0.geometry}
        material={materials.Camera_Glass}
      />
      <mesh geometry={nodes.Body_Lens_0.geometry} material={materials.Lens} />
      <mesh
        geometry={nodes.Body_Material_0.geometry}
        material={materials.Material}
      />
      <mesh
        geometry={nodes.Camera_Glass_0.geometry}
        material={materials.Glass}
      />
      <mesh
        geometry={nodes.Camera_Camera_Frame001_0.geometry}
        material={materials["Camera_Frame.001"]}
      />
      <mesh
        geometry={nodes.Body001_Screen_Glass_0.geometry}
        material={materials.Screen_Glass}
      />
      <mesh
        geometry={nodes.Apple_Logo_Logo_0.geometry}
        material={materials.Logo}
      />
      <mesh
        geometry={nodes.Camera001_Gray_Glass_0.geometry}
        material={materials.Gray_Glass}
      />
      <mesh
        geometry={nodes.Camera001_Flash_0.geometry}
        material={materials.Flash}
      />
      <mesh
        geometry={nodes.Camera001_Camera_Frame_0.geometry}
        material={materials.Camera_Frame}
      />
      <mesh
        geometry={nodes.Camera001_Black_Glass_0.geometry}
        material={materials.Black_Glass}
      />
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");
