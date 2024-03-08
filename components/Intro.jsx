import React from 'react'
import "./Intro.scss"
import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Intro = () => {

    const h1 = useRef(null);
    const h3 = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect ( () => {
    gsap.registerPlugin(ScrollTrigger);

  }, [])

    useLayoutEffect( () => {

            // h1
            const timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: h1.current,
                  start: "top bottom",
                  end: "bottom+=100 bottom",
                  scrub: 2,
                }
              })
          
              timeline.from(h1.current, {
                bottom:"-100px",
                opacity:0,
                filter: "blur(5px)"
              } ).to(h1.current, {
                bottom:"0px",
                opacity:1,
                filter: "blur(0px)"
              })

              // h3
              const timeline2 = gsap.timeline({
                scrollTrigger: {
                  trigger: h3.current,
                  start: "top bottom",
                  end: "bottom+=200 bottom",
                  scrub: 2,
                }
              })
          
              timeline2.from(h3.current, {
                opacity:0,
                bottom:"-100px",
                filter: "blur(5px)"
              } ).to(h3.current, {
                opacity:1,
                bottom:"0px",
                filter: "blur(0px)"
              })

               // introImage
               const timeline3 = gsap.timeline({
                scrollTrigger: {
                  trigger: introImage.current,
                  start: "top bottom",
                  end: "bottom-=300 bottom",
                  scrub: 2,
                }
                
              })
          
              timeline3.from(introImage.current, {
                clipPath: "inset(1% 50%)",
                transform: "scale(1.5)",
                opacity:0,
                
              } ).to(introImage.current, {
                clipPath: "inset(0% 0%)",
                transform: "scale(1)",
                opacity:1,
              })


             
      }, [])

  return (
    <div className="intro">
        <h3 ref={h3} className="intro_subtitle">A LAND WITH UNTAMED BEAUTY</h3>
        <h1 ref={h1} className="intro_title">Explore 
            <span className="intro_title-2"> SCOTLAND’S </span> 
            enduring legacy of 
            <span className="intro_title-2 intro_title-3"> CRAFTSMANSHIP</span>
        </h1>
        <div className="intro_image"><img ref={introImage} className="intro_image-img" src="./introimage.png" alt="" /></div>
    </div>
  )
}

export default Intro
