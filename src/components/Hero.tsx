import { motion } from 'framer-motion';
import { Download, ArrowDown, Code2 } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="static flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-white via-primary-light/10 to-white dark:from-dark-bg dark:via-primary/10 dark:to-dark-bg"
    >
      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-block mb-8"
          >
            <div className="w-32 h-32 p-1 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-dark">
              <div className="flex items-center justify-center w-full h-full bg-white rounded-full dark:bg-dark-bg">
                <Code2 size={64} className="text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-5xl font-bold text-transparent md:text-7xl bg-gradient-to-r from-gray-900 via-primary to-primary-dark dark:from-white dark:via-primary-light dark:to-primary bg-clip-text"
          >
            Desarrollador Full Stack
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-8 text-xl text-gray-600 md:text-2xl dark:text-gray-300"
          >
            Especializado en React, Node.js y Arquitectura Backend
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-primary to-primary-dark rounded-2xl hover:shadow-primary/50"
            >
              Ver proyectos
              <ArrowDown size={20} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 font-semibold text-gray-900 transition-all duration-300 bg-white border-2 shadow-lg dark:bg-dark-card dark:text-white border-primary rounded-2xl hover:bg-primary-light dark:hover:bg-primary/20"
            >
              <Download size={20} />
              Descargar CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 dark:text-gray-500"
            >
              <ArrowDown size={32} className="mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
