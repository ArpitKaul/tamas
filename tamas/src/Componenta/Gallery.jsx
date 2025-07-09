import React from 'react';
import './style.css';
import { assets, galleryImages } from '../assets/assets';

const Gallery = () => {
  const positions = [
    { top: '10%', left: '44%' },
    { top: '25%', left: '17%' },
    { top: '30%', right: '17%' },
    { bottom: '28%', left: '18%' },
    { bottom: '26%', right: '17%' },
    { bottom: '11%', left: '44%' },
  ];

  return (
    <section
      className="w-full min-h-screen text-white px-4 py-12 md:py-8 flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${assets.wall})` }}
    >
      {/* Large dolls at the sides – only on laptop and above */}
      <img
        src={assets.doll}
        alt="Left Doll"
        className="hidden md:block absolute top-0 left-0 h-[40%] z-10"
      />
      <img
        src={assets.doll}
        alt="Right Doll"
        className="hidden md:block absolute top-0 right-0 h-[40%] z-10"
      />

      {/* Heading and description */}
      <h2 className="text-center text-4xl font-bold mb-4 md:mb-2 z-20">
        Gallery of the Forgotten
      </h2>
      <p className="text-center text-sm text-gray-400 mb-8 md:mb-4 z-20">
        Do not tap or click on any unusual substances. Just observe.
      </p>

      {/* Summoning Circle with Ritual Items */}
      <div className="relative w-[400px] sm:w-[500px] md:w-[600px] aspect-square z-20">
        <img
          src={assets.circle}
          alt="Summoning Circle"
          className="w-full h-full object-contain z-20"
        />

        {/* Ritual Substance Items */}
        {galleryImages.slice(0, 6).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Substance ${index + 1}`}
            className="absolute w-[50px] sm:w-[60px] md:w-[70px] hover:scale-110 transition-transform duration-300 cursor-pointer z-30"
            style={{ ...positions[index] }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
