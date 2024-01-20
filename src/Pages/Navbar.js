import React from "react";
import { Link } from "react-router-dom";
// #E7A0AE - pink logo color for hover
export const Navbar = ({closeNav}) => {
   return(
   <nav className="bg-white text-[#285380]">
     <ul className="flex flex-col  overflow-hidden lg:mt-0 
    transitionResNav lg:flex-row  font-extrabold lg:font-thik font-72 py-3 lg:py-0">
        <li className="mx-6 py-3"><Link to='/' onClick={closeNav}>Home</Link></li>
        <li className="mx-6 py-3"><Link to='/shop' onClick={closeNav}>Shop</Link></li>
        <li className="mx-6 py-3"><Link to='/artists' onClick={closeNav}>Artists</Link></li>
        <li className="mx-6 py-3"><Link to='/contact' onClick={closeNav}>Contact Us</Link></li>
     </ul>
    </nav>
   )
}

