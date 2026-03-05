import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBlobs from './components/AnimatedBlobs';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-dark-bg">
      <AnimatedBlobs />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <footer className="py-8 border-t border-gray-200 bg-gray-50 dark:bg-dark-card dark:border-dark-border">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2026 Carlos Tirado. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
