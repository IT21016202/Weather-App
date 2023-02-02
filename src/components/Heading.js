import React from 'react'
import Logo from '../images/Logo.png';

export const Heading = () => {
  return (   
        <div className='topic'>
          <img className='logo' src={Logo} alt="Logo"/>
          <h1 className='topic-text'>Weather App</h1>
        </div>  
  )
}
 export default Heading;