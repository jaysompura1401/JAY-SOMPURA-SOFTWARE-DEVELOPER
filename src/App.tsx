import { useState, useCallback } from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  const handleSetCursor = useCallback((text: string, hovering: boolean) => {
    setCursorText(text);
    setIsHovering(hovering);
  }, []);

  return (
    <div style={{ cursor: 'none' }}>
      <CustomCursor cursorText={cursorText} isHovering={isHovering} />
      <Navigation onSetCursor={handleSetCursor} />
      <main>
        <Hero />
        <About />
        <Work onSetCursor={handleSetCursor} />
        <Skills />
        <Experience />
        <Education />
        <Services />
        <Contact onSetCursor={handleSetCursor} />
      </main>
      <Footer />
    </div>
  );
}
