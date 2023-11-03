import React from 'react';
import logo from '../utils/images/logoedit.jpg'
import Navbar from './Navbar';
import {AiOutlineUser,AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';

const Header = () => {
  return (
    <div className='flex items-center justify-between text-xl'>
        <div>
            <img src={logo} />
        </div>
        <Navbar />
        <div className='flex text-[#285380]'>
          <AiOutlineUser className='mx-5 text-2xl'/>
          < AiOutlineShoppingCart className='mx-5 text-2xl'/>
          <AiOutlineHeart className='mx-5 text-2xl'/>
        </div>
    </div>
  )
}

export default Header