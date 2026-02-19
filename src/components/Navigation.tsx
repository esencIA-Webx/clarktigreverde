import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Experiencia', href: '#experience' },
    { name: 'Concepto', href: '#concept' },
    { name: 'Diferencial', href: '#differential' },
    { name: 'Releases', href: '#releases' },
];

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 py-6 md:px-12 md:py-8 pointer-events-none"
            >
                {/* Logo - Top Left */}
                <a href="#" className="pointer-events-auto block">
                    {/* Abstract Logo Placeholder similar to reference */}
                    <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                        <div className="w-4 h-4 bg-black rounded-full" />
                    </div>
                </a>

                {/* Menu Trigger - Top Right */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="pointer-events-auto flex flex-col items-end group gap-1"
                >
                    <span className="text-[10px] uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">Menu</span>
                    <div className="space-y-1.5">
                        <span className="block w-8 h-[2px] bg-white group-hover:w-6 transition-all duration-300 ml-auto" />
                        <span className="block w-5 h-[2px] bg-white group-hover:w-8 transition-all duration-300 ml-auto" />
                    </div>
                </button>
            </motion.nav>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-12 text-white hover:text-accent transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <div className="space-y-8 text-center">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="block text-4xl md:text-6xl font-bold text-white hover:text-accent transition-colors tracking-tighter uppercase"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
