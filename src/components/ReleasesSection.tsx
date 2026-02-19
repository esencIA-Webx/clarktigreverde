import { motion } from 'framer-motion';
import { Section } from './Section';
import { ExternalLink } from 'lucide-react';

const releases = [
    {
        title: "VOLTAJE",
        year: "2024",
        cover: "/assets/cover-voltage.jpg", // Placeholder
        spotify: "#",
        youtube: "#"
    },
    {
        title: "NEÓN CRUDO",
        year: "2023",
        cover: "/assets/cover-neon.jpg", // Placeholder
        spotify: "#",
        youtube: "#"
    },
    {
        title: "SISTEMA",
        year: "2023",
        cover: "/assets/cover-system.jpg", // Placeholder
        spotify: "#",
        youtube: "#"
    }
];

export const ReleasesSection = () => {
    return (
        <Section id="releases" className="bg-zinc-950 py-32">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tighter"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    DISCOGRAFÍA
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {releases.map((release, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-square bg-zinc-900 overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-500" />
                            {/* Image would go here */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-3xl font-bold text-transparent text-stroke stroke-white group-hover:text-white transition-colors duration-300 uppercase">
                                        {release.title}
                                    </h3>
                                    <p className="text-zinc-500 group-hover:text-accent transition-colors">{release.year}</p>
                                </div>

                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink className="text-white w-6 h-6" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
