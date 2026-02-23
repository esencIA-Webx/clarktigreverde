import { motion } from 'framer-motion';
import { Section } from './Section';
import { ExternalLink } from 'lucide-react';

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
    return (
        <Section id="differential" className="bg-black h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tighter"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    SHOWS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {shows.map((show, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.9 }}
                            transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                            className="group relative aspect-[3/4] bg-zinc-900 overflow-hidden cursor-pointer"
                        >
                            <motion.img
                                src={show.image}
                                alt={show.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-transparent text-stroke stroke-white group-hover:text-white transition-colors duration-300 uppercase">
                                        {show.title}
                                    </h3>
                                    <p className="text-zinc-400 group-hover:text-accent transition-colors text-sm tracking-widest">{show.year}</p>
                                </div>

                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink className="text-white w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
