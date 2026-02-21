import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Section } from './Section';
import { VideoBackground } from './VideoBackground';

interface PhysicalExperienceSectionProps {
    isActive?: boolean;
}

export const PhysicalExperienceSection = ({ isActive = false }: PhysicalExperienceSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Precise Cinematic Easing
    const revealEase = [0.22, 1, 0.36, 1] as const;

    return (
        <Section id="experience" className="relative h-screen bg-black overflow-hidden">
            <div ref={containerRef} className="absolute inset-0 h-full w-full">
                <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                    <VideoBackground
                        src="/assets/experience-loop.mp4"
                        className="opacity-40"
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 1, ease: revealEase }}
                        className="relative z-10 text-center max-w-4xl px-6"
                    >
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: isActive ? 0 : 50, opacity: isActive ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: revealEase }}
                            className="text-6xl md:text-9xl font-bold uppercase tracking-tighter"
                        >
                            <span className="block text-white">ENERGÍA</span>
                            <span className="block text-accent">CRUDA</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isActive ? 0.8 : 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-8 text-xl md:text-2xl font-light tracking-wide text-white"
                        >
                            NO HAY VOZ. SOLO IMPACTO.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
