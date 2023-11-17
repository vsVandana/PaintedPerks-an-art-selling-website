import React from 'react';
import logo from '../utils/images/logoedit.jpg'
import Navbar from './Navbar';
import {AiOutlineUser,AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  return (
    <div className='flex items-center justify-between text-xl w-full'>
        <div>
            <img src={logo} alt='logo' />
        </div>
        <div className='lg:hidden mx-4 text-2xl cursor-pointer'>
          <GiHamburgerMenu />
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