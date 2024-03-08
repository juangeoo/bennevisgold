import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import "./Hero.scss"
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import BottleModel from "./BottleModel"
import Bottle from "./Bottle"

import { Environment, Html, Loader, Suspense } from '@react-three/drei'
import { Vector3 } from 'three'
import gsap from "gsap"


const Hero = () => {

  const vec = new Vector3()

  function Rig() {
    return useFrame(({ camera, pointer }) => {
      vec.set(pointer.x * -2, pointer.y * -1, camera.position.z)
      camera.position.lerp(vec, 0.025)
      camera.lookAt(0,0,1)
    })
  }

  const [selected, setSelected] = useState(0);
  
  // Objects hover
  function Hover() {
    return useEffect(() => {
     
      
      const hand1 = document.getElementsByClassName('hero_hand1')
      const hand2 = document.getElementsByClassName('hero_hand2')
      const rock = document.getElementsByClassName('hero_rock')
      const pine = document.getElementsByClassName('hero_pine')
      const canvas = document.getElementsByClassName('canvas')
    
    
      return () => {
      

          // HAND 1
        hand1[0].addEventListener("mouseenter", function(){
          setSelected(1)
          
          rock[0].classList.add("hidden");
          pine[0].classList.add("hidden");
          canvas[0].classList.add("hidden");
          
      });
    
      hand1[0].addEventListener("mouseleave", function(){
        setSelected(0)
       
        rock[0].classList.remove("hidden");
        pine[0].classList.remove("hidden");
        canvas[0].classList.remove("hidden");
        
    });
    
    // HAND 2
    hand2[0].addEventListener("mouseenter", function(){
      setSelected(1)
      rock[0].classList.add("hidden");
      pine[0].classList.add("hidden");
      canvas[0].classList.add("hidden");
    });
    
    hand2[0].addEventListener("mouseleave", function(){
    setSelected(0)
    rock[0].classList.remove("hidden");
    pine[0].classList.remove("hidden");
    canvas[0].classList.remove("hidden");
    });
    
    // ROCK
    
    rock[0].addEventListener("mouseenter", function(){
      setSelected(2)
      hand1[0].classList.add("hidden");
      hand2[0].classList.add("hidden");
      
      canvas[0].classList.add("hidden");
    });
    
    rock[0].addEventListener("mouseleave", function(){
    setSelected(0)
    hand1[0].classList.remove("hidden");
      hand2[0].classList.remove("hidden");
      
      canvas[0].classList.remove("hidden");
    });
    
    
    // PINE
    
    pine[0].addEventListener("mouseenter", function(){
      setSelected(2)
      hand1[0].classList.add("hidden");
      hand2[0].classList.add("hidden");
     
      canvas[0].classList.add("hidden");
    });
    
    pine[0].addEventListener("mouseleave", function(){
    setSelected(0)
    hand1[0].classList.remove("hidden");
      hand2[0].classList.remove("hidden");
      
      canvas[0].classList.remove("hidden");
    });
        

      };
    }, [selected]);
  }

  // Objects move
    useEffect(() => {
      const container = document.querySelector(".hero");
      const layer = document.querySelectorAll(".layer");
      const tag = document.getElementById("tag");
      const tag2 = document.getElementById("tag2");

      window.scrollTo(0, Element.scrollTop)
      

      container.onmousemove = function(e){
        const X = e.pageX;
        const Y = e.pageY;
        
        layer[0].style.transform = 'rotate('+ X/100 +'deg) translateX('+ X/16 +'px) translateY('+  Y/16 +'px)';
        layer[1].style.transform = 'rotate('+ X/100 +'deg) translateX('+  X/16 +'px) translateY('+  Y/16 +'px)';
        layer[2].style.transform = 'rotate('+ X/100 +'deg) translateX('+  X/100 +'px) translateY('+  Y/100 +'px)';
        layer[3].style.transform = 'rotate('+ X/100 +'deg) translateX('+  X/100 +'px) translateY('+  Y/100 +'px)';
        tag.style.transform = 'rotate('+ X/50 +'deg)';
        tag2.style.transform = 'rotate('+ X/50 +'deg)';

      }
   
  }, []);


  // Tag follows cursor
  useEffect(() => {
    const tag = document.getElementById("tag");
    const tag2 = document.getElementById("tag2");

    document.addEventListener("mousemove", function(e){
      const x = e.clientX;
      const y = e.clientY;

      tag.style.left = x + "px";
      tag.style.top = y + "px";

      tag2.style.left = x + "px";
      tag2.style.top = y + "px";

    
      if (selected == 0){
        tag.style.opacity = 0;
      }
      else if (selected == 1){
        tag.style.opacity = 1;
        tag.innerHTML = "ABOUT US"
      }
      else if(selected == 2){
        tag.style.opacity = 1;
        tag.innerHTML = "TERRITORY"
      }
      else{ 
      }


    })
      
 
}, [selected]);

// Start Animation
useLayoutEffect( () => {

  // hand left

  gsap.fromTo(".hero_hand1", {
      left:"-20%",
  }, {
    left:"-3%",
    ease:"power2.inOut",
    delay:1,
    duration:2,
  })

  // hand right

  gsap.fromTo(".hero_hand2", {
  right:"-20%",
}, {
  right:"-3%",
  ease:"power2.inOut",
  duration:2,
  delay:1
})

   
}, [])

  return (
    <div className="hero">      
      
      <Canvas className={"canvas"} style={{zIndex: "0"}} camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 5] }} gl={{physicallyCorrectLights: true, preserveDrawingBuffer: true}}>
      
      <Environment preset='lobby' />
    
      <color attach="background" args={["#EEEFD8"]} />
      <ambientLight />
      <pointLight position={[1, 1, 1]} />
         <Bottle />
        <Rig />
       </Canvas>

      <div className="hero_tag" id="tag"></div>
      <div className="hero_tag" id="tag2"></div>

      <a href="/territory"><img className="hero_rock layer"  src="./rock.png" alt="" draggable="false" /></a>
      <a href="/territory"><img className="hero_pine layer"  src="./pine.png" alt="" draggable="false" /></a>
      <a href="/aboutus"><img className="hero_hand1 layer" src="./hand1b.png" alt="" draggable="false" /></a>
      <a href="/aboutus"><img className="hero_hand2 layer" src="./hand2b.png" alt="" draggable="false" /></a>

      <Hover />
       </div>


       
  )
}



export default Hero