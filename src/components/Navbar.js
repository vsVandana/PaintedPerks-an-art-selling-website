import React from "react";

// #E7A0AE - pink logo color for hover
const Navbar = () => {
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
export default Navbar