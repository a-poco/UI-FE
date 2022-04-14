import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header className='navbar'>
        <div className='navbar__logo-title'>
        <img src={'https://cdn.iconscout.com/icon/free/png-256/ubiquiti-2752044-2284861.png'} className="navbar__logo" alt="" />
            <p className='navbar__title'>Devices</p>
        </div>
        <p className='navbar__author' >Author/Cristina Salazar</p>
    </header>
  )
}

export default Navbar
// https://cdn.iconscout.com/icon/free/png-256/ubiquiti-2752044-2284861.png