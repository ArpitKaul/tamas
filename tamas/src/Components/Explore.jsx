import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';
import { main_news } from '../assets/assets';

const Explore = () => {
  return (
    <div className="explore-section p-10 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">Choose Your Curse</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Haunted Newspapers (renamed + styled) */}
        <Link
          to="/newspaper"
          className="group rounded-lg overflow-hidden relative h-[280px] cursor-pointer border border-gray-700 hover:border-white transition-all"
        >
          {/* Lazy-loaded background image */}
          <img
            src={main_news}
            alt="Haunted Newspaper Background"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="bg-black/70 w-full h-full p-6 flex flex-col justify-between relative z-10">
            <div>
              <h2 className="text-2xl font-bold mb-2 flex items-center justify-between">
                The Cursed Gazette
                <ArrowRightCircle className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </h2>
              <p className="text-gray-300 italic mb-2">There’s more to the news than ink and paper...</p>
              <p className="text-sm text-gray-400">
                Discover haunted headlines, moving images, and stories that whisper the truth after midnight. 
                Not everything reported stays silent.
              </p>
            </div>
            <span className="text-sm italic text-gray-300 mt-4 group-hover:text-white transition-all">
              Want to see? Click to enter.
            </span>
          </div>
        </Link>

        {/* Occult Map */}
        <Link
          to="/occult-map"
          className="group bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all cursor-pointer border border-gray-700 hover:border-white"
        >
          <h2 className="text-2xl font-semibold mb-2 flex items-center justify-between">
            Occult Map
            <ArrowRightCircle className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </h2>
          <p>Explore ancient locations marked with forbidden rituals.</p>
          <span className="text-sm italic text-gray-400 mt-2 block group-hover:text-white transition-all">Click to enter</span>
        </Link>

        {/* Whispering Portraits */}
        <Link
          to="/portraits"
          className="group bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all cursor-pointer border border-gray-700 hover:border-white"
        >
          <h2 className="text-2xl font-semibold mb-2 flex items-center justify-between">
            Whispering Portraits
            <ArrowRightCircle className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </h2>
          <p>Uncover secrets hidden in the eyes of talking paintings.</p>
          <span className="text-sm italic text-gray-400 mt-2 block group-hover:text-white transition-all">Click to enter</span>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
