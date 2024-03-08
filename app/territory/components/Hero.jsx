import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import "./Hero.scss"
import gsap from "gsap"

const Hero = () => {

// Start Animation
useLayoutEffect( () => {

  // hand left

  gsap.fromTo(".hero_hand1", {
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

  gsap.fromTo(".hero_hand2", {
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
    <div className="territory_hero">
            <h1 className="territory_hero-h1">TERRITORY</h1>
            <h3 className="territory_hero-h3">SCROLL</h3>
        <img className="territory_hero-rock" src="rock.png" alt="" />
        <img className="territory_hero-pine" src="pine.png" alt="" />
        <img className="territory_hero-pineleave" src="pineleave.png" alt="" />
        <img className="territory_hero-leave" src="leave.png" alt="" />
        <img className="territory_hero-wood" src="wood.png" alt="" />
    </div>
  )
}

export default Hero