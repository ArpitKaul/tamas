import React from 'react';
import { assets } from '../assets/assets';

const Home = () => {
  return (
    <div className="relative w-full h-[36rem] overflow-hidden md:mt-7">
      <img
        src={assets.Home}
        alt="Tamas Home"
        className="w-full h-full object-cove"
        loading='lazy'
      />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0f1a12] z-10" />

      <button
        className="absolute top-125 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   bg-transparent border-2 border-red-700 text-white text-lg px-6 py-3 
                   font-bold rounded-md hover:bg-red-700 hover:text-black shadow-lg 
                   transition-all duration-300 tracking-widest z-20"
      >
        WATCH TRAILER
      </button>
    </div>
  );
};

export default Home;
