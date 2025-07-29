import { useState } from 'react';
import { FaUser, FaBookOpen, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black text-white shadow-md z-50 fixed w-full top-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div
          className="text-2xl font-bold transition-all duration-300 cursor-pointer relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            {hovered ? (
              <span className="whitespace-nowrap">TAMAS: The Journey into Darkness</span>
            ) : (
              <span>TAMAS</span>
            )}
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-lg">
          <Link to="characters" smooth={true} duration={500} className="flex items-center gap-2 hover:text-red-600 cursor-pointer">
            <FaUser />
            <span>Characters</span>
          </Link>
          <Link to="about" smooth={true} duration={500} className="flex items-center gap-2 hover:text-red-600 cursor-pointer">
            <FaBookOpen />
            <span>About Game</span>
          </Link>
          <Link to="gallery" smooth={true} duration={500} className="flex items-center gap-2 hover:text-red-600 cursor-pointer">
            <FaCalendarAlt />
            <span>Seasons</span>
          </Link>
          <Link to="screenshots" smooth={true} duration={500} className="hover:text-red-600 cursor-pointer">
            <span>Screenshots</span>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-6 pb-4 text-lg bg-black">
          <Link to="characters" smooth={true} duration={500} onClick={closeMenu} className="flex items-center gap-2 hover:text-red-600 cursor-pointer">
            <FaUser />
            <span>Characters</span>
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu} className="flex items-center gap-2 hover:text-red-600 cursor-pointer">
            <FaBookOpen />
            <span>About Game</span>
          </Link>
          <Link to="gallery" smooth={true} duration={500} onClick={closeMenu} className="flex items-center gap-2 hover:text-red-600 cursor-pointer">
            <FaCalendarAlt />
            <span>Seasons</span>
          </Link>
          <Link to="screenshots" smooth={true} duration={500} onClick={closeMenu} className="hover:text-red-600 cursor-pointer">
            <span>Screenshots</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
