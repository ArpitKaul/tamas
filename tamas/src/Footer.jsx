import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const isNewspaperPage = location.pathname === '/newspaper';

  return (
    <footer
      className={`w-full py-10 px-6 border-t transition-all duration-500 ${
        isNewspaperPage
          ? 'bg-black/80 text-gray-300 border-gray-700'
          : 'bg-black text-gray-400 border-gray-800'
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Left - Game Title */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">TAMAS</h2>
          <p className="mt-2 text-sm">A descent into shadows. A game where the unknown watches.</p>
        </div>

        {/* Center - Navigation */}
        <div>
          <h3 className="font-semibold text-white mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#characters" className="hover:text-white">Characters</a></li>
            <li><a href="#screenshots" className="hover:text-white">Screenshots</a></li>
            <li><a href="#behind" className="hover:text-white">Behind the Darkness</a></li>
          </ul>
        </div>

        {/* Right - Social */}
        <div>
          <h3 className="font-semibold text-white mb-2">Connect</h3>
          <div className="flex justify-center md:justify-start gap-4 text-lg">
            <a href="#" className="hover:text-white"><FaGithub /></a>
            <a href="#" className="hover:text-white"><FaDiscord /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
          <p className="text-xs mt-4 italic">See you beyond the veil.</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Tamas Game. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
