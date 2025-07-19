import React from 'react';
import { screenshots } from '../assets/assets'; 

const Screenshot = () => {
  return (
    <div className="w-full px-4 py-10 bg-black text-white">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-10">Game Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {screenshots.map(({ id, image }) => (
          <div
            key={id}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image}
              alt={`Screenshot ${id}`}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screenshot;
