import React from 'react'
import Images from './Images.js'
import Info from './Info.js'
import Carousel from './Carousel.js'

export default function Main() {
  return (
    <div className='Main-div'>
        <Images></Images>
        <Info></Info>
        <Carousel></Carousel>
    </div>
  )
}
