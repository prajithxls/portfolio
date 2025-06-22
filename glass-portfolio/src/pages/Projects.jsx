import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Built using React, TailwindCSS, Framer Motion, and glassmorphism UI.',
    link: 'https://yourportfolio.com'
  },
  {
    title: 'Mini Payment Gateway',
    description: 'A backend-only simulation of a Razorpay-like flow using Node.js and Express.',
    link: 'https://github.com/your/project'
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen px-4 py-16 text-white bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <h1 className="text-5xl font-bold text-center mb-12">✨ My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  viewport={{ once: true }}
  className="rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-6 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group hover:bg-black/30"
>

            <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-300 transition">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-200 transition"
            >
              View Project <FaExternalLinkAlt className="text-xs" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
