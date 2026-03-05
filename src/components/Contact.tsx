import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
      {
          name: "GitHub",
          icon: Github,
          url: "https://github.com/carlostirado23",
          color: "hover:text-gray-900 dark:hover:text-white",
      },
      {
          name: "LinkedIn",
          icon: Linkedin,
          url: "https://www.linkedin.com/in/carlos-tirado-a713a6247/",
          color: "hover:text-blue-600",
      },
      {
          name: "Email",
          icon: Mail,
          url: "mailto:mariotiradotovar@gmail.com",
          color: "hover:text-primary",
      },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-primary-light/10 to-gray-50 dark:from-dark-card dark:via-primary/5 dark:to-dark-card"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary-light bg-clip-text">
            Contacto
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-dark"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 dark:text-gray-400">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center max-w-xl mx-auto space-y-6"
          >
            <div className="p-8 bg-white border border-gray-100 shadow-xl dark:bg-dark-bg rounded-2xl dark:border-dark-border">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Conéctate conmigo
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Estoy disponible para proyectos freelance, oportunidades de colaboración
                o simplemente para charlar sobre tecnología.
              </p>

              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ x: 10 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-gray-50 dark:bg-dark-card rounded-xl transition-colors duration-300 ${social.color} group`}
                  >
                    <div className="p-3 text-white transition-transform duration-300 rounded-lg bg-gradient-to-br from-primary to-primary-dark group-hover:scale-110">
                      <social.icon size={24} />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default Contact;
