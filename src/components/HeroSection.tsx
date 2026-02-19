import { motion } from 'framer-motion';
import { Section } from './Section';
import { VideoBackground } from './VideoBackground';
import { Play } from 'lucide-react';

export const HeroSection = () => {
    return (
        <Section id="hero" className="flex items-center justify-center relative overflow-hidden h-screen w-full">
            <VideoBackground
                src="/assets/hero-loop.mp4"
                poster="/assets/hero-poster.jpg"
                className="opacity-50"
            />

            {/* Massive Centered Typography */}
            <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
                <motion.h1
                    className="text-[18vw] leading-[0.8] font-black text-center text-white tracking-tighter uppercase select-none mix-blend-exclusion"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    CLARK<span className="hidden lg:inline">&</span><br className="lg:hidden" />TIGRE
                </motion.h1>
            </div>

            {/* Absolute positioning for 'VERDE' or spacing adjustments may be needed based on real font */}

            {/* Bottom Left - Play CTA */}
            <motion.div
                className="absolute bottom-10 left-8 md:bottom-16 md:left-16 z-20 flex items-center gap-6 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white transition-all duration-300 backdrop-blur-sm">
                    <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white group-hover:text-black group-hover:fill-black transition-colors ml-1" />
                </div>
                <div className="flex flex-col text-left">
                    <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.2em] mb-1">Play</span>
                    <span className="text-[10px] text-white/60 uppercase tracking-widest">The Experience</span>
                </div>
            </motion.div>

            {/* Bottom Right - Info */}
            <motion.div
                className="absolute bottom-10 right-8 md:bottom-16 md:right-16 z-20 text-right hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <div className="flex gap-16 text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
                    <div className="flex flex-col gap-1 items-end">
                        <span className="text-white">Creator</span>
                        <span className="text-white/50">Curator</span>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                        <span className="text-white">Buenos Aires</span>
                        <span className="text-white/50">Argentina</span>
                    </div>
                </div>
            </motion.div>

        </Section>
    );
};
