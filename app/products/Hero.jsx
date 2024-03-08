import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import "./Hero.scss"
import gsap from "gsap"

const Hero = () => {

//   useEffect(() => {
//     const container = document.querySelector(".aboutus_hero");
//     const layer = document.querySelectorAll(".layer");
  
//     container.onmousemove = function(e){
//       const X = e.pageX;
//       const Y = e.pageY;
      
//       layer[0].style.transform = 'rotate('+ X/100 +'deg) translateX('+  X/100 +'px) translateY('+  Y/100 +'px)';
//       layer[1].style.transform = 'rotate('+ X/100 +'deg) translateX('+  X/100 +'px) translateY('+  Y/100 +'px)';

//     }
 
// }, []);

    // Start Animation  
// useLayoutEffect( () => {

//   // hand left

//   gsap.fromTo(".hero_hand1", {
//       left:"-20%",
//       opacity:0,
//   }, {
//     left:"-3%",
//     opacity:1,
//     ease:"power2.inOut",
//     delay:1,
//     duration:2,
//   })

//   // hand right

//   gsap.fromTo(".hero_hand2", {
//   right:"-20%",
//   opacity:0,
// }, {
//   right:"-3%",
//   opacity:1,
//   ease:"power2.inOut",
//   duration:2,
//   delay:1
// })

   
// }, [])


  return (
    <div className="products_hero">
            <h1 className="products_hero-h1">SHOP</h1>
            <h3 className="products_hero-h3">SCROLL</h3>
    </div>
  )
}

export default Hero