import React from 'react'
import "./TerritoryStory.scss"
import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react";

const TerritoryStory = () => {

  const h1 = useRef(null);
  const p = useRef(null);
  const p2 = useRef(null);
  const img = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const h1b = useRef(null);
  const p3 = useRef(null);

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
                trigger: ".territorystory_part1",
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
    <div className="territorystory">
        <div className="territorystory_part1">
            <h1 ref={h1} className="territorystory_part1-h1">Exploring Ben Nevis Gold's Highland Haven</h1>
            <p ref={p} className="territorystory_part1-p">Nestled amidst the rugged splendor of the Scottish Highlands, 
            Ben Nevis Gold finds its home in close proximity to the iconic Ben Nevis Mountain. Our distillery stands as a
             tribute to the untamed beauty of the surrounding landscape, drawing inspiration from the pristine waters that 
             flow down the mountain's slopes and the rich history that permeates the Highland air.</p>
        </div>
        <div className="territorystory_part1-imgcontainer">
          <img ref={img} className="territorystory_part1-imgcontainer-img" src="./map1.png" alt="" />
        </div>

        <div className="territorystory_part3">
            <h1 ref={h1b} className="territorystory_part3-h1">Highland Heritage Unveiled</h1>
            <p ref={p3} className="territorystory_part3-p">Discover the unique terroir that shapes the character of Ben Nevis Gold, 
            from the rolling hills and heather-strewn moors to the towering peak that watches over our distillery. Explore the sights
            , sounds, and flavors of our Highland haven, where tradition and innovation converge to create whiskies of unparalleled 
            quality and character.</p>
        </div>
        <div className="territorystory_part3-imgcontainer">
         <img className="territorystory_part3-imgcontainer-img" src="./map2.png" alt="" />
          <img className="territorystory_part3-imgcontainer-img" src="./map3.png" alt="" />
        </div>

        <div className="territorystory_part3">
            <h1 ref={h1b} className="territorystory_part3-h1">Crafting Excellence in the Shadow of Scotland's Tallest Peak</h1>
            <p ref={p3} className="territorystory_part3-p">Join us as we delve into the unique terroir of our Highland retreat, where each
             sip of our whisky transports you to the untamed wilderness of Scotland's most majestic landscapes.</p>
        </div>
        <div className="territorystory_part2-imgcontainer">
         <img className="territorystory_part2-imgcontainer-img" src="./photo4.png" alt="" />
        </div>

    </div>
  )
}

export default TerritoryStory