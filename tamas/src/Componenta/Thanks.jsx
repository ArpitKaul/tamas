import React from 'react';
// import thanksBg from '../assets/behind-darkness.jpg'; // use your own eerie background image

const Thanks = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-black text-white overflow-hidden">
      <img
        // src={thanksBg}
        alt="Thank You Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-wide">Thank You for Witnessing</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          In the darkness, truth reveals itself. <br />
          Thank you for stepping into the shadowed world of <span className="italic">Tamas</span>.
        </p>
      </div>
    </section>
  );
};

export default Thanks;
