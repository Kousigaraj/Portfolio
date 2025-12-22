import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import CodingStats from './sections/CodingStats';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30 transition-colors duration-300">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <CodingStats />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
