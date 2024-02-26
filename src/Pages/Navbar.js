import React from "react";
import {  NavLink } from "react-router-dom";
// #E7A0AE - pink logo color for hover
export const Navbar = ({closeNav}) => {
   return(
   <nav className="bg-white text-[#285380]">
     <ul className="flex flex-col overflow-hidden lg:mt-0 
    transitionResNav lg:flex-row font-extrabold lg:font-thik font-72 py-3 lg:py-0">
        <li className="mx-6 py-3"><NavLink to='/' exact activeClassName="active" onClick={closeNav}><span className="nav-link">Home</span></NavLink></li>
        <li className="mx-6 py-3"><NavLink to='/shop' exact activeClassName="active" onClick={closeNav}><span className="nav-link">Shop</span></NavLink></li>
        <li className="mx-6 py-3"><NavLink to='/artists' exact activeClassName="active" onClick={closeNav}><span className="nav-link">Artists</span></NavLink></li>
        <li className="mx-6 py-3"><NavLink to='/contact' exact activeClassName="active" onClick={closeNav}><span className="nav-link">Contact Us</span></NavLink></li>
     </ul>
    </nav>
   )
}

