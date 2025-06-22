import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlowOverlay from './components/GlowOverlay';
import StarsBackground from './components/StarsBackground';
import ClickParticles from './components/ClickParticles';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <GlowOverlay />
      <StarsBackground />
      <ClickParticles />

      <div className="relative z-10">
        <Navbar />
        <main className="pt-20 px-6 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
