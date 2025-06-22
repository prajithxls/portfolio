import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10' : ''
      }`}
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <nav className="relative z-10 w-full px-8 py-4 flex justify-center backdrop-blur-xl">
        <ul className="flex space-x-12 font-orbitron text-base justify-center w-full max-w-4xl">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item} className="relative group flex-1 text-center">
              <a
                href={`#${item.toLowerCase()}`}
                className="relative z-10 inline-block text-white transition-all duration-500 py-3 px-6 rounded-xl hover:scale-105 hover:text-fuchsia-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
