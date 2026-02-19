import { motion } from 'framer-motion';
import { Section } from './Section';
import { VideoBackground } from './VideoBackground';

export const FinalCTA = () => {
    return (
        <Section id="listen" className="flex items-center justify-center text-center">
            <VideoBackground
                src="/assets/outro-loop.mp4"
                className="opacity-40"
            />

            <div className="relative z-10 container mx-auto px-6 max-w-4xl">
                <motion.h2
                    className="text-5xl md:text-8xl font-bold text-white mb-12 tracking-tighter"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    SIENTE EL <span className="text-accent">IMPACTO</span>
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a
                        href="#"
                        className="px-8 py-4 bg-accent text-black font-bold text-xl tracking-widest hover:bg-white transition-colors uppercase"
                    >
                        Spotify
                    </a>
                    <a
                        href="#"
                        className="px-8 py-4 border border-white text-white font-bold text-xl tracking-widest hover:bg-white hover:text-black transition-colors uppercase"
                    >
                        Apple Music
                    </a>
                    <a
                        href="#"
                        className="px-8 py-4 border border-white text-white font-bold text-xl tracking-widest hover:bg-white hover:text-black transition-colors uppercase"
                    >
                        YouTube
                    </a>
                </div>
            </div>
        </Section>
    );
};
