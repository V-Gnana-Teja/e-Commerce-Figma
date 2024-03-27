import React from "react";
import { FiMapPin } from "react-icons/fi";
import { PiTruckDuotone } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

  return (
    <div>
    
        <div className="bg-gray-200 text-gray-500 flex flex-row items-center justify-between p-3 ">
          <h1 className=" pl-16">Welcome to worldwide Megamart!</h1>

          <ul className="flex flex-row items-center justify-between pr-16 ">
            <li className="flex items-center pr-2 cursor-pointer">
             
              <FiMapPin className="text-blue-400" /> Deliver to 423651 |
            </li>
            <li className="flex items-center pr-2 cursor-pointer">
             
              <PiTruckDuotone className="text-blue-400" /> Track your order |
            </li>
            <li className="flex items-center cursor-pointer">
             
              <BiSolidOffer className="text-blue-400" /> All Offers
            </li>
          </ul>
        </div>

        <div className="p-4 flex items-center">
           <div>
           <div className="pl-16">
            <RxHamburgerMenu className="w-6 h-6 bg-blue-200 text-blue-500 rounded-sm " style={{ backgroundSize: '100%' }} />
            </div>
           </div>

           <div>
            <h1 className="pl-8 text-blue-400 text-bold text-3xl">Megamart</h1>
           </div>
        </div>
    </div>
  );
};

export default Navbar;
