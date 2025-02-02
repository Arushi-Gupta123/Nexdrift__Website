import React, { useRef, useEffect } from 'react'; // Import useEffect as well
import "./Contact.css"
import { contacts } from '../../data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const container = useRef(null); // Use useRef to get the reference

  useEffect(() => {
    // GSAP timeline setup inside useEffect to ensure it's properly run on component mount
    const timeline = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
        toggleActions: "restart pause resume reset", // Adds scroll-based triggers
      }
    });

    timeline
      .fromTo(
        ".contact__form",
        { x: -100, opacity: 0 },
        { opacity: 1, x: 0 }
      )
      .fromTo(
        ".option",
        { y: 100, opacity: 0 },
        { opacity: 1, stagger: .5, y: 0 }
      )
    },{scope:container})
     
 

  return (
    <section id='contact' ref={container}>
      <div className="container">
        <div className="contact__form">
          <div className="contact__form__top">
      
            <h1 className="title">
              <span className="g-text">Join forces with us!</span>
            </h1>
            <p className="text__muted">
              If You Have Any Query, Feel Free To Contact Us
            </p>
          </div>
          <div className="contact__form__middle">
            <div className="row">
              <input type="text" placeholder='First name' name='firstname' className='control' />
              <input type="text" placeholder='Last name' name='lastname' className='control' />
            </div>
            <div className="row">
              <input type="email" placeholder='Email address' name='email' className='control' />
              <input type="tel" placeholder='Phone number' name='phone' className='control' />
            </div>
            <textarea name="message" cols={30} rows={10} placeholder='Message' className='control'></textarea>
          </div>
          <div className="contact__form__bottom">
            <button className="btn btn__primary">Send Now</button>
          </div>
        </div>

        <div className="contact__options">
          {contacts.map((contact, index) => (
            <div className="option" key={index}>
              <div className="icon__container">
                {contact.icon}
              </div>
              <h3 className="name">{contact.name}</h3>
              <h4 className="text__muted">{contact.value}</h4>
              <div>
                <a href={"#"} className="btn btn__primary">Contact Us</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;

