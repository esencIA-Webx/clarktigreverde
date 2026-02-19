import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from './Section';
import { Play } from 'lucide-react';
import { useRef } from 'react';

// Helper component for Masked Character Reveal
interface MaskedRevealLineProps {
    text: string;
    delay?: number;
    className?: string;
}

const MaskedRevealLine = ({ text, delay = 0, className }: MaskedRevealLineProps) => {
    // Character Variants
    const charVariants = {
        hidden: { y: "110%", opacity: 0 },
        visible: (i: number) => ({
            y: "0%",
            opacity: 1,
            transition: {
                duration: 1.0,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + (i * 0.05), // Stagger per character
            },
        }),
    };

    return (
        <span className="overflow-hidden relative inline-flex"> {/* Mask */}
            {/* Sr-only text for accessibility */}
            <span className="sr-only">{text}</span>

            {/* Split characters */}
            {text.split('').map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    className={`inline-block whitespace-pre ${className}`}
                    custom={index}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
};


export const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax & Scroll Effects
    const backgroundY = useTransform(scrollY, [0, 1000], [0, 100]);
    const metadataOpacity = useTransform(scrollY, [0, 200], [1, 0]);

    // Precise Cinematic Easing
    const revealEase = [0.22, 1, 0.36, 1] as const;

    return (
        <Section id="hero" className="flex items-center justify-center relative overflow-hidden h-screen w-full bg-black">

            {/* Cinematic Background with Curtain Reveal */}
            <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-black">
                {/* Curtain Reveal Wrapper */}
                <motion.div
                    className="w-full h-full relative"
                    initial={{ y: "100%" }} // Start completely pushed down
                    animate={{ y: "0%" }}   // Reveal up like a curtain
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.1 // Slight sync with text
                    }}
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />

                    <motion.div
                        className="w-full h-full will-change-transform"
                        style={{ y: backgroundY }}
                    >
                        <motion.img
                            src="/assets/DSC04120 - Nicolas Cordoba.png"
                            alt="Clark & Tigre Verde Portrait"
                            className="w-full h-full object-cover"
                            loading="eager"
                            // @ts-ignore
                            fetchpriority="high"
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.04 }}
                            transition={{ duration: 7, ease: "easeOut" }}
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
                            delay={0.2} // Sync: Starts slightly after background starts moving
                            // Reduced font size: 15vw -> 12vw
                            className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase select-none will-change-transform"
                        />
                    </div>

                    {/* Line 2: & */}
                    <div className="my-2 md:my-4 flex items-center justify-center" aria-hidden="true">
                        <MaskedRevealLine
                            text="&"
                            delay={0.5}
                            // Reduced font size: 5vw -> 4vw
                            className="text-[4vw] leading-[0.8] font-light italic text-white/90 tracking-tight uppercase select-none will-change-transform"
                        />
                    </div>

                    {/* Line 3: TIGRE VERDE */}
                    <div className="flex items-center justify-center" aria-hidden="true">
                        <MaskedRevealLine
                            text="TIGRE VERDE"
                            delay={0.7}
                            // Reduced font size: 15vw -> 12vw
                            className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase select-none will-change-transform"
                        />
                    </div>

                </div>
            </div>

            {/* Bottom Left - Play CTA */}
            <motion.div
                className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-30 flex items-center gap-4 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: revealEase }}
                whileHover={{ scale: 1.06 }}
            >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white/10 group-hover:backdrop-blur-md transition-all duration-300">
                    <Play className="w-3 h-3 md:w-4 md:h-4 text-white fill-white transition-colors ml-0.5" />
                </div>
                <motion.div
                    className="flex flex-col text-left"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.8, ease: revealEase }}
                >
                    <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-0.5">Play</span>
                    <span className="text-[9px] text-white/60 uppercase tracking-widest leading-none">The Experience</span>
                </motion.div>
            </motion.div>

            {/* Bottom Right - Info */}
            <motion.div
                className="absolute bottom-10 right-8 md:bottom-16 md:right-16 z-30 text-right hidden md:block"
                style={{ opacity: metadataOpacity }}
            >
                <div className="flex gap-16 text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
                    <motion.div
                        className="flex flex-col gap-1 items-end"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8, ease: revealEase }}
                    >
                        <span className="text-white">Creator</span>
                        <span className="text-white/50">Curator</span>
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-1 items-end"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8, ease: revealEase }}
                    >
                        <span className="text-white">Buenos Aires</span>
                        <span className="text-white/50">Argentina</span>
                    </motion.div>
                </div>
            </motion.div>

        </Section>
    );
};
