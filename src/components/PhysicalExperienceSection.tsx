import { motion } from 'framer-motion';
import { Section } from './Section';
import { VideoBackground } from './VideoBackground';
import { OpticLensImage } from './OpticLensImage';

interface PhysicalExperienceSectionProps {
    isActive?: boolean;
}

export const PhysicalExperienceSection = ({ isActive = false }: PhysicalExperienceSectionProps) => {
    // Precise Cinematic Easing
    const revealEase = [0.22, 1, 0.36, 1] as const;

    return (
        <Section id="experience" className="relative min-h-screen bg-black overflow-hidden flex items-center">
            {/* Background Video */}
            <VideoBackground
                src="/assets/experience-loop.mp4"
                className="opacity-20 pointer-events-none"
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-white">

                    {/* Left Column: Stacked Images (4/12) */}
                    <div className="lg:col-span-3 flex flex-col gap-10 h-full items-center pb-12 lg:pb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -30 }}
                            transition={{ duration: 1, delay: 0.2, ease: revealEase }}
                            className="w-full lg:w-[85%] aspect-[3/4] bg-zinc-900 overflow-visible"
                        >
                            <OpticLensImage
                                src="/assets/HERNAN.png"
                                alt="Hernán - Experience"
                                intensity={0.4}
                                className="w-full h-full shadow-2xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -30 }}
                            transition={{ duration: 1, delay: 0.4, ease: revealEase }}
                            className="w-full lg:w-[85%] aspect-[3/4] bg-zinc-900 overflow-visible mb-8 lg:mb-0"
                        >
                            <OpticLensImage
                                src="/assets/NICO.png"
                                alt="Nico - Experience"
                                intensity={0.4}
                                className="w-full h-full shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Center Column: Main Text (5/12) */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                            transition={{ duration: 1, delay: 0.3, ease: revealEase }}
                            className="space-y-8"
                        >
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-4 block">Manifesto / Vision</span>
                                <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                                    CLARK & TIGRE VERDE: La arquitectura del <span className="italic font-light">silencio eléctrico</span>.
                                </h2>
                            </div>

                            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed">
                                <p className="text-zinc-400">
                                    No somos simplemente un dúo de música electrónica; somos una exploración de la tracción física. El proyecto Clark & Tigre Verde surge como una respuesta a la saturación semántica contemporánea. En un mundo donde todo está explicado y etiquetado, nosotros elegimos la abstracción.
                                </p>

                                <p className="text-zinc-400">
                                    Nuestra propuesta se basa en planos sincronizados de ejecución instrumental. La batería no solo marca el tiempo, es el pulso cardíaco de la performance. Los sintetizadores no son melodías, son atmósferas densas que envuelven el espacio, creando una experiencia inmersiva donde el espectador no solo escucha, sino que habita el sonido.
                                </p>

                                <p className="text-zinc-300 italic border-l-2 border-accent pl-6 py-2">
                                    "La energía no se explica, se transmite. Buscamos el impacto crudo que precede a la palabra."
                                </p>

                                <p className="text-zinc-500">
                                    Cada sesión es un organismo vivo que muta según la acústica y la energía del entorno. Desde las salas experimentales de Buenos Aires hasta los escenarios tecnificados de Europa, nuestra misión permanece constante: empujar los límites de la performance física y el diseño sonoro de vanguardia.
                                </p>

                                <p className="text-zinc-500">
                                    Hoy, Clark & Tigre Verde evoluciona hacia una plataforma curatorial, colaborando con artistas visuales y diseñadores para crear mundos donde la tecnología y el instinto humano se encuentran en perfecta sincronía.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Details (4/12) */}
                    <div className="lg:col-span-4 flex flex-col gap-12 lg:pl-12 border-l border-white/10">
                        {/* Section 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: revealEase }}
                        >
                            <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-4">Core Focus</h3>
                            <p className="text-sm md:text-base text-zinc-300 font-light leading-snug">
                                Nuestra marca encarna el estilo de vida de los creadores en la comunidad creativa contemporánea, enfocándose en la tracción y el impacto visual.
                            </p>
                        </motion.div>

                        {/* Section 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: revealEase }}
                        >
                            <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-4">Press Releases</h3>
                            <ul className="text-[11px] md:text-xs text-zinc-400 space-y-3 uppercase tracking-widest font-medium">
                                <li className="hover:text-accent transition-colors cursor-pointer">Electronic Beats</li>
                                <li className="hover:text-accent transition-colors cursor-pointer">Rolling Stone Ar</li>
                                <li className="hover:text-accent transition-colors cursor-pointer">Indie Hoy</li>
                                <li className="hover:text-accent transition-colors cursor-pointer">Página 12</li>
                            </ul>
                        </motion.div>

                        {/* Section 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: revealEase }}
                        >
                            <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-4">Recent Projects</h3>
                            <ul className="text-[11px] md:text-xs text-zinc-400 space-y-3 uppercase tracking-widest font-medium">
                                <li className="hover:text-accent transition-colors cursor-pointer">MUTEK BA 2024</li>
                                <li className="hover:text-accent transition-colors cursor-pointer">CASSETTE LIVE ROOM</li>
                                <li className="hover:text-accent transition-colors cursor-pointer">EXPERIMENTAL LOOP SESSION</li>
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>
        </Section>
    );
};
