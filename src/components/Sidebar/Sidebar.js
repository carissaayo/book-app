import React from 'react';
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1 className='sidebar__logo'>Dev<span>Hire</span></h1>
      <nav className='sidebar__nav'>
      <a href="/">Home</a>
      <a  href="/favorite" >Favorite</a>
      </nav>
    </div>
  )
}

export default Sidebar