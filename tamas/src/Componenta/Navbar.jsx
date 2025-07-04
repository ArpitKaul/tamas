// Navbar.jsx
import { useState } from 'react';
import { FaUser, FaBookOpen, FaCalendarAlt } from 'react-icons/fa';

export default function Navbar() {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white shadow-md z-50">
      {/* Game Title */}
      <div
        className="text-2xl font-bold transition-all duration-300 cursor-pointer relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? (
          <span className="whitespace-nowrap">TAMAS: The Journey into Darkness</span>
        ) : (
          <span>TAMAS</span>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-lg">
        <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-all">
          <FaUser />
          <span>Characters</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-all">
          <FaBookOpen />
          <span>About Game</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-all">
          <FaCalendarAlt />
          <span>Seasons</span>
        </div>
      </div>
    </nav>
  );
}
