import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface OpticLensImageProps {
    src: string;
    alt: string;
    className?: string; // For outer container sizing
    intensity?: number; // 0 to 1, default 1
}

export const OpticLensImage = ({ src, alt, className = "", intensity = 1 }: OpticLensImageProps) => {
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
    const LERP_FACTOR = 0.08;
    const MAX_DISPLACEMENT = 10 * intensity; // Scaled by intensity

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
                    // Base: Slight zoom to cover edges. 
                    // Echoes: Smaller, scaled by intensity
                    const baseScale = 1.05;
                    const echoScaleStep = 0.05 * intensity;
                    const scale = isBase ? baseScale : 1.0 - (i * echoScaleStep);

                    // Opacity: 
                    // Echoes: Transparent, slightly lower when intensity is low
                    const baseOpacity = 0.8;
                    const echoOpacity = 0.25 * intensity + 0.05;

                    // Movement:
                    // Base: 0 (Static).
                    // Echoes: Move increasingly, scaled by intensity
                    const moveFactor = isBase ? 0 : (0.5 + (i * 0.25)) * intensity;

                    const layerX = useTransform(x, (val) => val * moveFactor);
                    const layerY = useTransform(y, (val) => val * moveFactor);

                    return (
                        <motion.div
                            key={i}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            style={{
                                zIndex: i, // Base at 0 (Bottom), Echoes on top (1, 2, 3...)
                                mixBlendMode: isBase ? 'normal' : 'screen',
                            }}
                        >
                            <motion.img
                                src={src}
                                alt={alt}
                                className="w-full h-full object-cover"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    scale: scale,
                                    x: layerX,
                                    y: layerY,
                                    opacity: isBase ? baseOpacity : echoOpacity,
                                    filter: isBase ? 'none' : `brightness(${1 + i * 0.1}) blur(${i * 0.5 * intensity}px)`,
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
