import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <nav className='w-full bg-amber-950 text-white'>
      <div className='w-full flex justify-between p-10'>
        <div>
            Logo
        </div>

        <div className='flex gap-5 text-white'>
            <NavLink to='/' className='text-white'>Home</NavLink>
            <NavLink to='/about' className='text-white'>About</NavLink>
            <NavLink to='/products' className='text-white'>Products</NavLink>
            <NavLink to='/contact' className='text-white'>Contact</NavLink>
        </div>

        <div>
            <button>Sign in</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
