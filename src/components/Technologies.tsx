import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGolang } from "react-icons/fa6";
import {
  Code2,
  FileJson,
  Server,
  Database,
  Palette,
  GitBranch,
  Shield
} from 'lucide-react';

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologies = [
    {
      name: 'React',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      description: 'Frontend Framework',
    },
    {
      name: 'TypeScript',
      icon: FileJson,
      color: 'from-blue-600 to-blue-400',
      description: 'Type-safe JavaScript',
    },
    {
      name: 'Golang',
      icon: FaGolang , 
      color: 'from-blue-800 to-green-400',
      description: 'Lenguaje de programación eficiente',
    },
    {
      name: 'Node.js',
      icon: Server,
      color: 'from-green-600 to-green-400',
      description: 'Backend Runtime',
    },
    {
      name: 'Express',
      icon: Server,
      color: 'from-gray-700 to-gray-500',
      description: 'Web Framework',
    },
    {
      name: 'PostgreSQL',
      icon: Database,
      color: 'from-blue-700 to-blue-500',
      description: 'Relational Database',
    },
    {
      name: 'Tailwind CSS',
      icon: Palette,
      color: 'from-cyan-500 to-blue-500',
      description: 'Utility-first CSS',
    },
    {
      name: 'Git / GitHub',
      icon: GitBranch,
      color: 'from-orange-600 to-red-500',
      description: 'Version Control',
    },
    {
      name: 'JWT',
      icon: Shield,
      color: 'from-purple-600 to-pink-500',
      description: 'Authentication',
    },
  ];

  return (
    <section
      id="technologies"
      ref={ref}
      className="relative py-20 overflow-hidden bg-gray-50 dark:bg-dark-card"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-bold text-transparent tex4-4xl mb-9 md:text-5xl bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary-light bg-clip-text">
            Tecnologías
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-dark"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 dark:text-gray-400">
            Herramientas y tecnologías que domino para crear soluciones completas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.25)',
              }}
              className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg cursor-pointer group dark:bg-dark-bg rounded-2xl dark:border-dark-border hover:border-primary dark:hover:border-primary"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`p-4 bg-gradient-to-br ${tech.color} rounded-2xl text-white mb-4 shadow-lg`}
                >
                  <tech.icon size={32} />
                </motion.div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-primary">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
