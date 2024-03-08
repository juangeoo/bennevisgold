"use client";
import React from 'react';
import Loading from "../../components/Loading"
import Nav from "../../components/Nav"
import Hero from "./Hero"
import TerritoryStory from "./TerritoryStory"
import WhiskeysIntro from "../../components/WhiskeysIntro"
import Footer from "../../components/Footer"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import {IsClientCtxProvider} from "../is-client-ctx"


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
    <IsClientCtxProvider>
      <main>
        <Loading />
        <Nav />
        <Hero />
        <TerritoryStory />
        <WhiskeysIntro />
        <Footer />
      </main>
    </IsClientCtxProvider>
    
  )
}
