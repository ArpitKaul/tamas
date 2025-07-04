import React from 'react';
import { about } from '../assets/assets';

const About = () => {
  return (
    <div
      className="w-full px-6 py-16"
      style={{
        background: 'linear-gradient(#0f1a12, #0a0f01)',
      }}
    >
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-12 tracking-wide">
          Where Darkness Whispers... Tamas Begins
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {about.map((item, index) => (
            <div
              key={index}
              className="bg-red-900 rounded-lg p-4 shadow-lg border border-[#2e2e2e] hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt="About section"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300 text-xl">
                {item.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
