import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Envolope = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpened(true);
    setTimeout(() => {
      navigate('/map');
    }, 3000); // Navigate after 3 seconds
  };

  return (
    <div className="w-full h-screen  relative flex items-center justify-center px-4 overflow-hidden">
      {/* Left Hand */}
      {!opened && (
        <img
          src={assets.lefthand}
          loading='lazy'
          alt="Left Hand"
          className="absolute left-0 bottom-100 h-[30%] sm:h-[40%] md:h-[50%] lg:h-[60%] object-contain animate-fadeInLeft z-10"
        />
      )}

      {/* Right Hand */}
      {!opened && (
        <img
          src={assets.righthand}
          loading='lazy'
          alt="Right Hand"
          className="absolute right-0 bottom-100 h-[30%] sm:h-[40%] md:h-[50%] lg:h-[60%] object-contain animate-fadeInRight z-10"
        />
      )}

      {/* Envelope or Message */}
      {!opened ? (
        <img
          src={assets.envelope}
          alt="Sealed Envelope"
          onClick={handleClick}
          className="cursor-pointer z-20 transition-all duration-700 ease-in-out hover:scale-105 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] max-w-[90%] shadow-2xl"
        />
      ) : (
        <div className="text-center p-6 bg-[#e6d3a3] text-[#3e2e1f] rounded-xl shadow-2xl animate-pulse z-20 max-w-[90%]">
          <p className="text-lg sm:text-xl md:text-2xl font-serif italic">
            📜 Unfolding map...
          </p>
        </div>
      )}
    </div>
  );
};

export default Envolope;
