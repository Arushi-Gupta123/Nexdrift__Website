import React from 'react'
import "./Footer.css"
import Logo from '../Logo'
import {footer } from '../../data'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
   <footer id='footer'>
    <div className="container">
      <div className="row">
        <div className="column">
          <Logo/>
          <form className="newsletter">
            <h3>Get weekly updates</h3>
            <div className="control__container">
              <input type="email" placeholder='Enter your email address' className='control'/>
              <button className="btn" type='button'>Subscribe</button>
            </div>
          </form>
        </div>
           {
            footer.map((list,index)=>(
            <div className="column" key={index}>
              <div className="routes__name">{list.name}</div>
              <div className="routes__container">
              {
                list.routes.map((route,i)=>(
                  <Link to={route.id} className="route__item" key={index}>
                    <p className="name">{route.name}</p>
                  </Link>
                ))
              }
              </div>
              </div>

            ))
           }

      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <h3>Copyright &copy; All right reserved -| 2024</h3>
        <p className="text__muted"> @Nexdrift Designed by Arushi Gupta</p>
      </div>
    </div>
   </footer>
  )
}

export default Footer

