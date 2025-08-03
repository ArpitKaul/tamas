import React from 'react';
import {  chracter, extrachrac, assets } from '../assets/assets';

const Characters = () => {
  return (
    <div>
      <section className="min-h-screen w-full bg-black flex flex-col items-center text-center px-4 py-10">
        <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-wide leading-snug">
          Those Who Walk the Shadows
        </h2>
        <p className="text-white text-lg sm:text-xl mb-10">Tamas Characters</p>

        <div className="grid gap-12 sm:gap-16 md:grid-cols-2 w-full max-w-7xl px-2 sm:px-4">
          {chracter.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white bg-gray-900 p-4 sm:p-6 rounded-xl shadow-xl"
            >
              <img
                src={item.image}
                loading='lazy'
                alt={item.name}
                className="w-full sm:w-[30rem] h-[24rem] sm:h-[40rem] object-cover rounded-lg"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mt-4">{item.name}</h3>
              <p className="mt-2 text-gray-300 text-base sm:text-lg max-w-md sm:max-w-xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-gray-900  py-10 flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 max-w-7xl px-4">
          {extrachrac.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.image}
                loading='lazy'
                alt={assets.name}
                className="w-40 sm:w-48 md:w-[30rem] h-auto md:h-80 rounded-xl shadow-lg"
              />
              <span className="mt-4 bg-white text-black px-4 py-1 rounded-full font-semibold text-sm sm:text-base">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Characters;
