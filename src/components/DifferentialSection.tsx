import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section } from './Section';

const shows = [
    {
        title: "LIVE EXPERIENCE 01",
        year: "2024",
        image: "/assets/SHOW 1.png"
    },
    {
        title: "NEÓN TOUR",
        year: "2024",
        image: "/assets/SHOW 2.png"
    },
    {
        title: "VOLTAJE LIVE",
        year: "2023",
        image: "/assets/SHOW 3.png"
    },
    {
        title: "SISTEMA SESSION",
        year: "2023",
        image: "/assets/SHOW 4.png"
    }
];

interface DifferentialSectionProps {
    isActive?: boolean;
}

export const DifferentialSection = ({ isActive = false }: DifferentialSectionProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <Section id="differential" className="flex items-center justify-center relative overflow-hidden h-screen w-full bg-black">

            {/* Cinematic Background with Curtain Reveal (Mirrors Hero) */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
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

                    <motion.div className="w-full h-full will-change-transform">
                        <motion.img
                            src="/assets/FONDO SHOWS NEW.png"
                            alt="Shows Background"
                            className="w-full h-full object-cover"
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

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <motion.h2
                    className="text-[15vw] md:text-[12vw] font-black text-white mb-12 tracking-tighter leading-[0.8] uppercase"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 50 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                    SHOWS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {shows.map((show, index) => (
                        <div key={index} className="overflow-hidden">
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: isActive ? "0%" : "100%" }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.4 + (index * 0.1)
                                }}
                                whileHover={{
                                    scale: 1.04,
                                    boxShadow: "0 0 40px rgba(255,255,255,0.08)",
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative aspect-[3/4] bg-zinc-900 border border-white/5 overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={show.image}
                                    alt={show.title}
                                    className={`w-full h-full object-cover transition-all duration-700 filter
                                        ${hoveredIndex === index ? 'grayscale-0' : 'grayscale'}`}
                                />
                                {/* Subtle overlay consistent with Música section */}
                                <div className={`absolute inset-0 transition-colors duration-500
                                    ${hoveredIndex === index ? 'bg-black/10' : 'bg-black/30'}`} />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
