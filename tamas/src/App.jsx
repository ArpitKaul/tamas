import React from 'react';
import Navbar from './Componenta/Navbar';
import Home from './Componenta/Home';
import About from './Componenta/About';
import Chracters from './Componenta/Chracters';
import Gallery from './Componenta/Gallery';
import Screenshot from './Componenta/Screenshot';
import Thanks from './Componenta/Thanks';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="characters">
        <Chracters />
      </section>

      <section id="screenshots">
        <Screenshot />
      </section>
       <section id="Thanks">
        <Thanks/>
      </section>
       <section id="Footer">
        <Footer/>
      </section>
    </div>
  );
};

export default App;
