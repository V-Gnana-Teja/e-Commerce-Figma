import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { PiTruckDuotone } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className="bg-gray-200 text-gray-500 flex flex-row items-center justify-between p-3 ">
        <h1 className="pl-16">Welcome to worldwide Megamart!</h1>

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

      <div className="p-2 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="pl-16">
            <RxHamburgerMenu className="w-6 h-6 bg-blue-200 text-blue-500 rounded-sm" style={{ backgroundSize: '100%' }} />
          </div>
          <h1 className="pl-4 text-blue-400 font-bold text-3xl">Megamart</h1>
        </div>

        <div className="relative ml-2 mr-0 flex">
          <input type="text" className="w-[380px] bg-blue-200 pl-2 text-gray-500 outline-0"           placeholder=" Search essentials, groceries and more..." id="" />
          <div className="bg-blue-200 text-white py-2  px-4 rounded hover:bg-blue-600 cursor-pointer" onClick={toggleDropdown}>
          <RxHamburgerMenu className="w-6 h-6 bg-blue-200 text-blue-500 rounded-sm" style={{ backgroundSize: '100%' }} />
          </div>
          {showDropdown && (
            <ul className="absolute top-10 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
            </ul>
          )}
        </div>

        <div>
          <ul className="flex flex-row items-center justify-between pr-16 ">
            <li className="flex items-center pr-2 cursor-pointer">
              <GoPerson className="text-blue-400 w-5 h-5 " /> Deliver to 423651 <span className="pl-2">|</span>
            </li>
            <li className="flex items-center pr-2 cursor-pointer">
              <CiShoppingCart  className="text-blue-400 w-5 h-5" /> Track your order 
            </li>
          </ul>
        </div>
      </div>
                <hr />

                <div className="flex justify-between items center p-4 pr-12 pl-12">
                  <button className=" font-semibold flex items-center justify-between bg-blue-100 p-2 rounded-full hover:bg-blue-400">Groceries <FaChevronDown className="mr-1"/>
</button>
                  <button className="bg-blue-100 flex items-center justify-between font-semibold p-2 rounded-full hover:bg-blue-400">Premium Fruits <FaChevronDown className="mr-1"/> </button>
                  <button className="bg-blue-100 flex items-center justify-between font-semibold p-2 rounded-full hover:bg-blue-400">Home and kitchen <FaChevronDown className="mr-1"/> </button>
                  <button className="bg-blue-100 flex items-center justify-between font-semibold p-2 rounded-full hover:bg-blue-400">Fashion  <FaChevronDown className="mr-1"/></button>
                  <button className="bg-blue-100 flex items-center justify-between font-semibold p-2 rounded-full hover:bg-blue-400">Electronics <FaChevronDown className="mr-1"/> </button>
                  <button className="bg-blue-100 flex items-center justify-between font-semibold p-2 rounded-full hover:bg-blue-400">Beauty <FaChevronDown className="mr-1"/> </button>
                  <button className="bg-blue-100 flex items-center justify-between font-semibold p-2 rounded-full hover:bg-blue-400">Home Improvements <FaChevronDown className="mr-1"/> </button>
                  <button className=" bg-blue-100 flex items-center justify-between  font-semibold p-2 rounded-full hover:bg-blue-400">Sports,Toys & Luggage <FaChevronDown className="mr-1"/></button>
                </div>
                  
                <hr />
    </div>
  );
};

export default Navbar;
