import React from "react";
import { Link } from "react-router-dom";
 
const NavBar = () => {
  return (
    
      <div className="  flex justify-between items-center py-2">
        <Link to ='/' div className="flex items-center space-x-2">
          <div className="relative w-[30px] h-[30px]">
            <img src="logo.png" alt="logo" fill className="object-cover" />
          </div>
          <span className="  text-2xl font-bold none md:block">Whistle</span>
        </Link>
        <p className="text-xs md:text-sm">Created by Amine </p>
      </div>
   
  );
};

export default NavBar;
