import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  FileJson,
  Server,
  Database,
  Palette,
  GitBranch,
  Shield,
  BarChart3,
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
    {
      name: 'Power BI',
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-500',
      description: 'Business Intelligence',
    },
  ];

  return (
    <section
      id="technologies"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-dark-card relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary-light bg-clip-text text-transparent">
            Tecnologías
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Herramientas y tecnologías que domino para crear soluciones completas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="group bg-white dark:bg-dark-bg p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-dark-border hover:border-primary dark:hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`p-4 bg-gradient-to-br ${tech.color} rounded-2xl text-white mb-4 shadow-lg`}
                >
                  <tech.icon size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
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
