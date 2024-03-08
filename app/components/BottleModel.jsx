import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from "gsap";



export function BottleModel(props) {

    const { nodes, materials } = useGLTF("./bottleNoMat2.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["botella-glengoyne"].geometry}
        material={materials["Material.001"]}
        scale={7.48}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["botella-glengoyne-aro"].geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["botella-glengoyne-whisky"].geometry}
          material={materials.whisky}
          position={[0, 0.083, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tapa-gleygoyne"].geometry}
          material={materials["Material.001"]}
          position={[0, 0.276, 0]}
          rotation={[-Math.PI, 1.009, -Math.PI]}
        />
      </mesh>
    </group>
  );
}
