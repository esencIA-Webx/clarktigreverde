import { motion } from 'framer-motion';
import { Section } from './Section';

export const ConceptSection = () => {
    return (
        <Section id="concept" className="bg-zinc-900 flex items-center justify-center py-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
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
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
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
