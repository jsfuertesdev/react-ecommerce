import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <a href="#" className='logo'><h1>React shopping</h1></a>
        <ul className='menu'>
            <li><a className='menu-link' href="#">Home</a></li>
            <li><a className='menu-link' href="#">About us</a></li>
            <li><a className='menu-link' href="#">Products</a></li>
            <li><a className='menu-link' href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar