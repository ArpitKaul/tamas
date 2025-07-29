import React from 'react';
import { hiddenLetter, assets } from '../../assets/assets';
import './Newspaper.css';

const Hidden = () => {
  return (
    <div className="relative min-h-screen w-full text-white bg-cover bg-center mt-20 px-6">
      {/* Candle row */}
      <div className="flex items-center justify-between w-full pt-6">
        {/* Left Candle */}
        <div className="relative w-16">
          <img
            src={assets.candle}
            alt="Left Candle"
            className="h-32"
          />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-300 opacity-100 animate-flicker blur-sm" />
        </div>

        {/* Headline */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-red-100 drop-shadow-lg">Candle</h1>
          <p className="text-sm md:text-base text-red-300 mt-1">
            Faint glimmers guide the forgotten.
          </p>
        </div>

        {/* Right Candle */}
        <div className="relative w-16">
          <img
            src={assets.candle}
            alt="Right Candle"
            className="h-32"
          />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-6 rounded-full bg-yellow-300 opacity-70 animate-flicker blur-sm" />
        </div>
      </div>

      {/* Secret Letter */}
      <div className="mt-10 max-w-3xl mx-auto p-6">
        <pre className="whitespace-pre-wrap text-white text-sm md:text-base leading-relaxed font-mono">
          {hiddenLetter}
        </pre>
      </div>
    </div>
  );
};

export default Hidden;
