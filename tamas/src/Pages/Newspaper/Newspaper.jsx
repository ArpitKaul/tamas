import React from 'react';
import { newspapers, main_news1, assets } from '../../assets/assets';
import Hidden from './hidden';

const Newspaper = () => {
  return (
    <section
      className="text-white py-16 px-6 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${main_news1})` }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif tracking-wider relative z-10">
        Tamas Headlines
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {newspapers.map((paper, index) => (
          <div
            key={paper.id}
            className="relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img
              src={paper.image}
              alt={paper.title}
              className="w-full h-[35rem] object-cover"
            />

            {index === 0 && (
              <video
                src={assets.housevideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-41 ml-12 w-76.5 h-62 object-cover rounded-lg shadow-lg z-10"
              />
            )}

            {index === 1 && (
              <video
                src={assets.mirror1}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-52 ml-24 w-51 h-62 object-cover rounded-lg shadow-lg z-10"
              />
            )}

            {index === 2 && (
              <video
                src={assets.church}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-45 ml-20 w-60 h-72 object-cover rounded-lg shadow-lg z-10"
              />
            )}
          </div>
        ))}
      </div>
      <Hidden/>
    </section>
  );
};

export default Newspaper;
