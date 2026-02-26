import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Section } from './Section';
import { VideoBackground } from './VideoBackground';

interface PhysicalExperienceSectionProps {
    isActive?: boolean;
}

export const PhysicalExperienceSection = ({ isActive = false }: PhysicalExperienceSectionProps) => {
    // Precise Cinematic Easing
    const revealEase = [0.22, 1, 0.36, 1] as const;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <Section id="experience" className="relative h-screen lg:h-screen bg-black overflow-hidden flex items-center pt-28 pb-12 lg:py-0">
            {/* Background Video */}
            <VideoBackground
                src="/assets/experience-loop.mp4"
                className="opacity-20 pointer-events-none"
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-white w-full max-h-[90vh]">

                    {/* Stacked Images (3/12) - Left on Desktop, Hidden on Mobile */}
                    <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 lg:gap-6 items-center order-3 lg:order-1 mt-6 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 20 : 0 }}
                            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : (isMobile ? 0 : -30), y: isActive ? 0 : (isMobile ? 20 : 0) }}
                            transition={{ duration: 1, delay: 0.2, ease: revealEase }}
                            className="flex-1 lg:w-4/5 aspect-[3/4] bg-zinc-900 overflow-hidden shadow-2xl relative group/img"
                        >
                            <motion.img
                                src="/assets/HERNAN.webp"
                                alt="Hernán - Experience"
                                className="w-full h-full object-cover transition-all duration-700"
                                loading="lazy"
                                decoding="async"
                                style={{ filter: isMobile ? "saturate(1) brightness(1)" : "saturate(0.6) brightness(0.9)" }}
                                whileHover={isMobile ? {} : {
                                    filter: "saturate(1.1) brightness(1)",
                                    scale: 1.05
                                }}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 20 : 0 }}
                            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : (isMobile ? 0 : -30), y: isActive ? 0 : (isMobile ? 20 : 0) }}
                            transition={{ duration: 1, delay: 0.4, ease: revealEase }}
                            className="flex-1 lg:w-4/5 aspect-[3/4] bg-zinc-900 overflow-hidden shadow-2xl relative group/img"
                        >
                            <motion.img
                                src="/assets/NICO.webp"
                                alt="Nico - Experience"
                                className="w-full h-full object-cover transition-all duration-700"
                                loading="lazy"
                                decoding="async"
                                style={{ filter: isMobile ? "saturate(1) brightness(1)" : "saturate(0.6) brightness(0.9)" }}
                                whileHover={isMobile ? {} : {
                                    filter: "saturate(1.1) brightness(1)",
                                    scale: 1.05
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Main Text (5/12) - Center on Desktop */}
                    <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                            transition={{ duration: 1, delay: 0.3, ease: revealEase }}
                            className="space-y-4 lg:space-y-6"
                        >
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.4em] text-accent font-bold mb-3 block">nuestro mundo</span>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[1.1] tracking-tight uppercase">
                                    EL MUNDO DE <span className="italic font-light block lg:inline-block">
                                        <span className="text-blue-500">CLARK</span> <span className="text-white">&</span> <span className="text-accent">TIGRE VERDE</span>
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-3 lg:space-y-4 text-sm md:text-base font-light leading-relaxed">
                                <p className="text-zinc-400">
                                    No somos solo un proyecto de música electrónica, sino también la materialización de un mundo que creamos para que sea habitado por todos los que nos rodean y aman la música. Somos dos artistas que nos conocemos desde hace mucho tiempo y que hemos transitado grandes aventuras y desafíos. Lo que comenzó como un juego, se materializó hacia fines de 2024 en algo que pronto mostró la pulsión de salir y crecer.
                                </p>

                                <p className="text-zinc-400">
                                    Para nosotros la música y lo visual no pueden ser pensadas por separado. Nuestra sonoridad profunda y enérgica se funde con una realidad paralela en la que pasan muchas cosas y todo está en constante cambio. Cada show en vivo tiene su lore y los flyers son el reflejo de la aventura en la que nos embarcamos en cada oportunidad.
                                </p>

                                <p className="text-zinc-300 font-medium pt-1">
                                    Sean bienvenidos a nuestro mundo... ¡El mundo de Clark & Tigre Verde!
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Details (4/12) - Right on Desktop */}
                    <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8 lg:pl-10 lg:border-l border-white/10 order-2 lg:order-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: revealEase }}
                        >
                            <p className="text-[11px] md:text-sm text-zinc-300 font-light leading-snug">
                                Nuestra propuesta trasciende el escenario, habitando plataformas donde la música y la estética visual convergen para expandir el universo de Clark & Tigre Verde.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: revealEase }}
                        >
                            <h3 className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">Redes Sociales</h3>

                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                                <div>
                                    <span className="text-[8px] uppercase tracking-widest text-zinc-600 block mb-2 font-bold">Instagram</span>
                                    <ul className="text-[10px] text-zinc-400 space-y-2 uppercase tracking-widest font-medium">
                                        <li>
                                            <a href="https://www.instagram.com/clarrk__/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">clarrk__</a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/tigreverde__/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">tigreverde__</a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-[8px] uppercase tracking-widest text-zinc-600 block mb-2 font-bold">YouTube</span>
                                    <ul className="text-[10px] text-zinc-400 space-y-2 uppercase tracking-widest font-medium">
                                        <li>
                                            <a href="https://www.youtube.com/@ClarkTigreVerde" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">official channel</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: revealEase }}
                        >
                            <h3 className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-3">Contacto</h3>
                            <ul className="text-[10px] text-zinc-400 space-y-2 uppercase tracking-widest font-medium">
                                <li>
                                    <a href="https://wa.me/5491167872149" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Whatsapp / Contactar</a>
                                </li>
                                <li>
                                    <a href="mailto:clarkytigreverde@gmail.com" className="hover:text-accent transition-colors lowercase">clarkytigreverde@gmail.com</a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>
        </Section>
    );
};
