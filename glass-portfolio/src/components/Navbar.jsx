import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed w-full z-50 flex justify-around backdrop-blur-md bg-glass text-white p-4 shadow-lg">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
