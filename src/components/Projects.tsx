import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Sistema de Gestión Empresarial',
      description:
        'Plataforma completa para gestión de inventarios, ventas y reportes. Incluye autenticación JWT, roles de usuario y dashboard interactivo.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT'],
      github: '#',
      demo: '#',
    },
    {
      title: 'API RESTful E-commerce',
      description:
        'API escalable para comercio electrónico con gestión de productos, carritos, órdenes y pagos. Documentación completa con Swagger.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Dashboard Analytics',
      description:
        'Dashboard interactivo para visualización de métricas empresariales en tiempo real. Integración con Power BI y exportación de reportes.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Chart.js', 'Power BI'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Sistema de Autenticación',
      description:
        'Sistema robusto de autenticación y autorización con JWT, refresh tokens, verificación de email y recuperación de contraseña.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Nodemailer'],
      github: '#',
      demo: '#',
    },
    {
      title: 'CMS Headless',
      description:
        'Sistema de gestión de contenidos headless con API GraphQL. Perfecto para sitios web, blogs y aplicaciones móviles.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'GraphQL', 'PostgreSQL', 'React', 'TypeScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Manager App',
      description:
        'Aplicación de gestión de tareas con drag & drop, filtros avanzados, colaboración en equipo y notificaciones en tiempo real.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white dark:bg-dark-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary-light bg-clip-text text-transparent">
            Proyectos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Algunos de mis proyectos más destacados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-dark-card rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-dark-border hover:border-primary dark:hover:border-primary transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    className="flex-1 bg-white dark:bg-dark-bg text-gray-900 dark:text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                    GitHub
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo}
                    className="flex-1 bg-primary text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-light/30 dark:bg-primary/20 text-primary-dark dark:text-primary-light text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
