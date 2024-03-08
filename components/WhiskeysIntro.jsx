import React from 'react'
import Whiskeys from "./Whiskeys.json"
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from "gsap"
import "./WhiskeysIntro.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"


const WhiskeysIntro = () => {

    const [modal, setModal] = useState({active: false, index: 0})
    
    const container = useRef(null);

     useLayoutEffect ( () => {
    gsap.registerPlugin(ScrollTrigger);

  }, [])

    
    useLayoutEffect( () => {

            // h1
            const timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: container.current,
                  start: "top bottom",
                  end: "bottom+=100 bottom",
                  scrub: 2,
                }
              })
          
              timeline.from(container.current, {
                bottom:"-100px",
                opacity:0,
                filter: "blur(5px)"
              } ).to(container.current, {
                bottom:"0px",
                opacity:1,
                filter: "blur(0px)"
              })            
             
      }, [])

  return (
    <div ref={container} id="whiskeys" className="introw-whiskeys">
                            <div className="introw-whiskeys-left">
                                <h1 className="introw-whiskeys-left-h1">WHISKEYS</h1>
                            </div>
                            <div className="introw-whiskeys-right">

                                {
                                    Whiskeys.map( (whiskey, index) => {
                                        return <h1 key={index} index={index} setModal={setModal} 
                                        onMouseEnter={() => {setModal({active: true, index: index})}} 
                                        onMouseLeave={() => {setModal({active: false, index: index})}} 
                                        onClick={() => {window.location.href=`/products/${whiskey.slug}/`}}
                                        className="introw-whiskeys-right-h1">
                                            {whiskey.title}
                                            </h1>
                                    })
                                }
                            </div>
                            <div className="introw-whiskeys-modalContainer">
                                <div style={{transform: `translateY(-${modal.index}00%)`}} className="introw-whiskeys-modalSlider">
                                    {
                                    Whiskeys.map( (whiskey, index) => {
                                        return  <div index={index} className="introw-whiskeys-modalSlider-imgContainer"><img src={`/${whiskey.src}`} className="nav_openMenu-whiskeys-modalSlider-imgContainer-img"></img></div>
                                    })
                                    }
                                </div>
                            
                            </div>
                        </div>
  )
}

export default WhiskeysIntro
