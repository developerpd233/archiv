import './circlesize.css'
import React from 'react'

function CircleSize(props) {
  const {text}=props;
    return (
    <div className='circle-size'><p className='para'>{text}</p></div>
  )
}

export default CircleSize