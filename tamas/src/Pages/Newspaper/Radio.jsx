import React, { useRef, useState } from 'react';
import { assets } from '../../assets/assets';
import Envolope from './Envolope';

const Radio = () => {
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  const handlePlay = () => {
    if (audioRef.current && videoRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        videoRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white mt-20 px-4 relative">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide text-red-100 drop-shadow-lg">
        The Last Message
      </h1>
      <p>click on the button and listen the lastmessage</p>

      <div className="absolute w-96 h-96 rounded-full bg-yellow-100 opacity-10 blur-3xl top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="relative w-[40rem] flex justify-center mt-16 z-10">
        <img
          src={assets.bench}
          loading='lazy'
          alt="Wooden Table"
          className="w-full object-contain brightness-110"
        />

        {/* Radio + Hover Area */}
        <div
          className="absolute bottom-[62%] w-[55%] md:w-[50%] object-contain drop-shadow-[0_0_30px_rgba(255,255,200,0.5)]"
          onMouseEnter={() => setShowArrow(true)}
          onMouseLeave={() => setShowArrow(false)}
          onClick={handlePlay}
        >
          {/* Radio Image */}
          <img
            src={assets.radio}
            alt="Spooky Vintage Radio"
            loading='lazy'
            className="w-full h-full"
          />

          {/* Waveform Video */}
          <video
            ref={videoRef}
            loading="lazy"
            src={assets.wave}
            className="absolute top-[35%] left-[30%] w-[43%] h-[24%] object-cover rounded-md opacity-80"
            muted
            playsInline
            loop
          />

          {/* White Arrow Only */}
          {showArrow && (
            <div className="absolute top-[55%] left-[73%] text-white text-3xl animate-bounce z-20">
              ↓
            </div>
          )}
        </div>
      </div>

      {/* Audio */}
      <audio ref={audioRef} src={assets.audio1} loading="lazy" />
      <Envolope/>
    </div>
  );
};

export default Radio;
