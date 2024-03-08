"use client";
import React from 'react'
import "./Loading.scss"
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap"


const Loading = () => {

    const [loading, setLoading] = useState(true);

    useLayoutEffect( () => {
    
        setTimeout(() => setLoading(false), 500);
    
        if (loading == false){
    
            gsap.fromTo(".loading", {
                opacity:1,
            }, {
                opacity: 0,
                duration: 1,
            })
        
            gsap.fromTo(".loading", {
                visibility:"visible",
            }, {
                visibility:"hidden",
                delay:1,
            })
        }
      }, [loading])

  return (
    <div className="loading">
        <h1 className="loading-h1">BEN NEVIS GOLD</h1>
    </div>
  )
}

export default Loading