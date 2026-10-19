import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import './navbar.css'
import { useCart } from '../context/cartContext';

function Navbar() {
  const {cartCount} = useCart()

  return (
    <nav className='w-full bg-amber-950 text-white'>
      <div className='w-full flex justify-between p-8'>
        <div>
            Logo
        </div>

        <div className='flex gap-5 text-white'>
            <NavLink to='/' className='text-white'>Home</NavLink>
            <NavLink to='/about' className='text-white'>About</NavLink>
            <NavLink to='/products' className='text-white'>Products</NavLink>
            <NavLink to='/contact' className='text-white'>Contact</NavLink>
        </div>

        <div className='flex flex-row gap-5'>
            <Link to='/cart' className='relative'>
              <ShoppingCart />
              <div className=' absolute top-0 right-0 bg-amber-500 text-black w-4 h-5 rounded-full text-center font-bold'>{cartCount}</div>
            </Link>
            <button>Sign in</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
