import { motion } from 'framer-motion';
import { Section } from './Section';
import { Play } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

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
                initial="hidden"
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
    onPlay?: () => void;
}

export const HeroSection = ({ isActive = true, onPlay }: HeroSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
                    <div className="absolute inset-0 bg-black/50 z-10" />

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
                            decoding="async"
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
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none">
                <div
                    className="flex flex-col items-center justify-center text-center text-white mix-blend-difference"
                    style={{ filter: 'drop-shadow(0 0 50px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(0,0,0,0.4))' }}
                >

                    {/* Visual Title Structure - using divs for layout and aria-hidden */}
                    {/* Separate h1 for SEO/Accessibility */}
                    <h1 className="sr-only">CLARK & TIGRE VERDE</h1>

                    {/* Line 1: CLARK */}
                    <div className="flex items-center justify-center" aria-hidden="true">
                        <MaskedRevealLine
                            text="CLARK"
                            delay={0.6}
                            animate={isActive ? "visible" : "hidden"}
                            className="text-[16vw] lg:text-[10vw] leading-[0.8] font-black tracking-tighter uppercase select-none will-change-transform"
                        />
                    </div>

                    {/* Line 2: & */}
                    <div className="my-3 lg:my-3 flex items-center justify-center" aria-hidden="true">
                        <MaskedRevealLine
                            text="&"
                            delay={0.9}
                            animate={isActive ? "visible" : "hidden"}
                            className="text-[6vw] lg:text-[3.5vw] leading-[0.8] font-light italic text-white/90 tracking-tight uppercase select-none will-change-transform"
                        />
                    </div>

                    {/* Line 3: TIGRE VERDE */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-[0.5em]" aria-hidden="true">
                        <MaskedRevealLine
                            text="TIGRE"
                            delay={1.1}
                            animate={isActive ? "visible" : "hidden"}
                            className="text-[16vw] lg:text-[10vw] leading-[0.8] font-black tracking-tighter uppercase select-none will-change-transform"
                        />
                        <MaskedRevealLine
                            text="VERDE"
                            delay={1.4}
                            animate={isActive ? "visible" : "hidden"}
                            className="text-[16vw] lg:text-[10vw] leading-[0.8] font-black tracking-tighter uppercase select-none will-change-transform"
                        />
                    </div>

                </div>

                {/* Mobile Play CTA - Centered below TIGRE VERDE */}
                {isMobile && (
                    <motion.div
                        className="mt-12 flex flex-col items-center gap-5 group cursor-pointer pointer-events-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                        transition={{ delay: 1.8, duration: 0.8, ease: revealEase }}
                        onClick={onPlay}
                    >
                        <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm group-active:scale-95 transition-all">
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-1">Play</span>
                            <span className="text-[10px] text-white/60 uppercase tracking-[0.2em] leading-none">VIVÍ LA EXPERIENCIA</span>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Desktop Play CTA */}
            {!isMobile && (
                <motion.div
                    className="absolute bottom-12 left-12 z-30 flex items-center gap-6 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.94 }}
                    transition={{ delay: 1.6, duration: 0.8, ease: revealEase }}
                    whileHover={{ scale: 1.05 }}
                    onClick={onPlay}
                >
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent group-hover:backdrop-blur-sm transition-all duration-300">
                        <Play className="w-5 h-5 text-white group-hover:text-accent group-hover:fill-accent transition-colors ml-1" />
                    </div>
                    <motion.div
                        className="flex flex-col text-left"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                        transition={{ delay: 1.7, duration: 0.8, ease: revealEase }}
                    >
                        <span className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-1 group-hover:text-accent transition-colors">Play</span>
                        <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] leading-none group-hover:text-white transition-colors">VIVÍ LA EXPERIENCIA</span>
                    </motion.div>
                </motion.div>
            )}

            {/* Bottom Info - Links & Location */}
            <motion.div
                className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-12 z-30 w-full lg:w-auto px-8 lg:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
            >
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-end gap-6 lg:gap-16 text-[9px] md:text-xs font-medium tracking-[0.2em] uppercase pointer-events-auto">
                    {/* Social links */}
                    <div className="flex flex-row lg:flex-col gap-8 lg:gap-2 items-center lg:items-end">
                        <motion.a
                            href="https://www.instagram.com/clarrk__/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-accent transition-colors"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
                            transition={{ delay: 1.9, duration: 0.8, ease: revealEase }}
                        >
                            clarrk__
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/tigreverde__/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-accent transition-colors"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
                            transition={{ delay: 2.0, duration: 0.8, ease: revealEase }}
                        >
                            tigreverde__
                        </motion.a>
                    </div>

                    {/* Location */}
                    <motion.div
                        className="flex flex-row lg:flex-col gap-2 lg:gap-1 items-center lg:items-end text-white/30"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
                        transition={{ delay: 2.1, duration: 0.8, ease: revealEase }}
                    >
                        <span className="text-white/60">Buenos Aires,</span>
                        <span>Argentina</span>
                    </motion.div>
                </div>
            </motion.div>

        </Section>
    );
};
