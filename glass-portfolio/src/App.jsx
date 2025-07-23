import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlowOverlay from './components/GlowOverlay';
import StarsBackground from './components/StarsBackground';
import ClickParticles from './components/ClickParticles';
import LightGradient from './components/LightGradient'; // optional

import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
// import SpaceshipScroll from './components/SpaceshipScroll';

function App() {
  return (
    <>
      {/* <SpaceshipScroll /> */}
      <GlowOverlay />
      <StarsBackground />
      <ClickParticles />
      {/* <LightGradient /> if you want extra gradient */}

      <div className="relative z-10">
        <Navbar />
        <main className="pt-20 scroll-smooth">
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
  