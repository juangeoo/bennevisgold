"use client"
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import Loading from "../components/Loading"
import Nav from "../components/Nav"
import ProductList from "./components/ProductList"
import Hero from "./components/Hero"
import Footer from "../components/Footer"

export default function Products() {

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
    <div style={{backgroundColor: "white"}}>
        <Loading />
        <Nav />
        <Hero />
        <ProductList />
        <Footer />
    </div>
  )
}
