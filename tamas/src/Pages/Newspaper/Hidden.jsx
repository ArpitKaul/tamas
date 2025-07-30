import React, { useState, useRef, useEffect } from 'react';
import { hiddenLetter, assets } from '../../assets/assets';
import './Newspaper.css';
import Radio from './Radio';

const Candle = ({ initialX, initialY, onMove }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [dragging, setDragging] = useState(false);
  const candleRef = useRef(null);

  const handlePointerDown = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handlePointerUp = () => {
    setDragging(false);
    setPosition({ x: initialX, y: initialY });
    onMove({ x: -250, y: -200 });
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    const x = e.clientX || (e.touches && e.touches[0]?.clientX);
    const y = e.clientY || (e.touches && e.touches[0]?.clientY);
    const newPos = { x, y };
    setPosition(newPos);
    onMove({ x:x-400, y: y - 250 });
  };

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [dragging]);

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const angle = Math.atan2(centerY - position.y, centerX - position.x) * (180 / Math.PI);

  return (
    <div
      ref={candleRef}
      className="absolute w-16 cursor-pointer select-none z-50"
      onPointerDown={handlePointerDown}
      style={{
        left: position.x - 32,
        top: position.y - 64,
        transition: dragging ? 'none' : 'all 0.3s ease-out',
      }}
    >
      <img src={assets.candle} alt="Draggable Candle" className="h-32 pointer-events-none" />
      <div
        className="absolute"
        style={{
          top: '8%',
          left: '50%',
          transform: `translateX(-50%) rotate(${angle}deg)`,
        }}
      >
        <div className="w-10 h-10 bg-yellow-300 rounded-full blur-xl opacity-80 animate-flicker" />
      </div>
    </div>
  );
};

const Hidden = () => {
  const [flamePos1, setFlamePos1] = useState({ x: -200, y: -200 });
  const [flamePos2, setFlamePos2] = useState({ x: -200, y: -200 });

  const maskImage = `
    radial-gradient(120px at ${flamePos1.x}px ${flamePos1.y}px, white 0%, transparent 100%),
    radial-gradient(120px at ${flamePos2.x}px ${flamePos2.y}px, white 0%, transparent 100%)
  `;

  return (
    <div
      className="relative min-h-screen w-full text-white bg-cover bg-center mt-20 px-6 overflow-hidden"
      style={{ backgroundImage: `url(${assets.bg})` }}
    >
      <Candle initialX={370} initialY={70} onMove={setFlamePos1} />
      <Candle initialX={window.innerWidth - 390} initialY={70} onMove={setFlamePos2} />

      {/* Title */}
      <div className="text-center pt-10 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-red-100 drop-shadow-lg">
          Letters Beneath the Flame
        </h1>
        <p className="text-sm md:text-base text-red-300 mt-1">
         Some things reveal themselves only in warmth.
        </p>
      </div>

      <div className="mt-20 max-w-3xl mx-auto p-6 relative z-10 overflow-hidden">

        <pre className="whitespace-pre-wrap text-yellow-100 text-sm md:text-base leading-relaxed font-mono pointer-events-none select-none opacity-25 blur-sm">
          {hiddenLetter}
        </pre>

        <pre
          className="whitespace-pre-wrap text-yellow-200 text-sm md:text-base leading-relaxed font-mono pointer-events-none select-none absolute top-1 left-0 w-full h-full"
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        >
          {hiddenLetter}
        </pre>
      </div>
      <Radio/>
    </div>
  );
};

export default Hidden;
