import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>React shopping</h1></Link>
        <ul className='menu'>
            <li><Link className='menu-link' to="/">Home</Link></li>
            <li><Link className='menu-link' to="/productos">products</Link></li>
            <li><Link className='menu-link' to="/productos/medias">socks</Link></li>
            <li><Link className='menu-link' to="/productos/pantalones">pants</Link></li>
            <li><Link className='menu-link' to="/productos/remeras">shirts</Link></li>
            <li><Link className='menu-link' to="/productos/buzos">coats</Link></li>
            <li><Link className='menu-link' to="/AboutUs">About us</Link></li>
            <li><Link className='menu-link' to="/Contact">Contact</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar