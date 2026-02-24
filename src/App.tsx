import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { PhysicalExperienceSection } from './components/PhysicalExperienceSection';
import { DifferentialSection } from './components/DifferentialSection';
import { ReleasesSection } from './components/ReleasesSection';
import { CinematicVideoPlayer } from './components/CinematicVideoPlayer';

const SECTIONS = ['hero', 'experience', 'differential', 'releases'];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activeIndex = SECTIONS.indexOf(activeSection);

  const handleSectionChange = (id: string) => {
    if (SECTIONS.includes(id)) {
      setActiveSection(id);

      if (isMobile) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className={`bg-background w-full text-foreground font-sans selection:bg-accent selection:text-background relative ${isMobile ? 'overflow-y-auto h-auto' : 'overflow-hidden h-screen'}`}>
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      <AnimatePresence>
        {isPlayingVideo && (
          <CinematicVideoPlayer
            src="https://www.youtube.com/embed/6mmNrXqCtag"
            onClose={() => setIsPlayingVideo(false)}
          />
        )}
      </AnimatePresence>

      <motion.main
        className="relative z-10 w-full"
        animate={{
          y: isMobile ? 0 : (isPlayingVideo ? "0vh" : `-${activeIndex * 100}vh`)
        }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div id="hero" className="min-h-screen lg:h-screen w-full">
          <HeroSection
            isActive={(isMobile || activeSection === 'hero') && !isPlayingVideo}
            onPlay={() => setIsPlayingVideo(true)}
          />
        </div>
        <div id="experience" className="min-h-screen lg:h-screen w-full">
          <PhysicalExperienceSection isActive={isMobile || activeSection === 'experience'} />
        </div>
        <div id="differential" className="min-h-screen lg:h-screen w-full">
          <DifferentialSection isActive={isMobile || activeSection === 'differential'} />
        </div>
        <div id="releases" className="min-h-screen lg:h-screen w-full">
          <ReleasesSection isActive={isMobile || activeSection === 'releases'} />
        </div>
      </motion.main>
    </div>
  )
}

export default App
