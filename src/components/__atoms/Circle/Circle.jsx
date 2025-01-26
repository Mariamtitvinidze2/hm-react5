import React from 'react'
import '../Circle/CIrcle.css'
const CIrcle = (props) => {
  return (
     <button className='Circle'>{props.circle}</button> 
  )
}

export default CIrcle