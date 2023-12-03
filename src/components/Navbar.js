import React from "react";
import { MdOutlineCancel  } from 'react-icons/md';    
// #E7A0AE - pink logo color for hover
export const Navbar = () => {
   return(
   <nav >
     <ul className="flex text-[#285380] font-thik">
        <li className="mx-6"><a>Home</a></li>
        <li className="mx-6"><a>Shop</a></li>
        <li className="mx-6"><a>Artists</a></li>
        <li className="mx-6"><a>Contact Us</a></li>
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
      <li className="mx-6"><a>Home</a></li>
      <li className="mx-6"><a>Shop</a></li>
      <li className="mx-6"><a>Artists</a></li>
      <li className="mx-6"><a>Contact Us</a></li>
   </ul>
  </nav>
  </div>
      )
}
