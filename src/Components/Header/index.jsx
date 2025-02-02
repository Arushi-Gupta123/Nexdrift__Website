import React,{useRef} from 'react';
import './Header.css';
import { heroo } from '../../assets'; // Ensure this import is correct
import { Link } from 'react-scroll';  // Correct import for 'Link' from 'react-scroll'
import Achievement from '../Achievement'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'


const Header = () => {
  const container =useRef(null);
  useGSAP(()=>{
    const timeline = gsap.timeline({delay:1,stagger:1});
    timeline
    .fromTo(
      ".image__container",
      {scale:.5,opcity:0,y:150},
      {scale:1,ease:'sine.in',opacity:1,y:0}
    )

    .from(
      ".title",
      {opacity:0,y:-30}
    )
    .from(
      ".description",
      {opacity:0,y:-30}
    )
    .from(
      ".buttons__container",
      {opacity:0,y:40}
    )
  },{scope:container})
  return (
    <header id='header' ref={container}>
      <div className="container full__height"> 
        <div className="row">
          <div className="column">
            <h1 className="title">
              CREATIVE & INNOVATIVE, {" "}
              <span className="g-text">Digital Solution</span>
            </h1>
            <p className="text__muted description">
              At Nexdrift, we are passionate about harnessing the power of technology to drive innovation and success for our clients.
              Founded by a team of experienced professionals, we specialize in delivering cutting-edge software solutions,
              from custom application development to data analytics and digital marketing.
              At Nexdrift, we believe in the potential of every idea and work tirelessly to transform visions into reality.
            </p>
            <div className="buttons__container">
              <Link to="services" smooth={true} className="btn">Our Services</Link>
              <Link to="contact" smooth={true} className="btn btn__primary">Contact Us</Link>
            </div>
          </div>
          <div className="column">
            <div className="image__container">
              <img src={heroo} alt="Hero" />
            </div>
          </div>
        </div>
        <Achievement/>
      </div>
    </header>
  );
}

export default Header;

