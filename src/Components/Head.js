import React from 'react'
import { NavLink } from 'react-router-dom'

function Head() {
  return (
    <header>
    <ul className='container'>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </header>
  )
}

export default Head
