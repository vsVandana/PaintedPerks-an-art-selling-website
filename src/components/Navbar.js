import React from "react";
import { MdOutlineCancel  } from 'react-icons/md'; 
import Home from "./Home";
import Shop from "./Shop"
import Artists from "./Artists"
import Contact_us from "./Contact_us"
// #E7A0AE - pink logo color for hover
export const Navbar = () => {
   return(
   <nav >
     <ul className="flex text-[#285380] font-thik">
        <li className="mx-6"><a href={Home}>Home</a></li>
        <li className="mx-6"><a href={Shop}>Shop</a></li>
        <li className="mx-6"><a href={Artists}>Artists</a></li>
        <li className="mx-6"><a href={Contact_us}>Contact Us</a></li>
     </ul>
    </nav>
   )
}

export const NavbarOnToggle = () => {
   return(
      <div>
        <MdOutlineCancel />
      <nav >
   <ul className="text-black">
      <li className="mx-6"><a href={Home}>Home</a></li>
      <li className="mx-6"><a href={Shop}>Shop</a></li>
      <li className="mx-6"><a href={Artists}>Artists</a></li>
      <li className="mx-6"><a href={Contact_us}>Contact Us</a></li>
   </ul>
  </nav>
  </div>
      )
}
