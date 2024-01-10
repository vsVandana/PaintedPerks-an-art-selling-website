import React from "react";
import { Link } from "react-router-dom";
// #E7A0AE - pink logo color for hover
export const Navbar = () => {
   return(
   <nav className="lg:bg-white  bg-black text-white lg:text-[#285380]">
     <ul className="flex flex-col items-center overflow-hidden lg:mt-0 
    transitionResNav lg:flex-row  font-extrabold lg:font-thik font-72 py-3 lg:py-0">
        <li className="mx-6 py-3"><Link to='/'>Home</Link></li>
        <li className="mx-6 py-3"><Link to='/shop'>Shop</Link></li>
        <li className="mx-6 py-3"><Link to='/artists'>Artists</Link></li>
        <li className="mx-6 py-3"><Link to='/contact'>Contact Us</Link></li>
     </ul>
    </nav>
   )
}

