import { motion } from 'framer-motion';
import { Section } from './Section';
import { Zap, Activity, Volume2 } from 'lucide-react';

const differentials = [
    {
        icon: Activity,
        title: "PERFORMANCE FÍSICA",
        desc: "Más que un concierto, un entrenamiento auditivo."
    },
    {
        icon: Zap,
        title: "ENERGÍA CRUDA",
        desc: "Sin pausas. Sin discursos. Solo tracción."
    },
    {
        icon: Volume2,
        title: "SONIDO INMERSIVO",
        desc: "Diseño sonoro que envuelve y golpea."
    }
];

interface DifferentialSectionProps {
    isActive?: boolean;
}

export const DifferentialSection = ({ isActive = false }: DifferentialSectionProps) => {
    return (
        <Section id="differential" className="bg-black h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {differentials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                            transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                            className="group p-8 border border-white/10 hover:border-accent/50 transition-colors bg-white/5 backdrop-blur-sm"
                        >
                            <item.icon className="w-10 h-10 text-accent mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                            <h4 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h4>
                            <p className="text-sm text-zinc-400 font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
