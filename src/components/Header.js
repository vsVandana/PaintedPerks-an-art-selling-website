import React, { useState } from 'react';
import logo from '../utils/images/logoedit.jpg'
import { Navbar } from '../Pages/Navbar';
import {AiOutlineUser,AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  const [showNav , setShowNav] = useState(false); 
  const toggleNav = () => {
    setShowNav(!showNav); 
  }

  return (
    <div className='flex items-center justify-between text-xl w-full relative'>
        <div>
            <img src={logo} alt='logo' />
        </div>
       
        <div className='lg:hidden mx-4 text-2xl lg:cursor-pointer' onClick={toggleNav}>
          <GiHamburgerMenu  />
        </div>
        
        <div className={`lg:flex lg:justify-between absolute cursor-pointer top-full left-0 w-full lg:relative lg:w-auto ${showNav ? 'block' : 'hidden'}`}>
        <Navbar />
        </div>
        <div className='flex text-[#285380]'>
          <AiOutlineUser className='mx-5 text-2xl'/>
          < AiOutlineShoppingCart className='mx-5 text-2xl'/>
          <AiOutlineHeart className='mx-5 text-2xl'/>
        </div>
    </div>
  )
}

export default Header