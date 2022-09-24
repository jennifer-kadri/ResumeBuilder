import React from 'react'
import Resume from '../assets/cv.svg'

const Header = () => {
  return (
    <div className="header container">
      <div className="left">
         <p className="heading">
            A 
            <span> Resume </span> that stands out!
         </p> 
         <p className="heading">
            Make your own resume. 
            <span> It's free ! </span>
         </p> 
      </div>
      <div className="right">
         <img src={Resume} alt="Resume" />
      </div>
    </div>
  )  
}

export default Header