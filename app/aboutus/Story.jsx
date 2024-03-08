import React from 'react'
import "./Story.scss"
import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"


const Story = () => {

  const h1 = useRef(null);
  const p = useRef(null);
  const p2 = useRef(null);
  const img = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const h1b = useRef(null);
  const p3 = useRef(null);

useLayoutEffect ( () => {
    gsap.registerPlugin(ScrollTrigger);

  }, [])

  useLayoutEffect( () => {

          // h1
          const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: h1.current,
                start: "top bottom",
                end: "bottom +=100 bottom",
                scrub: 2,
              }
            })
        
            timeline.from(h1.current, {
              opacity:0,
            } ).to(h1.current, {
              opacity:1,
              duration: 2,
            })

            // p
            const timeline2 = gsap.timeline({
              scrollTrigger: {
                trigger: p.current,
                start: "top bottom",
                end: "bottom +=100 bottom",
                scrub: 2,
              }
            })
        
            timeline2.from(p.current, {
              opacity:0,
            } ).to(p.current, {
              opacity:1,
              duration: 2,
            })

            const timeline3 = gsap.timeline({
              scrollTrigger: {
                trigger: ".story_part1",
                start: "top bottom",
                end: "bottom -150 bottom",
                scrub: 2,
                
              }
            })

            timeline3.from(img.current, {
              rotate:0,
            } ).to(img.current, {
              rotate:7,
            })


            const timeline4 = gsap.timeline({
              scrollTrigger: {
                trigger: p2.current,
                start: "top bottom",
                end: "bottom +=100 bottom",
                scrub: 2,
              }
            })
        
            timeline4.from(p2.current, {
              opacity:0,
            } ).to(p2.current, {
              opacity:1,
              duration: 2,
              
            })


            const timeline5 = gsap.timeline({
              scrollTrigger: {
                trigger: ".story_part1-imgcontainer-img",
                start: "top bottom",
                end: "bottom -150 bottom",
                scrub: 2,
                
              }
            })

            timeline5.from(img2.current, {
              rotate:0,
            } ).to(img2.current, {
              rotate:-7,
            })

            const timeline6 = gsap.timeline({
              scrollTrigger: {
                trigger: ".story_part3-h1",
                start: "top bottom",
                end: "bottom -150 bottom",
                scrub: 2,
                
              }
            })

            timeline6.from(img3.current, {
              rotate:0,
            } ).to(img3.current, {
              rotate:-7,
            })

            const timeline7 = gsap.timeline({
              scrollTrigger: {
                trigger: p2.current,
                start: "top bottom",
                end: "bottom +=100 bottom",
                scrub: 2,
              }
            })
        
            timeline7.from(p2.current, {
              opacity:0,
            } ).to(p2.current, {
              opacity:1,
              duration: 2,
              
            })

            const timeline8 = gsap.timeline({
              scrollTrigger: {
                trigger: h1b.current,
                start: "top bottom",
                end: "bottom +=100 bottom",
                scrub: 2,
              }
            })
        
            timeline8.from(h1b.current, {
              opacity:0,
            } ).to(h1b.current, {
              opacity:1,
              duration: 2,
              
            })


            const timeline9 = gsap.timeline({
              scrollTrigger: {
                trigger: p3.current,
                start: "top bottom",
                end: "bottom +=100 bottom",
                scrub: 2,
              }
            })
        
            timeline9.from(p3.current, {
              opacity:0,
            } ).to(p3.current, {
              opacity:1,
              duration: 2,
              
            })


    }, [])

  return (
    <div className="story">
        <div className="story_part1">
            <h1 ref={h1} className="story_part1-h1">A Journey Through Tradition and Innovation</h1>
            <p ref={p} className="story_part1-p">Nestled among the towering peaks of Ben Nevis Mountain, 
            our distillery stands as a testament to time-honored craftsmanship and relentless dedication to perfection.</p>
        </div>
        <div className="story_part1-imgcontainer">
          <img ref={img} className="story_part1-imgcontainer-img" src="./photo1.png" alt="" />
        </div>

        <div className="story_part2">
            <img ref={img2} className="story_part2-img" src="./photo2.png" alt="" />
            <p ref={p2} className="story_part2-p">In the heart of the Scottish Highlands, against the dramatic backdrop of Ben Nevis,
             a group of seasoned distillers and entrepreneurs came together with a shared vision: to create a whiskey that embodied
              the rugged beauty and rich heritage of their homeland. <br /> <br />

            The idea was born from a deep respect for the land and a passion for craftsmanship. Drawing inspiration from the crystal-clear 
            waters that flowed down Ben Nevis and the time-honored techniques passed down through generations, they set out to establish
             the Ben Nevis Gold Whiskey Company.</p>
        </div>

        <div className="story_part3">
            <h1 ref={h1b} className="story_part3-h1">Whiskey in the Now, A Look at Ben Nevis Gold Today</h1>
            <p ref={p3} className="story_part3-p">Today, the Ben Nevis Gold Whiskey Company stands as a testament to the spirit of innovation and tradition
             that defines Scottish whiskey-making.<br />
             
            With each bottle, they invite drinkers to embark on a journey through the rugged landscapes and rich history of Ben Nevis, 
            one sip at a time.</p>
        </div>
        <div className="story_part3-imgcontainer">
          <img ref={img3} className="story_part3-imgcontainer-img" src="./photo3.png" alt="" />
        </div>
    </div>
  )
}

export default Story
