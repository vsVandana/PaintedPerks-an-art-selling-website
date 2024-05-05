import React, { useState } from 'react';
import logo from '../utils/images/logoedit.jpg'
import { Navbar } from '../Pages/Navbar';
import {AiOutlineUser,AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const {items} = useSelector((store)=>store.cart)
  const [showNav , setShowNav] = useState(false); 
  const toggleNav = () => {
    setShowNav(!showNav); 
  }

  const closeNav = () => {
    setShowNav(false);
  }
  return (
    <div className='flex items-center justify-between text-xl w-full shadow-sm sticky top-0 bg-white z-10'>
        <div className='lg:hidden mx-5 text-2xl lg:cursor-pointer' onClick={toggleNav}>
          <GiHamburgerMenu  />
        </div>
        <div>
          <Link to='/'  onClick={closeNav}>
          <img src={logo} alt='logo' /></Link>
        </div>
       
        
        <div className={`lg:flex lg:justify-between absolute cursor-pointer top-full left-0 w-full lg:relative lg:w-auto ${showNav ? 'block' : 'hidden'} `}>
        <Navbar closeNav={closeNav}/>
        </div>
        <div className='flex text-[#285380]'>
        {/* <AiOutlineHeart className=' hidden lg:block mx-5 text-2xl cursor-pointer'/> */}

          <Link to='/cart' className='relative flex mx-5'>< AiOutlineShoppingCart className=' text-2xl cursor-pointer hover:text-[#fcdee5]'/>
          {items.length > 0 && (
      <span className='absolute top-0 right-0 -mt-3 -mr-3 rounded-full px-2 py-0.5 bg-red-600 text-white text-xs'>
        {items.length}
      </span>
    )}
          </Link>
          <AiOutlineUser className='hidden lg:block mx-5 text-2xl cursor-pointer'/>
        </div>
    </div>
  )
}

export default Header