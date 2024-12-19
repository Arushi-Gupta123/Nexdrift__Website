import React,{useRef} from 'react'
import "./Testimonial.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from '../../data';
import { FaStar } from 'react-icons/fa';
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


const Testimonial = () => {
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
      ".title",
      {y:-50,opacity:0}
     )

     .from(
      ".sub__title",
      {y:-50,opacity:0}
     )
     .fromTo(
      ".blog__card",
      {y:100,opacity:0},
      {opacity:1,stagger:.5,y:0}
     )

  
  },{scope:container})

  const settings = {
    infinite:true,
    speed:500,
    slidesToShow:2,
    centerMode:true,
    pauseOnHover:true,
    autoplay:true,
    autoplaaySpeed:3000,
    responsive:[
      {
        breakupoint:600,
        settings:{
          slidesToShow:1,
          centerPaddings:0,

        }
      }
    ]

  };
  return (
    <section id='testimonial' ref={container}>
      <div className="container">
        <h1 className="title">
          Clients <span className="g-text">Testimonies</span>
          </h1>

          <h3 className="sub__title">What our clients is saying</h3>
          <Slider {...settings} className='testimonial__container'>
            {
              testimonial.map((list,index)=>(
                <React.Fragment key={index}>
                  <div className="user__row">
                    <div className="profile">
                      <img src={list.image} alt={list.name} />
                      <small className="text__muted">CEO of Nexdrift</small>
                    </div>
                  </div>
                  <p className="text__muted content">{list.review}</p>
                  <div className="stars__container">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                </React.Fragment>
              ))
             }
          </Slider>
      </div>
    </section>
  )
}

export default Testimonial
