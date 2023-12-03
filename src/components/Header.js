import React, { useState } from 'react';
import logo from '../utils/images/logoedit.jpg'
import { Navbar, NavbarOnToggle } from './Navbar';
import {AiOutlineUser,AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  const [showNav , setShowNav] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);
  const toggleNav = () => {
    setShowNav(!showNav);
    setShowHamburger(!showHamburger);
  }

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
    setShowNav(!showNav);
  }
  return (
    <div className='flex items-center justify-between text-xl w-full'>
        <div>
            <img src={logo} alt='logo' />
        </div>
      {showHamburger && (
        <div className='lg:hidden mx-4 text-2xl cursor-pointer'>
          <GiHamburgerMenu onClick={toggleNav} />
        </div>
        )}
        <div className={`${showNav ? 'block' : 'hidden'} `} >
         <NavbarOnToggle onClick={toggleHamburger} />
        </div>
        <div className='hidden lg:flex lg:justify-between '>
        <Navbar />
        <div className='flex text-[#285380]'>
          <AiOutlineUser className='mx-5 text-2xl'/>
          < AiOutlineShoppingCart className='mx-5 text-2xl'/>
          <AiOutlineHeart className='mx-5 text-2xl'/>
        </div>
        </div>
    </div>
  )
}

export default Header