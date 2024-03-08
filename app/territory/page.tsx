"use client";
import React from 'react';
import Loading from "../components/Loading"
import Nav from "../components/Nav"
import Hero from "./components/Hero"
import TerritoryStory from "./components/TerritoryStory"
import WhiskeysIntro from "../components/WhiskeysIntro"
import Footer from "../components/Footer"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef, useState, useLayoutEffect } from 'react';


export default function Territory() {

  useLayoutEffect ( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  useLayoutEffect ( () => {
    gsap.registerPlugin(ScrollTrigger);

  }, [])

  return (
    <main>
        <Loading />
        <Nav />
        <Hero />
        <TerritoryStory />
        <WhiskeysIntro />
        <Footer />
    </main>
  )
}
