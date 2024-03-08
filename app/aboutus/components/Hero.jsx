import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import "./Hero.scss"
import "../../components/Hero.scss"
import gsap from "gsap"

const Hero = () => {

  useEffect(() => {
    const container = document.querySelector(".aboutus_hero");
    const layer = document.querySelectorAll(".layer");
  
    container.onmousemove = function(e){
      const X = e.pageX;
      const Y = e.pageY;
      
      layer[0].style.transform = 'rotate('+ X/100 +'deg) translateX('+  X/100 +'px) translateY('+  Y/100 +'px)';
      layer[1].style.transform = 'rotate('+ X/100 +'deg) translateX('+  X/100 +'px) translateY('+  Y/100 +'px)';

    }
 
}, []);

// Start Animation
useLayoutEffect( () => {

  // hand left

  gsap.fromTo(".aboutus_hero_hand1", {
      left:"-20%",
      opacity:0,
  }, {
    left:"-3%",
    opacity:1,
    ease:"power2.inOut",
    delay:1,
    duration:2,
  })

  // hand right

  gsap.fromTo(".aboutus_hero_hand2", {
  right:"-20%",
  opacity:0,
}, {
  right:"-3%",
  opacity:1,
  ease:"power2.inOut",
  duration:2,
  delay:1
})

   
}, [])


  return (
    <div className="aboutus_hero">
            <h1 className="aboutus_hero-h1">ABOUT US</h1>
            <h3 className="aboutus_hero-h3">SCROLL</h3>
      <img className="aboutus_hero_hand1 layer" src="./hand1b.png" alt="" draggable="false" />
     <img className="aboutus_hero_hand2 layer" src="./hand2b.png" alt="" draggable="false" />
    </div>
  )
}

export default Hero