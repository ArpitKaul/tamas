import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <div className="explore-section p-10 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">Choose Your Curse</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Haunted Newspapers */}
        <Link to="/newspaper" className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
          <h2 className="text-2xl font-semibold mb-2">Haunted Newspapers</h2>
          <p>Read eerie headlines and watch cursed images move like magic.</p>
        </Link>

        {/* Occult Map */}
        <Link to="/occult-map" className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
          <h2 className="text-2xl font-semibold mb-2">Occult Map</h2>
          <p>Explore ancient locations marked with forbidden rituals.</p>
        </Link>

        {/* Whispering Portraits */}
        <Link to="/portraits" className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all">
          <h2 className="text-2xl font-semibold mb-2">Whispering Portraits</h2>
          <p>Uncover secrets hidden in the eyes of talking paintings.</p>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
