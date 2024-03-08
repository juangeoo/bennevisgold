import React from 'react'
import "./LocationSection.scss"
import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"


const LocationSection = () => {

    const h1 = useRef(null);
    const h3 = useRef(null);
    const locationImage = useRef(null);

    
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
                  trigger: locationImage.current,
                  start: "top bottom",
                  end: "bottom-=300 bottom",
                  scrub: 2,
                }
                
              })
          
              timeline3.from(locationImage.current, {
                clipPath: "inset(1% 50%)",
                transform: "scale(1.5)",
                opacity:0,
                
              } ).to(locationImage.current, {
                clipPath: "inset(0% 0%)",
                transform: "scale(1)",
                opacity:1,
              })


             
      }, [])

  return (
    <div className="locationSection">
        <h3 ref={h3} className="locationSection_subtitle">ESSENCE OF THE HILLS</h3>
        <h1 ref={h1} className="locationSection_title">
            <span className="locationSection_title-2"> BEN NEVIS </span> commands the Highland
            <span className="locationSection_title-2 locationSection_title-3"> LANDSCAPE</span> with unparalleled majesty
        </h1>
        <div className="locationSection_image"><img ref={locationImage} className="locationSection_image-img" src="./locationimage.jpg" alt="" /></div>
    </div>
  )
}

export default LocationSection
