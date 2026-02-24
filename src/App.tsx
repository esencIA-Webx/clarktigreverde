import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { PhysicalExperienceSection } from './components/PhysicalExperienceSection';
import { ConceptSection } from './components/ConceptSection';
import { DifferentialSection } from './components/DifferentialSection';
import { ReleasesSection } from './components/ReleasesSection';
import { FinalCTA } from './components/FinalCTA';
import { CinematicVideoPlayer } from './components/CinematicVideoPlayer';

const SECTIONS = ['hero', 'experience', 'concept', 'differential', 'releases', 'cta'];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const activeIndex = SECTIONS.indexOf(activeSection);

  const handleSectionChange = (id: string) => {
    if (SECTIONS.includes(id)) {
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-background h-screen w-full text-foreground font-sans selection:bg-accent selection:text-background overflow-hidden relative">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      <AnimatePresence>
        {isPlayingVideo && (
          <CinematicVideoPlayer
            src="/assets/experience-loop.mp4"
            onClose={() => setIsPlayingVideo(false)}
          />
        )}
      </AnimatePresence>

      <motion.main
        className="relative z-10 w-full h-full"
        animate={{ y: isPlayingVideo ? "0vh" : `-${activeIndex * 100}vh` }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-screen w-full">
          <HeroSection
            isActive={activeSection === 'hero' && !isPlayingVideo}
            onPlay={() => setIsPlayingVideo(true)}
          />
        </div>
        <div className="h-screen w-full">
          <PhysicalExperienceSection isActive={activeSection === 'experience'} />
        </div>
        <div className="h-screen w-full">
          <ConceptSection isActive={activeSection === 'concept'} />
        </div>
        <div className="h-screen w-full">
          <DifferentialSection isActive={activeSection === 'differential'} />
        </div>
        <div className="h-screen w-full">
          <ReleasesSection isActive={activeSection === 'releases'} />
        </div>
        <div className="h-screen w-full">
          <FinalCTA isActive={activeSection === 'cta'} />
        </div>
      </motion.main>
    </div>
  )
}

export default App
