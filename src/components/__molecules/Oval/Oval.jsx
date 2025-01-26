import React from 'react'
import '../Oval/Oval.css'
import OvalImage from '../../../assets/img/Oval.png'
import Starimg from '../../../assets/icon/Star.png'

const Oval = () => {
  return (
    <div className='Oval'>
       <img className='Oval' src={OvalImage} alt="oavl" />
       <img className='Star' src={Starimg} alt="Star" />
    </div>
  )
}

export default Oval