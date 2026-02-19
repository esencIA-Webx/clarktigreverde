import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { PhysicalExperienceSection } from './components/PhysicalExperienceSection';
import { ConceptSection } from './components/ConceptSection';
import { DifferentialSection } from './components/DifferentialSection';
import { ReleasesSection } from './components/ReleasesSection';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-accent selection:text-background">
      <Navigation />
      <main className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <PhysicalExperienceSection />
        <ConceptSection />
        <DifferentialSection />
        <ReleasesSection />
        <FinalCTA />
      </main>
    </div>
  )
}

export default App
