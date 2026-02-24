import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
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

    return (
        <Section id="releases" className="bg-[#0a0a0a] h-screen flex flex-col overflow-hidden">
            <div className="w-full h-full flex flex-col px-8 md:px-16 py-10 md:py-14">

                {/* Images + Centered Hover Title */}
                <div className="flex-1 flex items-center relative">

                    {/* Centered hover title — letter by letter curtain */}
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

                    {/* Images row */}
                    <div className="w-full flex justify-between items-center">

                        {releases.map((release, index) => (
                            <motion.a
                                key={index}
                                href={release.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative overflow-hidden cursor-pointer block z-10 ${release.offset}`}
                                style={{ width: release.width, aspectRatio: release.aspect, maxHeight: '65vh' }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                                transition={{ duration: 0.9, ease, delay: 0.2 + index * 0.15 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                <img
                                    src={release.cover}
                                    alt={release.title}
                                    className={`w-full h-full object-cover transition-all duration-700 filter
                                        ${hoveredIndex === index ? 'grayscale-0 scale-105' : 'grayscale scale-100'}`}
                                />
                                {/* Subtle dark overlay, fades on hover */}
                                <div className={`absolute inset-0 transition-colors duration-500
                                    ${hoveredIndex === index ? 'bg-black/10' : 'bg-black/30'}`} />
                            </motion.a>
                        ))}

                    </div>
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-8 md:mt-10">
                    <motion.p
                        className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Releases (2)
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
