import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer_container">
        <h1 className="footer_mainTitle" style={window.location.pathname == '/' ? {opacity:0,} : {opacity:1,}}>BEN NEVIS GOLD</h1>
        <div className="footer">
                <div className="footer_address">
                    <h3 className="footer_address-h3">BEN NEVIS GOLD AGRICOLE SOCIETY SRL.</h3>
                    <p className="footer_address-p">North Road, Fort William 8SN, Scotland</p>
                    <p className="footer_address-p">T. +39 8432 43923 / E. info@bennevisgold.com</p>
                </div>
                <div className="footer_policyItems">
                <h3 className="footer_address-h3">PRIVACY POLICY</h3>
                <h3 className="footer_address-h3">COOKIE POLICY</h3>
                <h3 className="footer_address-h3">COOKIE PREFERENCES</h3>
                <h3 className="footer_address-h3">CREDITS</h3>
                </div>
        </div>
        <div className="footer_menu">
            <h1 className="footer_menu-h1" onClick={() => {window.location.href='/aboutus'}}>ABOUT US</h1>
            <h1 className="footer_menu-h1" onClick={() => {window.location.href='/territory'}}>TERRITORY</h1>
            <h1 className="footer_menu-h1" onClick={() => {window.location.href='#whiskeys'}}>WHISKEYS</h1>
            <h1 className="footer_menu-h1" onClick={() => {window.location.href='/products'}}>SHOP</h1>
        </div>

    </div>
  )
}

export default Footer