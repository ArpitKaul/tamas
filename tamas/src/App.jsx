import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Explore from './Components/Explore';

// Sections for homepage
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Chracters from './Components/Chracters';
import Gallery from './Components/Gallery';
import Screenshot from './Components/Screenshot';
import Thanks from './Components/Thanks';
import Footer from './Footer';
import Newspaper from './Pages/Newspaper/Newspaper';

// Homepage content
const HomePage = () => {
  return (
    <>
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

      <section id="explore">
        <Explore />
      </section>

      {/* <section id="thanks">
        <Thanks />
      </section> */}

      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/newspaper" element={<Newspaper/>} />
    </Routes>
  );
};

export default App;
