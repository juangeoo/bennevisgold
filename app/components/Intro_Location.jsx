import React from 'react'
import "./Intro_Location.scss"
import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react";

const Intro_Location = () => {

    const h1 = useRef(null);
    const p = useRef(null);
    const p2 = useRef(null);

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
    <div className="intro_locationContainer">
        <div className="intro_location">
        <h1 ref={h1} className="intro_location-h1">TERRITORY</h1>
        <p ref={p} className="intro_location-p">Much like the whiskey it inspires, Ben Nevis embodies the essence of 
        Scotland's rugged beauty, drawing from the pure waters that cascade down its slopes and the storied heritage
         that whispers through its rocky crags. In every sip of Ben Nevis whiskey, one can taste the essence of this
          iconic mountain, a tribute to nature's grandeur and Scotland's enduring spirit.</p>
        <div ref={p2} className="intro_location-button">
            <p className="intro_location-button-p">Learn <a className="intro_location-button-p2">OUR TERRITORY</a></p>
        </div>
    </div>
    </div>
  )
}

export default Intro_Location