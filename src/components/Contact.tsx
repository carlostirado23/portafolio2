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
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:carlos@example.com',
      color: 'hover:text-primary',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 via-primary-light/10 to-gray-50 dark:from-dark-card dark:via-primary/5 dark:to-dark-card relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary-light bg-clip-text text-transparent">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-dark-border">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Conéctate conmigo
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
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
                    <div className="p-3 bg-gradient-to-br from-primary to-primary-dark rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
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

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-dark-border space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Enviar mensaje
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
