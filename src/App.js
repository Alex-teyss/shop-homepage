import React, { Component, useEffect, useState } from 'react'

import logo from './assets/logo.svg';
import imageHeaderLeftDesktop from './assets/desktop-image-hero-1.jpg';
import imageHeaderMobile from './assets/mobile-image-hero-1.jpg';
import iconHamburger from './assets/icon-hamburger.svg';
import iconClose from './assets/icon-close.svg';
import iconArrow from './assets/icon-arrow.svg';
import imageSubHeaderLeft from './assets/image-about-dark.jpg';
import imageSubHeaderRight from './assets/image-about-light.jpg';
import iconArrowLeft from './assets/icon-angle-left.svg';
import iconArrowRight from './assets/icon-angle-right.svg';

import './App.scss';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = (isOpen) => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container" id="container">
      <div className={!isOpen ? "" : "overlay"}></div>
      <div className="header">
        <div className="img-header">
          <img className="img-header-top-mobile" src={imageHeaderMobile} alt="image-header" />
          {!isOpen ?
            <nav className="navbar">
              <img className="navbar-icon-menu" src={iconHamburger} alt="" onClick={() => toggleButton(isOpen)} />
              <img className="nav-items-brand-logo" src={logo} alt="logo" />
              <div className="nav-items-blank">Test</div>
            </nav>
            :
            <nav className="navbar-phone">
              <img className="navbar-icon-menu" src={iconClose} alt="" onClick={() => toggleButton(isOpen)} />
              <span className="nav-items">home</span>
              <span className="nav-items">shop</span>
              <span className="nav-items">about</span>
              <span className="nav-items">contact</span>
              <div className="nav-items-blank">Test</div>
            </nav>
          }
          <div className="slider-button-mobile">
            <img className="slider-icon-angle" src={iconArrowLeft} alt="go left" />
            <img className="slider-icon-angle" src={iconArrowRight} alt="go right" />
          </div>
        </div>
        <div className="header-text">
          <h1 className="title-header">Discover innovative way to decorate</h1>
          <p className="text-header">We provide unmatched quality, conmfort, and style for property owners accros the country. Our listening combine form and function in brinding your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
          <button className="button-shop">SHOP NOW <img className="icon-arrow" src={iconArrow} alt="icon-arrow-button" /></button>
        </div>
      </div>
      <div className="sub-header">
        <div>
          <img className="sub-header-image" src={imageSubHeaderLeft} alt="image-about" />
        </div>
        <div className="sub-header-item">
          <h4 className="title-sub-header">ABOUT OUR FURNITURE</h4>
          <p className="sub-header-furniture-description">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <div>
          <img className="sub-header-image" src={imageSubHeaderRight} alt="image-about" />
        </div>
      </div>
    </div>
  );
}

export default App;
