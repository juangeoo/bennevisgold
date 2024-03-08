"use client";
import React from 'react';
import Loading from "../components/Loading"
import Footer from "../components/Footer"
import WhiskeysIntro from "../components/WhiskeysIntro"
import Nav from "../components/Nav"
import Hero from "./components/Hero"
import Story from "./components/Story"
import "../components/Footer.scss"
import "../components/WhiskeysIntro.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

import { useEffect, useRef, useState, useLayoutEffect } from 'react';

export default function AboutUs() {

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
        <Story />
        <WhiskeysIntro />
        <Footer />
    </main>
  )
}
