import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface OpticLensImageProps {
    src: string;
    alt: string;
    className?: string; // For outer container sizing
}

export const OpticLensImage = ({ src, alt, className = "" }: OpticLensImageProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Target Values (Where we want to go)
    const targetX = useRef(0);
    const targetY = useRef(0);

    // Current Values (Where we are)
    const currentX = useRef(0);
    const currentY = useRef(0);

    // Motion Values for Framer Motion
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Constants
    // Constants
    const LERP_FACTOR = 0.08;
    const MAX_DISPLACEMENT = 10; // Reduced for less frenetic movement

    useEffect(() => {
        let animationFrameId: number;

        const update = () => {
            currentX.current += (targetX.current - currentX.current) * LERP_FACTOR;
            currentY.current += (targetY.current - currentY.current) * LERP_FACTOR;
            x.set(currentX.current);
            y.set(currentY.current);
            animationFrameId = requestAnimationFrame(update);
        };
        update();
        return () => cancelAnimationFrame(animationFrameId);
    }, [x, y]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const relativeX = e.clientX - rect.left - centerX;
        const relativeY = e.clientY - rect.top - centerY;

        const normalizedX = relativeX / centerX;
        const normalizedY = relativeY / centerY;

        targetX.current = normalizedX * MAX_DISPLACEMENT;
        targetY.current = normalizedY * MAX_DISPLACEMENT;
    };

    const handleMouseLeave = () => {
        targetX.current = 0;
        targetY.current = 0;
    };

    // Generate 5 layers
    const layers = Array.from({ length: 5 });

    return (
        <div
            ref={containerRef}
            className={`relative overflow-visible cursor-none group ${className}`} // Overflow visible for "breaking out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }} // Add perspective for 3D feel
        >
            <div className="relative w-full h-full">
                {layers.map((_, i) => {
                    // Logic: 
                    // i=0 is Base (Background). i=1..4 are Echoes (Smaller, Overlaid).
                    const isBase = i === 0;

                    // Scale: 
                    // Base: 1.05 (Slight zoom to cover edges). 
                    // Echoes: Smaller (1.0 -> 0.9 -> 0.8)
                    const scale = isBase ? 1.05 : 1.0 - (i * 0.05);

                    // Opacity: 
                    // Base: 1 (Fully visible).
                    // Echoes: Transparent (0.3 - 0.5) to see background clearly.
                    const opacity = isBase ? 0.6 : 0.3; // Base slightly dimmed for vibe? Or full 1? User said "visualizar imagen de fondo con claridad".
                    // Let's try Base 0.8, Echoes 0.4.

                    // Movement:
                    // Base: 0 (Static).
                    // Echoes: Move increasingly (0.5 -> 1.0 -> 1.5).
                    const moveFactor = isBase ? 0 : 0.5 + (i * 0.25);

                    const layerX = useTransform(x, (val) => val * moveFactor);
                    const layerY = useTransform(y, (val) => val * moveFactor);

                    return (
                        <motion.div
                            key={i}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            style={{
                                zIndex: i, // Base at 0 (Bottom), Echoes on top (1, 2, 3...)
                                mixBlendMode: isBase ? 'normal' : 'screen', // Screen for "light echoes"? Or Normal? Let's stick to Normal with Opacity for clarity.
                            }}
                        >
                            <motion.img
                                src={src}
                                alt=""
                                className="w-full h-full object-cover"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    scale: scale,
                                    x: layerX,
                                    y: layerY,
                                    opacity: isBase ? 0.8 : 0.25, // Base clear, Echoes faint ghost
                                    filter: isBase ? 'none' : `brightness(${1 + i * 0.1}) blur(${i * 0.5}px)`, // Echoes blurred/bright
                                }}
                            />
                        </motion.div>
                    );
                })}

                {/* Global Overlay for glass feel */}
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-gradient-to-tr from-white/10 to-transparent opacity-30" />
            </div>
        </div>
    );
};
