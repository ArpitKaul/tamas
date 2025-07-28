import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Thanks = () => {

  const closeMenu = () => setIsOpen(false);
  

  return (
    <section className="relative w-full min-h-[80vh] bg-black text-white overflow-hidden">
      <img
        src={assets.end}
        alt="Thank You Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-wide">Thank You for Witnessing</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          In the darkness, truth reveals itself. <br />
          Thank you for stepping into the shadowed world of <span className="italic">Tamas</span>.
        </p>

        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
          <button className="px-6 py-3 border border-red-600 text-red-500 font-semibold hover:bg-red-700 hover:text-white transition duration-300">
            Click to Visit Again
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Thanks;
