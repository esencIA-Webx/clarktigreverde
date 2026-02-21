import { motion } from 'framer-motion';
import { Section } from './Section';
import { Play } from 'lucide-react';
import { useRef } from 'react';

// Helper component for Masked Character Reveal
interface MaskedRevealLineProps {
    text: string;
    delay?: number;
    className?: string;
    animate?: any;
}

const MaskedRevealLine = ({ text, delay = 0, className, animate = "visible" }: MaskedRevealLineProps) => {
    // Character Variants
    const charVariants = {
        hidden: { y: "110%", opacity: 0 },
        visible: (i: number) => ({
            y: "0%",
            opacity: 1,
            transition: {
                duration: 1.0,
                ease: [0.22, 1, 0.36, 1] as any,
                delay: delay + (i * 0.05), // Stagger per character
            },
        }),
    };

    return (
        <span className="overflow-hidden relative inline-flex"> {/* Mask */}
            {/* Sr-only text for accessibility */}
            <span className="sr-only">{text}</span>

            {/* Split characters */}
            <motion.div
                variants={{}} // Empty variants for the container to pass down animate state
                animate={animate}
                className="flex"
            >
                {text.split('').map((char, index) => (
                    <motion.span
                        key={`${char}-${index}`}
                        className={`inline-block whitespace-pre ${className}`}
                        custom={index}
                        variants={charVariants}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        </span>
    );
};


interface HeroSectionProps {
    isActive?: boolean;
}

export const HeroSection = ({ isActive = true }: HeroSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Precise Cinematic Easing
    const revealEase = [0.22, 1, 0.36, 1] as const;

    return (
        <Section id="hero" className="flex items-center justify-center relative overflow-hidden h-screen w-full bg-black">

            {/* Cinematic Background with Curtain Reveal */}
            <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-black">
                {/* Curtain Reveal Wrapper */}
                <motion.div
                    className="w-full h-full relative"
                    initial={{ y: "100%" }}
                    animate={{ y: isActive ? "0%" : "100%" }}
                    transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.3
                    }}
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />

                    <motion.div
                        className="w-full h-full will-change-transform"
                    >
                        <motion.img
                            src="/assets/DSC04120 - Nicolas Cordoba.png"
                            alt="Clark & Tigre Verde Portrait"
                            className="w-full h-full object-cover"
                            loading="eager"
                            // @ts-ignore
                            fetchpriority="high"
                            initial={{ scale: 1.1, filter: "blur(10px)" }}
                            animate={{
                                scale: isActive ? 1 : 1.1,
                                filter: isActive ? "blur(0px)" : "blur(10px)"
                            }}
                            transition={{
                                duration: 2.5,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.2
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Masked Reveal Typography */}
            <div className="relative z-20 w-full h-full flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center justify-center text-center text-white mix-blend-difference">

                    {/* Visual Title Structure - using divs for layout and aria-hidden */}
                    {/* Separate h1 for SEO/Accessibility */}
                    <h1 className="sr-only">CLARK & TIGRE VERDE</h1>

                    {/* Line 1: CLARK */}
                    <div className="flex items-center justify-center" aria-hidden="true">
                        <MaskedRevealLine
                            text="CLARK"
                            delay={0.6}
                            animate={isActive ? "visible" : "hidden"}
                            className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase select-none will-change-transform"
                        />
                    </div>

                    {/* Line 2: & */}
                    <div className="my-2 md:my-4 flex items-center justify-center" aria-hidden="true">
                        <MaskedRevealLine
                            text="&"
                            delay={0.9}
                            animate={isActive ? "visible" : "hidden"}
                            className="text-[4vw] leading-[0.8] font-light italic text-white/90 tracking-tight uppercase select-none will-change-transform"
                        />
                    </div>

                    {/* Line 3: TIGRE VERDE */}
                    <div className="flex items-center justify-center" aria-hidden="true">
                        <MaskedRevealLine
                            text="TIGRE VERDE"
                            delay={1.1}
                            animate={isActive ? "visible" : "hidden"}
                            className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase select-none will-change-transform"
                        />
                    </div>

                </div>
            </div>

            {/* Bottom Left - Play CTA */}
            <motion.div
                className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-30 flex items-center gap-4 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.94 }}
                transition={{ delay: 1.6, duration: 0.8, ease: revealEase }}
                whileHover={{ scale: 1.06 }}
            >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white/10 group-hover:backdrop-blur-md transition-all duration-300">
                    <Play className="w-3 h-3 md:w-4 md:h-4 text-white fill-white transition-colors ml-0.5" />
                </div>
                <motion.div
                    className="flex flex-col text-left"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                    transition={{ delay: 1.7, duration: 0.8, ease: revealEase }}
                >
                    <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-0.5">Play</span>
                    <span className="text-[9px] text-white/60 uppercase tracking-widest leading-none">The Experience</span>
                </motion.div>
            </motion.div>

            {/* Bottom Right - Info */}
            <motion.div
                className="absolute bottom-10 right-8 md:bottom-16 md:right-16 z-30 text-right hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
            >
                <div className="flex gap-16 text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
                    <motion.div
                        className="flex flex-col gap-1 items-end"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                        transition={{ delay: 1.9, duration: 0.8, ease: revealEase }}
                    >
                        <span className="text-white">Creator</span>
                        <span className="text-white/50">Curator</span>
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-1 items-end"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                        transition={{ delay: 2.0, duration: 0.8, ease: revealEase }}
                    >
                        <span className="text-white">Buenos Aires</span>
                        <span className="text-white/50">Argentina</span>
                    </motion.div>
                </div>
            </motion.div>

        </Section>
    );
};
