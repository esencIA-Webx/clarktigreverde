import { motion } from 'framer-motion';
import { Section } from './Section';

interface ConceptSectionProps {
    isActive?: boolean;
}

export const ConceptSection = ({ isActive = false }: ConceptSectionProps) => {
    return (
        <Section id="concept" className="bg-zinc-900 flex items-center justify-center h-screen overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden relative">
                        {/* Placeholder for "Planos sincronizados de ejecución instrumental" */}
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                            <span className="text-sm uppercase tracking-widest">Instrumental Focus</span>
                        </div>
                        <video
                            src="/assets/instrumental-loop.mp4"
                            className="w-full h-full object-cover opacity-80"
                            autoPlay muted loop playsInline
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 50 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6"
                >
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                        HABLAMOS CON <span className="text-accent">INSTRUMENTOS</span>
                    </h3>
                    <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                        Sin letras que dicten lo que debes sentir.
                        <br />
                        La batería es el pulso. El teclado es la atmósfera.
                        <br />
                        Tu cuerpo completa la ecuación.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};
