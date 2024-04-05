import React from 'react';
import Img1 from '../assets/images/image 3 (5).png';
import Img2 from '../assets/images/image 3 (6).png';
import Img3 from '../assets/images/image 3 (7).png';
import Img4 from '../assets/images/image 3 (8).png';
import Img5 from '../assets/images/image 3 (9).png';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl text-start font-bold underline mb-8 relative">
        Grab the best deal on <span className="text-blue-400 cursor-pointer">Smartphones</span>
        <hr className="blue-underline" />
      </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img className="w-full h-auto object-cover bg-gray-300" src={Img1} alt="Smartphone 1" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Galaxy S22 Ultra</h2>
              <h2 className="text-lg font-bold mb-2">₹32999 ₹74999</h2>
              <p className="text-green-500 font-bold mt-2">Save - ₹32999</p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img className="w-full h-auto object-cover" src={Img2} alt="Smartphone 2" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Galaxy M13 (4GB | 64 GB )</h2>
              <h2 className="text-lg font-bold mb-2">₹10499 ₹14999</h2>
              <p className="text-green-500 font-bold mt-2">Save - ₹4500</p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img className="w-full h-auto object-cover" src={Img3} alt="Smartphone 3" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Galaxy M33 (4GB | 64 GB )</h2>
              <h2 className="text-lg font-bold mb-2">₹16999 ₹24999</h2>
              <p className="text-green-500 font-bold mt-2">Save - ₹8000</p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img className="w-full h-auto object-cover" src={Img4} alt="Smartphone 4" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Galaxy M53 (4GB | 64 GB )</h2>
              <h2 className="text-lg font-bold mb-2">₹31999 ₹40999</h2>
              <hr />
              <p className="text-green-500 font-bold mt-2">Save - ₹9000</p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img className="w-full h-auto object-cover" src={Img5} alt="Smartphone 5" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Galaxy S22 Ultra</h2>
              <h2 className="text-lg font-bold mb-2">₹67999 ₹85999</h2>
              <p className="text-gray-700">Save - ₹18000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
