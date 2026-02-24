import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Section } from './Section';

interface Release {
    title: string;
    subtitle: string;
    cover: string;
    link: string;
    aspect: string;
    width: string;
    offset: string;
}

const releases: Release[] = [
    {
        title: "GRAN MURALLA",
        subtitle: "Clark & Tigre Verde",
        cover: "/assets/gran-muralla.png",
        link: "https://www.youtube.com/watch?v=BvBN8x_SY8M",
        aspect: "4/3",
        width: "38%",
        offset: "mt-0",
    },
    {
        title: "AZUL PROFUNDO",
        subtitle: "Clark & Tigre Verde",
        cover: "/assets/azul-profundo.jpg",
        link: "https://www.youtube.com/watch?v=6mmNrXqCtag",
        aspect: "3/4",
        width: "22%",
        offset: "-mt-28",
    },
];

interface ReleasesSectionProps {
    isActive?: boolean;
}

export const ReleasesSection = ({ isActive = false }: ReleasesSectionProps) => {
    const ease = [0.22, 1, 0.36, 1] as const;
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <Section id="releases" className="bg-[#0a0a0a] h-screen flex flex-col overflow-hidden py-12 lg:py-0">
            <div className={`w-full h-full flex flex-col px-8 lg:px-16 ${isMobile ? 'py-4' : 'py-10 lg:py-14'}`}>

                {/* Images + Centered Hover Title */}
                <div className="flex-1 flex flex-col lg:flex-row lg:items-center relative">

                    {/* Desktop-only Centered hover title — letter by letter curtain */}
                    {!isMobile && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                            <AnimatePresence mode="wait">
                                {hoveredIndex !== null && (
                                    <motion.div
                                        key={hoveredIndex}
                                        className="flex items-end gap-0"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        {releases[hoveredIndex].title.split('').map((char, i) => (
                                            <div key={i} className="overflow-hidden leading-none">
                                                <motion.span
                                                    className="block text-[7vw] font-black uppercase tracking-tighter text-white leading-none"
                                                    style={{ display: char === ' ' ? 'inline-block' : 'block', width: char === ' ' ? '2vw' : undefined }}
                                                    variants={{
                                                        hidden: { y: '115%' },
                                                        visible: { y: '0%' },
                                                    }}
                                                    transition={{
                                                        duration: 0.45,
                                                        ease: [0.22, 1, 0.36, 1],
                                                        delay: i * 0.035,
                                                    }}
                                                >
                                                    {char === ' ' ? '\u00A0' : char}
                                                </motion.span>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}

                    {/* Images row / stack */}
                    <div className={`w-full ${isMobile ? 'flex flex-row justify-center gap-6 pb-4' : 'flex flex-col lg:flex-row justify-between lg:items-center gap-16 lg:gap-0'}`}>

                        {releases.map((release, index) => (
                            <div key={index} className={`relative flex flex-col ${isMobile ? 'w-[44vw] pt-4' : ''}`} style={{ width: isMobile ? '44vw' : release.width }}>
                                <motion.a
                                    href={release.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`relative overflow-hidden cursor-pointer block z-10 ${isMobile ? '' : release.offset}`}
                                    style={{ width: '100%', aspectRatio: isMobile ? '1/1' : release.aspect, maxHeight: isMobile ? '35vh' : '65vh' }}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                                    transition={{ duration: 0.9, ease, delay: 0.2 + index * 0.15 }}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                >
                                    <img
                                        src={release.cover}
                                        alt={release.title}
                                        loading="lazy"
                                        decoding="async"
                                        className={`w-full h-full object-cover transition-all duration-700 filter
                                            ${(isMobile || hoveredIndex === index) ? 'grayscale-0 scale-105' : 'grayscale scale-100'}`}
                                    />
                                    {/* Subtle dark overlay, fades on hover */}
                                    <div className={`absolute inset-0 transition-colors duration-500
                                        ${(isMobile || hoveredIndex === index) ? 'bg-black/10' : 'bg-black/30'}`} />
                                </motion.a>

                                {/* Mobile Title (Always visible) */}
                                {isMobile && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-3 px-1"
                                    >
                                        <h3 className="text-white text-xs font-black tracking-tighter uppercase leading-tight">{release.title}</h3>
                                        <p className="text-white/40 text-[7px] tracking-[0.2em] mt-1 uppercase font-medium">{release.subtitle}</p>
                                    </motion.div>
                                )}
                            </div>
                        ))}

                    </div>

                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-auto">
                    <motion.p
                        className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Releases ({releases.length})
                    </motion.p>
                    <motion.h2
                        className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        MÚSICA
                    </motion.h2>
                </div>

            </div>
        </Section>
    );
};
