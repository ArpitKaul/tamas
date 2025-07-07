import React, { useState, useEffect } from 'react';
import { galleryImages } from '../assets/assets';
import './style.css';

const Gallery = () => {
  const [isFlickering, setIsFlickering] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleImageClick = () => {
    if (isFlickering || hasTriggered) return;

    setIsFlickering(true);
    setHasTriggered(true);
    document.body.classList.add('no-scroll');

    setTimeout(() => {
      setIsFlickering(false);
      document.body.classList.remove('no-scroll');
    }, 10000);
  };

  return (
    <section
      className={`w-full min-h-screen bg-black text-white px-4 py-16 gallery-section relative ${
        isFlickering ? 'flicker' : ''
      } ${hasTriggered ? 'dimmed' : ''}`}
    >
      <h2 className="text-center text-4xl font-bold mb-6">Gallery of the Forgotten</h2>
      <p className="text-center text-sm text-gray-400 mb-12">
        Do not tap or click on any unusual substances. Just observe. Scroll ahead.
      </p>

      {/* Dim overlay - stays after flicker */}
      {hasTriggered && <div className="gallery-dim"></div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg group ${
              isFlickering && index === 2 ? 'push-forward' : ''
            }`}
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              onClick={handleImageClick}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
