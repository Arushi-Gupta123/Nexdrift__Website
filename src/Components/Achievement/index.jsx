import React,{useState,useEffect,useRef} from 'react'
import "./Achievement.css"
import { FaDiagramProject, FaUsersLine } from 'react-icons/fa6'
import Odometer from 'react-odometerjs'
import { GiTeamIdea } from 'react-icons/gi'
import { FaAward } from 'react-icons/fa'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const Achievement = () => {
    const [clients,setClients] = useState(0);

    const [projects,setProjects] = useState(0);
    const [teams,setTeams] = useState(0);
    const [awards,setAwards] =useState(0);
    const container =useRef(null);
    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setClients(4);
            setProjects(3);
            setTeams(6);
            setAwards(2);
        },3000);

        return ()=> clearTimeout(timeOutId);
    },[])

    useGSAP(()=>{
    const timeline=gsap.timeline();
    timeline
    .from(
        ".achievement",
        {
            delay:1.5,
            x:100,
            stagger:.5,
            opacity:0,
        }
    )
     }, {scope:container})

  return (
    <div className='achievement__container' ref={container}>

        {/* Start Achievement */}
        <div className="achievement">
            <div className="icon__container">
                <FaUsersLine/>
            </div>
            <div className="details">
                <div className="count__row">
                    <Odometer value={clients} className="title"/>
                    <h1 className="g-text title">+</h1>
                </div>
                <small className="text__muted">Happy Clients</small>
            </div>
        </div>

          {/* End Achievement */}

           {/* Start Achievement */}
        <div className="achievement">
            <div className="icon__container">
                <FaDiagramProject/>
            </div>
            <div className="details">
                <div className="count__row">
                    <Odometer value={projects} className="title"/>
                    <h1 className="g-text title">+</h1>
                </div>
                <small className="text__muted">Completed Projects</small>
            </div>
        </div>
          {/* End Achievement */}

                     {/* Start Achievement */}
        <div className="achievement">
            <div className="icon__container">
                <GiTeamIdea/>
            </div>
            <div className="details">
                <div className="count__row">
                    <Odometer value={teams} className="title"/>
                    <h1 className="g-text title">+</h1>
                </div>
                <small className="text__muted">Experts Workers</small>
            </div>
        </div>
          {/* End Achievement */}

           {/* Start Achievement */}
        <div className="achievement">
            <div className="icon__container">
                <FaAward/>
            </div>
            <div className="details">
                <div className="count__row">
                    <Odometer value={awards} className="title"/>
                    <h1 className="g-text title">+</h1>
                </div>
                <small className="text__muted">Awards Winning</small>
            </div>
        </div>
          {/* End Achievement */}



    </div>
  )
}

export default Achievement
