"use client"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import Loading from "../../components/Loading"
import Nav from "../../components/Nav"
import WhiskeysIntro from "../../components/WhiskeysIntro"
import Footer from "../../components/Footer"
import Whiskeys from "../../components/Whiskeys.json"
import { useParams } from "next/navigation";
import "./ProductPage.scss"


const ProductPage = () => {
    const params = useParams();
    const product = Whiskeys.find((item) => item.slug === (params.slug));
    const img = useRef(null)
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

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "+=200",
          end: "+=500px",
          scrub: true,
        }
      })
  
      timeline.to(img.current, {
        transform: "scale(0.8)",
      } )

      const timeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "+=45%",
          end: "+=800px",
          scrub: true,
        }
      })

      timeline2.to(img.current, {
        top: "-150%",
      } )
  
      
    }, [])
  
    return (
      
      <div style={product ? {backgroundColor: `${product.color}`} : ""}>
        <Loading />
        <Nav />
        <div>
          {product ? (
         <div>
          
          <div className="product">
            <div className="product_hero">
              <h1 className="product_hero-h1">{product.title}</h1>
              <div className="product_hero-button" onClick={() => {window.location.href='#info'}}><h2 className="product_hero-button-h2">View Info</h2></div>
              <img ref={img} className="product_image" src={`/${product.src}`} alt="" />
            </div>

            <div id="info" className="productInfo">
              <div className="productInfo_container">
                <h3 className="productInfo_container-h3">VARIETY</h3>
                <p className="productInfo_container-p">{product.variety}</p>
              </div>
              <div className="productInfo_container">
                <h3 className="productInfo_container-h3">TASTE</h3>
                <p className="productInfo_container-p">{product.taste}</p>
              </div>
              <div className="productInfo_container">
                <h3 className="productInfo_container-h3">COMBINATION</h3>
                <p className="productInfo_container-p">{product.combination}</p>
              </div>
              <div className="productInfo_container">
                <h3 className="productInfo_container-h3">MEASURE</h3>
                <p className="productInfo_container-p">{product.measure}</p>
              </div>
            </div>

            <div className="productInfo_end-container">
              <div className="productInfo_end">
                  <h3 className="productInfo_end-h3">WHISKEY</h3>
                  <h1 className="productInfo_end-h1">{product.title}</h1>
                  <h2 className="productInfo_end-h2">${product.price}</h2>
              </div>
            </div>

          </div>
            
          </div>
        ) : (
          <p>Product not found.</p>
        )}
        </div>
        <WhiskeysIntro />
        <Footer />
      </div>
    );
  };
  
  export default ProductPage;













// export async function generateStaticParams() {
//     return Whiskeys.map((p) => ({
//         return {
//             slug: p.slug.toString(),
//             title: p.title.toString(),
//         },
        
//     }))
// }

// export default function ProductPage({params}: {params: {slug: string, title: string}}) {
//     return (
//         <main>
//             <h1>{params.title}</h1>
//             <p>{params.slug}</p>
//         </main>
//     )
// }