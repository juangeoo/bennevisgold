"use client";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import './globals.css';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Intro_AboutUs from "./components/Intro_AboutUs"
import LocationSection from "./components/LocationSection"
import Intro_Location from "./components/Intro_Location"
import WhiskeysIntro from "./components/WhiskeysIntro"
import Footer from "./components/Footer"
import Loading from "./components/Loading"


export default function Home() {

  const title = useRef(null);

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "+=200",
        end: "+=500px",
        scrub: true,
      }
    })

    timeline.to(title.current, {
      bottom: "-15%",
    } )

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer_mainTitle",
        start: "start +=86.5%",
        end: "end +=100%",
        scrub: true,
      }
    })

    timeline2.to(title.current, {
      opacity:0,
      bottom: "0%",
      display:"none"
    } )

    timeline2.to(".footer_mainTitle", {
      opacity:1,
    } )

  }, [])

  useLayoutEffect ( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  
  return (
    <main>
      <h1 ref={title} className="mainTitle">BEN NEVIS GOLD</h1>

        <Loading/>
        <Nav />
        <Hero />
        <Intro />
        <Intro_AboutUs />
        <LocationSection />
        <Intro_Location />
        <WhiskeysIntro />
        <Footer />

    </main>
  );
}
