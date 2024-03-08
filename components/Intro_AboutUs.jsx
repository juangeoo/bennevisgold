import React from 'react'
import "./Intro_AboutUs.scss"
import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Intro_AboutUs = () => {

    const h1 = useRef(null);
    const p = useRef(null);
    const p2 = useRef(null);

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

              // p
              const timeline2 = gsap.timeline({
                scrollTrigger: {
                  trigger: p.current,
                  start: "top bottom",
                  end: "bottom+=200 bottom",
                  scrub: 2,
                }
              })
          
              timeline2.from(p.current, {
                opacity:0,
                bottom:"-100px",
                filter: "blur(5px)"
              } ).to(p.current, {
                opacity:1,
                bottom:"0px",
                filter: "blur(0px)"
              })

               // p2
               const timeline3 = gsap.timeline({
                scrollTrigger: {
                  trigger: p.current,
                  start: "top bottom",
                  end: "bottom+=300 bottom",
                  scrub: 2,
                },
              })
          
              timeline3.from(p2.current, {
                opacity:0,
                bottom:"-100px",
                filter: "blur(5px)"
              } ).to(p2.current, {
                opacity:1,
                bottom:"0px",
                filter: "blur(0px)"
              })


             
      }, [])

  return (
    <div className="intro_aboutusContainer">
        <div className="intro_aboutus">
        <h1 ref={h1} className="intro_aboutus-h1">ABOUT US</h1>
        <p ref={p} className="intro_aboutus-p">A Journey Through Tradition and Innovation. Since our inception in 1956, 
            Ben Nevis Gold has been synonymous with the spirit of Scotland's majestic 
            landscapes. Nestled among the towering peaks of Ben Nevis Mountain, our distillery 
            stands as a testament to time-honored craftsmanship and relentless dedication to perfection.</p>
        <div ref={p2} className="intro_aboutus-button">
            <p className="intro_aboutus-button-p">Learn <a className="intro_aboutus-button-p2">OUR STORY</a></p>
        </div>
    </div>
    </div>
  )
}

export default Intro_AboutUs
