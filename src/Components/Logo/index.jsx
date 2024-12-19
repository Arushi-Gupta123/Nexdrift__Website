import React from 'react'
import "./Logo.css"
import {logo} from '../../assets'

const Logo = () => {
  return (
    <div className='logo'>
     <img src={logo} alt="Nexdrift Logo"/>
     
    </div>
  )
}

export default Logo

