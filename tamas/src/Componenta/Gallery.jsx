import React, { useState, useEffect } from 'react';
import './style.css';
import { assets, galleryImages } from '../assets/assets';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [showRunes, setShowRunes] = useState(false);
  const [ritualCompleted, setRitualCompleted] = useState(false);

  const [positions, setPositions] = useState([
    { top: '10%', left: '44%' },
    { top: '25%', left: '17%' },
    { top: '30%', right: '17%' },
    { bottom: '28%', left: '18%' },
    { bottom: '26%', right: '17%' },
    { bottom: '11%', left: '44%' },
  ]);

  const handleClick = () => {
    if (ritualCompleted) return;

    setIsShaking(true);
    setShowRunes(true);
    document.body.classList.add('no-scroll');

    setTimeout(() => {
      setIsShaking(false);
      document.body.classList.remove('no-scroll');

      setTimeout(() => {
        setShowRunes(true);
        setRitualCompleted(true);
      }, 1000);
    }, 7000);
  };

  // 🔁 Shuffle positions every 2s after ritual is completed
  useEffect(() => {
    if (!ritualCompleted) return;

    const interval = setInterval(() => {
      // Randomly shuffle the positions
      const shuffled = [...positions]
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      setPositions(shuffled);
    }, 2000);

    return () => clearInterval(interval);
  }, [ritualCompleted, positions]);

  return (
    <div className="w-full overflow-x-hidden">
      <section
        className={`w-full min-h-screen text-white px-4 py-12 md:py-8 flex flex-col items-center justify-center bg-cover bg-center relative ${
          isShaking ? 'gallery-turbulence' : ''
        }`}
        style={{ backgroundImage: `url(${assets.wall})` }}
      >
        {isShaking && (
          <div className="absolute inset-0 bg-opacity-60 z-30 pointer-events-none" />
        )}

        {showRunes && (
          <img
            src={assets.runes}
            alt="Glowing Runes"
            className="absolute inset-0 w-full h-full object-cover animate-glow z-10"
          />
        )}

        <motion.img
          src={assets.doll}
          alt="Left Doll"
          className="hidden md:block absolute top-0 left-0 h-[40%] z-40"
          animate={
            isShaking
              ? {
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.3, repeat: Infinity },
                }
              : {}
          }
        />
        <motion.img
          src={assets.doll}
          alt="Right Doll"
          className="hidden md:block absolute top-0 right-0 h-[40%] z-40"
          animate={
            isShaking
              ? {
                  rotate: [0, 5, -5, 5, 0],
                  transition: { duration: 0.3, repeat: Infinity },
                }
              : {}
          }
        />

        <h2 className="text-center text-4xl font-bold mb-4 md:mb-2 z-50">
          Gallery of the Forgotten
        </h2>
        <p className="text-center text-sm text-gray-400 mb-8 md:mb-4 z-50">
          Do not tap or click on any unusual substances. Just observe.
        </p>

        <div className="relative w-[400px] sm:w-[500px] md:w-[600px] aspect-square z-50">
          <img
            src={assets.circle}
            alt="Summoning Circle"
            className="w-full h-full object-contain"
          />

          {galleryImages.slice(0, 6).map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Substance ${index + 1}`}
              onClick={handleClick}
              className="substance-item absolute w-[50px] sm:w-[60px] md:w-[70px] cursor-pointer z-50"
              style={{ ...positions[index] }}
              layout // ✅ For smooth animated transition
              animate={
                isShaking
                  ? {
                      rotate: [0, -10, 10, -10, 10, 0],
                      transition: { duration: 0.6, repeat: 20 },
                    }
                  : {}
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
