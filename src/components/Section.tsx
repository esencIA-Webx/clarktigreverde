// import { motion, useScroll, useTransform } from 'framer-motion'; // Unused for now
import { useRef } from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    fullHeight?: boolean;
}

export const Section = ({ children, className, id, fullHeight = true }: SectionProps) => {
    const ref = useRef<HTMLDivElement>(null);

    // Basic scroll trigger logic can go here if needed per section
    // For now, it's a wrapper for full-screen layout

    return (
        <section
            id={id}
            ref={ref}
            className={clsx(
                "relative w-full overflow-hidden",
                fullHeight ? "min-h-screen" : "h-auto",
                className
            )}
        >
            {children}
        </section>
    );
};
