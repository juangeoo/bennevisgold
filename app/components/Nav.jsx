import { useLayoutEffect, useRef, useState } from 'react';
import gsap from "gsap"
import "./Nav.scss"
import Whiskeys from "./Whiskeys.json"


const Nav = () => {

const [menu, setMenu] = useState(false);
const [menuWhiskeys, setMenuWhiskeys] = useState(false);

useLayoutEffect(() => {
    if ( menuWhiskeys == true) {
        gsap.fromTo(".nav_slider", {
            transform:"translateX(0px)",
        }, {
            transform:"translateX(-100vw)",
        })
    }

    if ( menuWhiskeys == false) {
        gsap.fromTo(".nav_slider", {
            transform:"translateX(-100vw)",
        }, {
            transform:"translateX(0px)",
        })
    }
}, [menuWhiskeys]);

useLayoutEffect(() => {

    if (menu == true){

        gsap.fromTo(".nav_openMenu", {
            visibility:"hidden",
        }, {
            visibility:"visible",
        })

        gsap.fromTo(".nav_openMenu", {
            opacity:0,
        }, {
            opacity: 1,
            duration: .5,
            delay:0.1,
        })

        gsap.fromTo(".nav_header-h2", {
            color:"#9B9D6F",
        }, {
            color:"#EEEFD8",
            duration: .5,
        })

        gsap.fromTo(".nav_openMenu-items-h1", {
            top: "200px",
            opacity:0,
        }, {
            top:"0px",
            opacity:1,
            duration: .5,
            
            ease:"power1.in"
        })

        gsap.fromTo(".nav_openMenu-footer", {
            opacity:0,
        }, {
            opacity:1,
            duration: .5,
            delay:.5,
        })

        gsap.fromTo(".nav_imageRock", {
            opacity:0,
        }, {
            opacity:1,
            duration: .5,
            delay:.5,
        })

        gsap.fromTo(".nav_imagePine", {
            opacity:0,
        }, {
            opacity:1,
            duration: .5,
            delay:.5,
        })
    }


    if (menu == false) {
        setMenuWhiskeys(false);
            
        gsap.fromTo(".nav_openMenu", {
            visibility:"visible",
        }, {
            visibility:"hidden",
            delay:1,
        })

        gsap.fromTo(".nav_openMenu", {
            opacity:1,
        }, {
            opacity: 0,
            delay: .5,
            duration:.5,
        })

        gsap.fromTo(".nav_header-h2", {
            color:"#EEEFD8",
        }, {
            color:"#9B9D6F",
            duration: .5,
            delay: .5,
        })

        gsap.fromTo(".nav_openMenu-items-h1", {
            top:"0px",
            opacity:1,
        }, {
            top:"200px",
            opacity:0,
            duration: .2,
            ease:"power1.out"
        })

        gsap.fromTo(".nav_openMenu-footer", {
            opacity:1,
        }, {
            opacity:0,
            duration: .5,
        })

        gsap.fromTo("nav_imageRock", {
            opacity:1,
        }, {
            opacity:0,
            
        })

        gsap.fromTo("nav_imagePine", {
            opacity:1,
        }, {
            opacity:0,
            
        })
    }
}, [menu]);

const [modal, setModal] = useState({active: false, index: 0})

  return (
    <div className="">

{/* Nav header */}

        <div className="nav">
            <div className="nav_header">
                <h2 className="nav_header-h2" onClick={() => {window.location.href='/'}}>A tribute to nature's majesty</h2>
            </div>
            <div className="nav_menu">
                <img src="/user.svg" alt="" />
                <img src="/cart.svg" alt="" />
                {menu == false ? <img src="/hamburger.svg" alt="" className="burger-menu" id="burger-menu" onClick={() => menu == false ? setMenu(true) : ""}/> : ""}
                {menu == true ? <img className="close-menu" id="burger-menu" src="/cross.svg" alt="" onClick={() => menu == true ? setMenu(false) : ""} /> : ""}
            </div>
        </div>


{/* Open MENU */}
        <div id="openmenu" className="nav_openMenu">
                                  
        <div className="nav_slider">
            <div className="nav_openMenu-items">
                        <h1 className="nav_openMenu-items-h1" onClick={() => {window.location.href='/aboutus'}}>ABOUT US</h1>
                        <h1 className="nav_openMenu-items-h1" onClick={() => {window.location.href='/territory'}}>TERRITORY</h1>
                        <h1 className="nav_openMenu-items-h1" onClick={() => setMenuWhiskeys(true)}>WHISKEYS</h1>
                        <h1 className="nav_openMenu-items-h1" onClick={() => {window.location.href='/products'}}>SHOP</h1>

             </div>

{/* Whiskeys MENU */}
                        <div className="nav_openMenu-whiskeys">
                            <div className="nav_openMenu-whiskeys-left">
                                <h1 className="nav_openMenu-whiskeys-left-h1">WHISKEYS</h1>
                                <div className="nav_openMenu-whiskeys-left-backcontainer" onClick={() => setMenuWhiskeys(false)}>
                                    <img src="./back.svg" alt="" />
                                    <h3 className="nav_openMenu-whiskeys-left-backcontainer-h3">GO BACK</h3>
                                </div>
                            </div>
                            <div className="nav_openMenu-whiskeys-right">

                                {
                                    Whiskeys.map( (whiskey, index) => {
                                        return <h1 key={index} index={index} setModal={setModal} 
                                        onMouseEnter={() => {setModal({active: true, index: index})}} 
                                        onMouseLeave={() => {setModal({active: false, index: index})}}
                                        onClick={() => {window.location.href=`/products/${whiskey.slug}/`}} 
                                        className="nav_openMenu-whiskeys-right-h1">
                                            {whiskey.title}
                                            </h1>
                                    })
                                }
                            </div>
                            <div className="nav_openMenu-whiskeys-modalContainer">
                                <div style={{transform: `translateY(-${modal.index}00%)`}} className="nav_openMenu-whiskeys-modalSlider">
                                    {
                                    Whiskeys.map( (whiskey, index) => {
                                        return  <div index={index} className="nav_openMenu-whiskeys-modalSlider-imgContainer"><img src={`./${whiskey.src}`} className="nav_openMenu-whiskeys-modalSlider-imgContainer-img"></img></div>
                                    })
                                    }
                                </div>
                            
                            </div>
                        </div>
        </div>
                    
             
{/* Open MENU Footer */}
            <div className="nav_openMenu-footer">
                <div className="nav_openMenu-footer-address">
                    <h3 className="nav_openMenu-footer-address-h3">BEN NEVIS GOLD AGRICOLE SOCIETY SRL.</h3>
                    <p className="nav_openMenu-footer-address-p">North Road, Fort William 8SN, Scotland</p>
                    <p className="nav_openMenu-footer-address-p">T. +39 8432 43923 / E. info@bennevisgold.com</p>
                </div>
                <div className="nav_openMenu-footer-policyItems">
                <h3 className="nav_openMenu-footer-address-h3">PRIVACY POLICY</h3>
                <h3 className="nav_openMenu-footer-address-h3">COOKIE POLICY</h3>
                <h3 className="nav_openMenu-footer-address-h3">COOKIE PREFERENCES</h3>
                <h3 className="nav_openMenu-footer-address-h3">CREDITS</h3>
                </div>
            </div>
        </div>
    </div>
  
  )
}

export default Nav