import { motion } from 'framer-motion';
import { Section } from './Section';
import { VideoBackground } from './VideoBackground';

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
                            className="w-full lg:w-[85%] aspect-[3/4] bg-zinc-900 overflow-hidden shadow-2xl relative group/img"
                        >
                            <motion.img
                                src="/assets/HERNAN.png"
                                alt="Hernán - Experience"
                                className="w-full h-full object-cover transition-all duration-700"
                                style={{ filter: "saturate(0.6) brightness(0.9)" }}
                                whileHover={{
                                    filter: "saturate(1.1) brightness(1)",
                                    scale: 1.05
                                }}
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-700" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -30 }}
                            transition={{ duration: 1, delay: 0.4, ease: revealEase }}
                            className="w-full lg:w-[85%] aspect-[3/4] bg-zinc-900 overflow-hidden shadow-2xl relative group/img mb-8 lg:mb-0"
                        >
                            <motion.img
                                src="/assets/NICO.png"
                                alt="Nico - Experience"
                                className="w-full h-full object-cover transition-all duration-700"
                                style={{ filter: "saturate(0.6) brightness(0.9)" }}
                                whileHover={{
                                    filter: "saturate(1.1) brightness(1)",
                                    scale: 1.05
                                }}
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-700" />
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
                                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-4 block">nuestro mundo</span>
                                <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight uppercase">
                                    EL MUNDO DE <span className="italic font-light text-accent">CLARK & TIGRE VERDE</span>
                                </h2>
                            </div>

                            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed">
                                <p className="text-zinc-400">
                                    No somos solo un proyecto de música electrónica, sino también la materialización de un mundo que creamos para que sea habitado por todos los que nos rodean y aman la música. Somos dos artistas que nos conocemos desde hace mucho tiempo y que hemos transitado grandes aventuras y desafíos. Lo que comenzó como un juego, se materializó hacia fines de 2024 en algo que pronto mostró la pulsión de salir y crecer.
                                </p>

                                <p className="text-zinc-400">
                                    Para nosotros la música y lo visual no pueden ser pensadas por separado. Nuestra sonoridad profunda y enérgica se funde con una realidad paralela en la que pasan muchas cosas y todo está en constante cambio. Cada show en vivo tiene su lore y los flyers son el reflejo de la aventura en la que nos embarcamos en cada oportunidad.
                                </p>

                                <p className="text-zinc-300 font-medium">
                                    Sean bienvenidos a nuestro mundo... ¡El mundo de Clark & Tigre Verde!
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Details (4/12) */}
                    <div className="lg:col-span-4 flex flex-col gap-12 lg:pl-12 border-l border-white/10">
                        {/* Section 1: Intro */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: revealEase }}
                        >
                            <p className="text-sm md:text-base text-zinc-300 font-light leading-snug pt-4">
                                Nuestra propuesta trasciende el escenario, habitando plataformas donde la música y la estética visual convergen para expandir el universo de Clark & Tigre Verde.
                            </p>
                        </motion.div>

                        {/* Section 2: Social */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: revealEase }}
                        >
                            <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-6">Redes Sociales</h3>

                            <div className="space-y-6">
                                <div>
                                    <span className="text-[9px] uppercase tracking-widest text-zinc-600 block mb-3 font-bold">Instagram</span>
                                    <ul className="text-[11px] md:text-xs text-zinc-400 space-y-3 uppercase tracking-widest font-medium">
                                        <li>
                                            <a href="https://www.instagram.com/clarrk__/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">clarrk__</a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/tigreverde__/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">tigreverde__</a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-[9px] uppercase tracking-widest text-zinc-600 block mb-3 font-bold">YouTube</span>
                                    <ul className="text-[11px] md:text-xs text-zinc-400 space-y-3 uppercase tracking-widest font-medium">
                                        <li>
                                            <a href="https://www.youtube.com/@ClarkTigreVerde" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">official channel</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Section 3: Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: revealEase }}
                        >
                            <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-4">Contacto</h3>
                            <ul className="text-[11px] md:text-xs text-zinc-400 space-y-3 uppercase tracking-widest font-medium">
                                <li>
                                    <a href="https://wa.me/5491167872149" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Whatsapp / Contactar</a>
                                </li>
                                <li>
                                    <a href="mailto:clarkytigreverde@gmail.com" className="hover:text-accent transition-colors lowecase">clarkytigreverde@gmail.com</a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>
        </Section>
    );
};
