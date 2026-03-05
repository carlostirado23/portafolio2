import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
      {
          title: "API de Programación de Tareas",
          description:
              "Plataforma web para programar y asignar tareas a técnicos, con carga masiva desde Excel, validación de registros y control de acceso mediante JSON Web Token (JWT).",
          image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
          technologies: ["Node.js", "PostgreSQL", "Express", "JWT"],
          github: "https://github.com/carlostirado23/applus",
          demo: "https://applus-six.vercel.app/",
      },
      {
          title: "API de Gestión Contable y de Votos",
          description:
              "Backend para la administración de registros financieros, aportes y procesos de votación, con generación de estadísticas para dashboards y control de acceso mediante JSON Web Token (JWT).",
          image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
          technologies: ["Node.js", "Express", "Firebase", "JWT"],
          github: "https://github.com/carlostirado23/ipuc-backend",
          demo: "https://ipuc-node.vercel.app/",
      },
      {
          title: "Sistema de Gestión Contable y Votaciones",
          description:
              "Aplicación web con dashboard interactivo para visualizar aportes, ofrendas y estadísticas de votaciones.",
          image: "https://i.pinimg.com/736x/20/03/2f/20032f95421ccb87fbf661de862f2cff.jpg",
          technologies: ["React", "TypeScript", "Tailwind", "Chart.js"],
          github: "https://github.com/carlostirado23/ipuc-front",
          demo: "#",
      },
      {
          title: "Sistema de Programación de Tareas",
          description:
              "Aplicación web para la gestión y asignación de tareas a técnicos, con carga masiva desde Excel y validación de registros.",
          image: "https://i.pinimg.com/736x/bd/59/a5/bd59a544c1316a72a182547507272917.jpg",
          technologies: ["React", "JavaScript", "Tailwind"],
          github: "https://github.com/carlostirado23/applus-front",
          demo: "#",
      },
      {
          title: "API de Compresión y Empaquetado de Imágenes",
          description:
              "Servicio backend que recibe múltiples imágenes, las optimiza automáticamente y devuelve un archivo comprimido en formato ZIP listo para descargar.",
          image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
          technologies: ["Node.js", "JavaScript"],
          github: "https://github.com/carlostirado23/comprimirfotos",
          demo: "#",
      },
      {
          title: "Generador de Contacto Descargable",
          description:
              "Aplicación web que permite descargar una tarjeta de contacto digital con información profesional para guardarla fácilmente en dispositivos.",
          image: "https://i.pinimg.com/736x/16/16/7b/16167b96768d852db99a2cf2e36ab735.jpg",
          technologies: ["React", "JavaScript"],
          github: "https://github.com/carlostirado23/NameDrop",
          demo: "https://contacto-psi.vercel.app/",
      },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 overflow-hidden bg-white dark:bg-dark-bg"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary-light bg-clip-text">
            Proyectos
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-dark"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 dark:text-gray-400">
            Algunos de mis proyectos más destacados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group dark:bg-dark-card rounded-2xl dark:border-dark-border hover:border-primary dark:hover:border-primary"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100"></div>
                <div className="absolute flex gap-2 transition-opacity duration-300 opacity-0 bottom-4 left-4 right-4 group-hover:opacity-100">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target= "_blank"
                    href={project.github}
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-2 font-semibold text-gray-900 transition-colors duration-300 bg-white rounded-lg dark:bg-dark-bg dark:text-white hover:bg-primary hover:text-white"
                  >
                    <Github size={18} />
                    GitHub
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo}
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-2 font-semibold text-white transition-colors duration-300 rounded-lg bg-primary hover:bg-primary-dark"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-light/30 dark:bg-primary/20 text-primary-dark dark:text-primary-light"
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
