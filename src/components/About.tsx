import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Server, Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Code, text: 'Desarrollo Frontend con React & TypeScript' },
    { icon: Server, text: 'Arquitectura Backend escalable' },
    { icon: Database, text: 'Gestión de bases de datos PostgreSQL' },
    { icon: Sparkles, text: 'APIs RESTful y autenticación JWT' },
  ];

  return (
      <section id="about" ref={ref} className="relative py-20 overflow-hidden bg-white dark:bg-dark-bg">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary-light bg-clip-text">
                      Sobre mí
                  </h2>
                  <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-dark"></div>
              </motion.div>

              <div className="grid items-center gap-12 md:grid-cols-2">
                  <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="space-y-6">
                      <div className="p-8 border shadow-xl bg-gradient-to-br from-primary-light/30 to-white dark:from-primary/10 dark:to-dark-card rounded-2xl border-primary-light/50 dark:border-primary/20">
                          <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                              Soy un desarrollador full stack apasionado por crear soluciones tecnológicas robustas y
                              escalables. Mi enfoque se centra en el desarrollo de aplicaciones empresariales utilizando
                              las tecnologías más modernas del ecosistema JavaScript.
                          </p>
                          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                              Con experiencia en <span className="font-semibold text-primary">Golang</span>,{" "}
                              <span className="font-semibold text-primary">Node.js</span>,{" "}
                              <span className="font-semibold text-primary">Express</span>,{" "}
                              <span className="font-semibold text-primary">React.js</span> y {" "}
                              <span className="font-semibold text-primary">PostgreSQL</span>, me especializo en
                              construir APIs RESTful seguras, implementar autenticación JWT y diseñar arquitecturas
                              backend eficientes que impulsan el crecimiento empresarial.
                          </p>
                      </div>
                  </motion.div>

                  <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="space-y-4">
                      {highlights.map((item, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                              whileHover={{ x: 10, scale: 1.02 }}
                              className="flex items-center gap-4 p-4 transition-all duration-300 bg-white border border-gray-100 shadow-lg dark:bg-dark-card rounded-2xl dark:border-dark-border hover:border-primary dark:hover:border-primary">
                              <div className="p-3 text-white bg-gradient-to-br from-primary to-primary-dark rounded-xl">
                                  <item.icon size={24} />
                              </div>
                              <p className="font-medium text-gray-700 dark:text-gray-300">{item.text}</p>
                          </motion.div>
                      ))}
                  </motion.div>
              </div>
          </div>
      </section>
  );
};

export default About;
