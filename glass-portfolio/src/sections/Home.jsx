// src/pages/Home.jsx
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center relative text-white px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-wide drop-shadow-lg">
          Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Prajith</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          I craft responsive, modern websites with immersive experiences using <span className="text-teal-300 font-semibold">React</span>, <span className="text-purple-300 font-semibold">TailwindCSS</span> and a dash of animation magic.
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-10 px-6 py-3 rounded-xl text-white font-semibold border border-white/20 backdrop-blur-md hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
        >
          View My Work ↓
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
