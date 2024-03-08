import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { MeshTransmissionMaterial, MeshRefractionMaterial, useGLTF, Image } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { useControls } from "leva"
import { TextureLoader } from 'three/src/loaders/TextureLoader'



function bottleHoverEnter() {
    const hand1 = document.getElementsByClassName('hero_hand1')
    const hand2 = document.getElementsByClassName('hero_hand2')
    const rock = document.getElementsByClassName('hero_rock')
    const pine = document.getElementsByClassName('hero_pine')
    const tag = document.getElementById("tag2");

    rock[0].classList.add("hidden");
    pine[0].classList.add("hidden");
    hand1[0].classList.add("hidden");
    hand2[0].classList.add("hidden");

    tag.style.opacity = 1;
    tag.innerHTML = "WHISKEYS";
    document.body.style.cursor = "pointer";
}

function bottleHoverLeave() {
    const hand1 = document.getElementsByClassName('hero_hand1')
    const hand2 = document.getElementsByClassName('hero_hand2')
    const rock = document.getElementsByClassName('hero_rock')
    const pine = document.getElementsByClassName('hero_pine')
    const tag = document.getElementById("tag2");

    rock[0].classList.remove("hidden");
    pine[0].classList.remove("hidden");
    hand1[0].classList.remove("hidden");
    hand2[0].classList.remove("hidden");

    tag.style.opacity = 0;
    document.body.style.cursor = "auto";
   

}


const Bottle = () => {


    const gltf = useLoader(GLTFLoader, './bottleNoMat2.glb')
    const { nodes, materials } = useGLTF("/bottleNoMat2.glb")
    const texture = useLoader(TextureLoader, "label.png")

    const ref = useRef(null)

    // Start Animation
useLayoutEffect( () => {

    // hand left
  
    gsap.fromTo(ref.current.rotation, {
      y:-2.5,
    }, {
      y:1.5,
      delay:.5,
      duration:2,
    }) 

    gsap.fromTo(ref.current.position, {
        z:-3.5,
      }, {
        z:1,
        delay:.5,
        duration:2,
      }) 


     
  }, [])


  
const materialProps = useControls({
  tickness: { value: 0.2, min:0, max: 3, step: 0.05},
  roughness: { value: 0.09, min:0, max:1, step: 0.05},
  transmission: {value: 1, min: 0, max: 1, step: 0.1},
  ior: { value: 1, min:0, max: 3, step: 0.1},
  chromaticAberration: {value: 0.02, min: 0, max: 1},
  backside: {value: true},  
})

const materialProps2 = useControls({
  roughness: { value: 0.15, min:0, max:1, step: 0.05},
  color: '#e2b6a4',
})

    return(
        
         <mesh ref={ref} onClick={() => window.location="#whiskeys"} onPointerEnter={() => bottleHoverEnter()}  onPointerLeave={() => bottleHoverLeave()}
          rotation={[0,1.6,-.2]}
          scale={[1.3,1.3,1.3]} 
          position={[0,-1.2,1]}
          >
            {/* <primitive ref={ref} object={gltf.scene} scale={[1.3,1.3,1.3]} position={[0,-1.12,1]} rotation={[0.2,1.5,-.4]} />  */}
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
          material={materials.glass}
          position={[0, 0.083, 0]}
        ><MeshTransmissionMaterial {...materialProps2} />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tapa-gleygoyne"].geometry}
          material={materials.glass}
          position={[0, 0.276, 0]}
          rotation={[-Math.PI, 1.009, -Math.PI]}
        ><MeshTransmissionMaterial {...materialProps} color={'#ffffff'}/>
        </mesh>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>

      <Image url="/label.png" transparent opacity={0.5} position={[-.31,1,0.18]} rotation={[-0.0055,-1.09,0]} scale={1.75} />

      
</mesh>
        )
}

export default Bottle