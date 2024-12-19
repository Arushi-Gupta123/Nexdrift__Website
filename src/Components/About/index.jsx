import React ,{useRef} from 'react'
import "./About.css"
import {about_img} from '../../assets'
import { FaCheck } from 'react-icons/fa'
import { img1, imggg2, imggg3 } from '../../assets'
import { Link } from 'react-scroll'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const container = useRef(null)
  useGSAP(()=>{
    const timeline = gsap.timeline({
      delay:.5,
      scrollTrigger:{
        trigger:container.current,
        start:"20% bottom",
        end:"bottom top",
      }
    })

    timeline
    .from(
      ".company__photo",
      {x:-50,opacity:0}
    )
     .from(
      ".title",
      {y:-50,opacity:0}
     )

     .from(
      ".sub__title",
      {y:-50,opacity:0}
     )
     .from(
      ".box",
      {x:50,opacity:0,stagger:.5}
     )

    .from(
      ".description",
      {y:50,opacity:0}
    )
    .from(
      ".group",
      {y:50,opacity:0}
    )

    .from(
      ".buttons__container",
      {y:50,opacity:0}
    )
  },{scope:container})

  return (
    <section id='about' ref={container}>
      <div className="container">
        <div className="column company__photo">
          <img src={about_img} alt="Nexdrift" />
        
      </div>
      <div className="column">
        <h1 className="title">
          <span className="g-text">About Us</span>
        </h1>
        <h3 className="sub__title">The Best IT Solution With 3 Years of Experience.</h3>
        <div className="company__media__container">
          <div className="box">
            <img src={img1} alt="" />
          </div>
          <div className="box">
            <img src={imggg2} alt="" />
          </div>
          <div className="box">
            <img src={imggg3} alt="" />
          </div>

        </div>

      <p className="text__muted description">
        With a decade of expertise in software development, we specialize in delivering tailored IT solutions that drive innovation and efficiency.
        Our team combines technical excellence with a deep understanding of client needs, ensuring high-quality, scalable applications that empower businesses to thrive in a digital landscape.
        From custom software to robust integrations, we are committed to excellence and customer satisfaction.</p>

        <div className="group">
          <div className="row">
            <div className="icon__container">
              <FaCheck/>
            </div>
            <div className="details">
              <p className="text__muted">Consultation</p>
              <h3>Free</h3>
            </div>
          </div>

          <div className="row">
            <div className="icon__container">
              <FaCheck/>
            </div>
            <div className="details">
              <p className="text__muted">Professional</p>
              <h3>Staff</h3>
            </div>
          </div>

          <div className="row">
            <div className="icon__container">
              <FaCheck/>
            </div>
            <div className="details">
              <p className="text__muted">Customer</p>
              <h3>Support</h3>
            </div>
          </div>

          <div className="row">
            <div className="icon__container">
              <FaCheck/>
            </div>
            <div className="details">
              <p className="text__muted">24/7</p>
              <h3>Services</h3>
            </div>
          </div>

        </div>

        <div className="buttons__container">
          <Link to="project" smooth={true} className="btn">Explore</Link>
          <Link to="contact" smooth={true} className="btn btn__primary">Get a quote</Link>
        </div>


      </div>
   
    
      
    </div>
    </section>
  )
}

export default About
