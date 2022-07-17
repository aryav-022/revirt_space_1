import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={require('../img/logo-dark.png')} alt="logo" className="logo" />
        <div className="title">revirt.space</div>
        <ul className='nav-components'>
            <li className='nav-component new-tag'><Link to="/">revirt.club</Link></li>
            {/* <li className='nav-component'>
                solutions <span className='dropdown-arrowhead'>&#9660;</span>
                <div className="dropdown-items">
                  <Link to="./">Jo Bhi</Link>
                  <Link to="./">Jo Bhi</Link>
                  <Link to="./">Jo Bhi</Link>
                </div>
            </li> */}
            <li className='nav-component'><Link to="/">solutions <span className='dropdown-arrowhead'>&#9660;</span></Link></li>
            <li className='nav-component'><Link to="/">pricing</Link></li>
            <li className='nav-component'><Link to="/">careers</Link></li>
            <li className='nav-component'><Link to="/">log in</Link></li>
            <li className='nav-component dark'><Link to="/">sign up</Link></li>
        </ul>
    </div>
  )
}
