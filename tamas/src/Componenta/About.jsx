import React, { useEffect, useState, useRef } from 'react';
import { about, left, right } from '../assets/assets';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './style.css';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [stepVisibility, setStepVisibility] = useState(Array(8).fill(false));
  const [stepFade, setStepFade] = useState(Array(8).fill(false));
  const lastScrollY = useRef(window.scrollY);

  const [scrollDir, setScrollDir] = useState('down');

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      const appearTimers = [];
      const fadeTimers = [];

      for (let i = 0; i < 8; i++) {
        appearTimers.push(
          setTimeout(() => {
            setStepVisibility(prev => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
          }, i * 500)
        );

        fadeTimers.push(
          setTimeout(() => {
            setStepFade(prev => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
          }, i * 500 + 1500) 
        );
      }

      return () => {
        appearTimers.forEach(clearTimeout);
        fadeTimers.forEach(clearTimeout);
      };
    } else {
      setStepVisibility(Array(8).fill(false));
      setStepFade(Array(8).fill(false));
    }
  }, [inView]);

  const footsteps = Array.from({ length: 8 }, (_, i) => ({
    image: i % 2 === 0 ? left : right,
    isLeft: i % 2 === 0,
  }));

  return (
    <div
      className="w-full px-4 sm:px-6 py-12 sm:py-16"
      style={{ background: 'linear-gradient(#0f1a12, #0a0f01)' }}
      ref={ref}
    >
      <section className="max-w-6xl mx-auto text-center relative">
        <h2 className="drip text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-16 tracking-wide leading-snug sm:leading-tight relative z-10">
          Where Darkness Whispers... Tamas Begins
        </h2>

        <div className="absolute top-[4.6rem] left-1/2 -translate-x-1/2 w-full max-w-5xl flex justify-between px-4 z-0 pointer-events-none">
          {footsteps.map((foot, index) => (
            <motion.img
              key={index}
              src={foot.image}
              alt={`footstep-${index}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: stepVisibility[index]
                  ? stepFade[index]
                    ? 0
                    : 0.7
                  : 0,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
              }}
              className="w-16 sm:w-24 h-auto mx-2 sm:mx-3"
            />
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 mt-10">
          {about.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 shadow-lg border border-[#2e2e2e] hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={`about-${index}`}
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300 text-base sm:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
