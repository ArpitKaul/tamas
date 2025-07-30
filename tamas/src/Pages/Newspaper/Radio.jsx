import React from 'react';
import { assets } from '../../assets/assets';

const Radio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white mt-20 px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide text-red-100 drop-shadow-lg">
        The Radio
      </h1>

      <img
        src={assets.radio}
        alt="Spooky Vintage Radio"
        className="w-64 md:w-80 lg:w-96 object-contain"
      />

    </div>
  );
};

export default Radio;
