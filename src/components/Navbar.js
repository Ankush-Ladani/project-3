import React from 'react'
import airbnblogo from '../images/airbnb 1.png'
import './index.css'
export default function Navbar() {
  return (
    <div className='navbar'>
        <img className='airbnblogo' src = {airbnblogo} ></img>
    </div>
  )
}
