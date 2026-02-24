import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const navItems = [
    { name: 'HOME', id: 'hero' },
    { name: 'EXPERIENCIA', id: 'experience' },
    { name: 'SHOWS', id: 'differential' },
    { name: 'MÚSICA', id: 'releases' },
];

interface NavigationProps {
    activeSection: string;
    onSectionChange: (id: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Precise Cinematic Easing (Matches Hero)
    const revealEase = [0.22, 1, 0.36, 1] as const;

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 py-6 md:px-12 md:py-8 pointer-events-none">
                {/* Logo - Top Left */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="pointer-events-auto mix-blend-difference"
                >
                    <a
                        href="#hero"
                        className="block group"
                        onClick={(e) => {
                            e.preventDefault();
                            onSectionChange('hero');
                        }}
                    >
                        {/* New Logo */}
                        <motion.img
                            src="/logo.png"
                            alt="Clark Tigre Logo"
                            className="w-12 h-12 aspect-square object-contain bg-white rounded-lg p-1"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        />
                    </a>
                </motion.div>

                {/* Menu Trigger - Top Right */}
                <motion.button
                    onClick={() => setIsOpen(true)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="pointer-events-auto flex flex-col items-end group gap-1 mix-blend-difference"
                >
                    <span className="text-[10px] uppercase tracking-widest text-white/70 group-hover:text-accent transition-colors font-medium">Menu</span>
                    <div className="space-y-1.5 local-menu-hover">
                        <span className="block w-8 h-[2px] bg-white group-hover:bg-accent group-hover:w-6 transition-all duration-300 ml-auto" />
                        <span className="block w-5 h-[2px] bg-white group-hover:bg-accent group-hover:w-8 transition-all duration-300 ml-auto" />
                    </div>
                </motion.button>
            </nav>

            {/* Cinematic Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex text-white overflow-hidden"
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{
                            duration: 1.0,
                            ease: revealEase,
                            // When closing, play slightly faster
                        }}
                    >
                        {/* Dark Background Wrapper */}
                        <div className="absolute inset-0 bg-[#0a0a0a] w-full h-full" />

                        {/* Content Container (Grid) */}
                        <div className="relative w-full h-full flex flex-col md:flex-row">

                            {/* Left Column: Image (Cinematic View - Floating) */}
                            <div className="hidden md:flex w-1/2 h-full relative items-center justify-center p-12 bg-[#0a0a0a] overflow-hidden">
                                {/* Background subtle gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />

                                <motion.div
                                    className="relative w-[70%] aspect-[3/4] max-h-[80vh] overflow-hidden shadow-2xl group/img"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <motion.img
                                        src="/assets/foto perfil.jpg"
                                        alt="Menu Aesthetic"
                                        className="w-full h-full object-cover transition-all duration-700"
                                        style={{ filter: "saturate(0.6) brightness(0.9)" }}
                                        whileHover={{
                                            filter: "saturate(1.1) brightness(1)",
                                            scale: 1.05
                                        }}
                                    />
                                    {/* Subtle Overlay to match the theme */}
                                    <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-700" />
                                </motion.div>
                            </div>

                            {/* Right Column: Navigation Links & Info */}
                            <div className="w-full md:w-1/2 h-full relative flex flex-col justify-between p-8 md:p-16 bg-[#0a0a0a]">

                                {/* Close Button */}
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-[10px] uppercase tracking-widest hover:text-white/60 transition-colors flex items-center gap-2"
                                    >
                                        Close <X size={14} />
                                    </button>
                                </div>

                                {/* Main Navigation Links */}
                                <div className="flex flex-col gap-4 md:gap-6 mt-12 md:mt-0">
                                    {navItems.map((item, i) => (
                                        <div key={item.name} className="overflow-hidden">
                                            <motion.a
                                                href={`#${item.id}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    onSectionChange(item.id);
                                                    setIsOpen(false);
                                                }}
                                                className={`block text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none transition-colors ${activeSection === item.id ? 'text-accent' : 'text-white hover:text-white/50'
                                                    }`}
                                                initial={{ y: "100%" }}
                                                animate={{ y: "0%" }}
                                                transition={{
                                                    delay: 0.3 + (i * 0.1),
                                                    duration: 0.8,
                                                    ease: revealEase
                                                }}
                                            >
                                                {item.name}
                                            </motion.a>
                                        </div>
                                    ))}
                                </div>

                                {/* Menu Footer / Info */}
                                <div className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-widest text-white/50 mt-12 md:mt-0">

                                    {/* Socials */}
                                    <div className="flex flex-col gap-4">
                                        <span className="text-white mb-2">Follow</span>
                                        <a href="https://www.instagram.com/clarrk__/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">clarrk__</a>
                                        <a href="https://www.instagram.com/tigreverde__/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">tigreverde__</a>
                                        <a href="https://www.youtube.com/@ClarkTigreVerde" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">youtube</a>
                                    </div>

                                    {/* Location / Contact */}
                                    <div className="flex flex-col gap-4">
                                        <span className="text-white mb-2">Whatsapp</span>
                                        <a href="https://wa.me/5491167872149" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
                                            Contactar <ArrowRight size={10} />
                                        </a>
                                        <div className="mt-4">
                                            <p className="text-white">Buenos Aires</p>
                                            <p>Argentina</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
