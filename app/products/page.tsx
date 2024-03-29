"use client"
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import Loading from "../../components/Loading"
import Nav from "../../components/Nav"
import ProductList from "./ProductList"
import Hero from "./Hero"
import Footer from "../../components/Footer"
import {IsClientCtxProvider} from "../is-client-ctx"

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
      <IsClientCtxProvider>
        <div style={{backgroundColor: "white"}}>
        <Loading />
        <Nav />
        <Hero />
        <ProductList />
        <Footer />
      </div>
      </IsClientCtxProvider>
    
  )
}
