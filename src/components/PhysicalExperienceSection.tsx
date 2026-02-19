import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Section } from './Section';
import { VideoBackground } from './VideoBackground';

export const PhysicalExperienceSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

    return (
        <Section id="experience" className="relative h-[150vh] bg-black">
            <div ref={containerRef} className="absolute inset-0 h-full w-full">
                <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                    <VideoBackground
                        src="/assets/experience-loop.mp4"
                        className="opacity-40"
                    />

                    <motion.div
                        style={{ opacity }}
                        className="relative z-10 text-center max-w-4xl px-6"
                    >
                        <motion.h2
                            style={{ y: y1 }}
                            className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-transparent stroke-white"
                        // simplistic stroke effect via css or existing tailwind plugin, usually needs text-stroke utility or custom class.
                        // using standard text for now with specific styling
                        >
                            <span className="block text-white">ENERGÍA</span>
                            <span className="block text-accent">CRUDA</span>
                        </motion.h2>
                        <p className="mt-8 text-xl md:text-2xl font-light tracking-wide text-white/80">
                            NO HAY VOZ. SOLO IMPACTO.
                        </p>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
