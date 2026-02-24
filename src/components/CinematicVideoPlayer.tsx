import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X } from 'lucide-react';

interface CinematicVideoPlayerProps {
    src: string;
    onClose: () => void;
}

export const CinematicVideoPlayer = ({ src, onClose }: CinematicVideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const controlsTimeoutRef = useRef<any>(null);

    // Format time to 0:00:00
    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // Auto-hide controls logic
    const resetControlsTimeout = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying) setShowControls(false);
        }, 3000);
    };

    useEffect(() => {
        resetControlsTimeout();
        return () => {
            if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        }
    }, [isPlaying]);

    const handleMouseMove = () => {
        resetControlsTimeout();
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) videoRef.current.pause();
            else videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current) {
            const bounds = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - bounds.left;
            const percentage = x / bounds.width;
            videoRef.current.currentTime = percentage * duration;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden cursor-none"
            onMouseMove={handleMouseMove}
            style={{ cursor: showControls ? 'auto' : 'none' }}
        >
            {/* Background Video */}
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover"
                autoPlay
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
            />

            {/* Close Button */}
            <AnimatePresence>
                {showControls && (
                    <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        onClick={onClose}
                        className="absolute top-8 right-8 text-accent/60 hover:text-accent transition-colors z-[110] flex items-center gap-2 group"
                    >
                        <span className="text-[10px] uppercase tracking-widest font-bold">Cerrar</span>
                        <X size={32} className="text-accent" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Custom Controls (Based on Reference UI) */}
            <AnimatePresence>
                {showControls && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-[110] flex flex-col justify-center p-8 md:p-32 pointer-events-none"
                    >
                        <div className="w-full flex items-center gap-12 pointer-events-auto">
                            {/* Play/Pause & Time Display */}
                            <div className="flex items-end gap-6 h-12 flex-shrink-0">
                                <button
                                    onClick={togglePlay}
                                    className="text-white hover:text-accent transition-colors mb-[-2px]"
                                >
                                    {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                                </button>

                                <div className="flex flex-col font-mono">
                                    <span className="text-[10px] text-zinc-500 tracking-[0.2em] leading-none mb-1">INTRODUCTION</span>
                                    <span className="text-2xl md:text-4xl font-medium text-white tracking-widest leading-none">
                                        {formatTime(currentTime)}
                                    </span>
                                </div>
                            </div>

                            {/* Timeline / Progress Bar */}
                            <div className="flex-1 flex items-center h-full">
                                <div
                                    className="relative w-full h-[1px] bg-white/10 cursor-pointer group"
                                    onClick={handleProgressClick}
                                >
                                    {/* Progress Fill */}
                                    <motion.div
                                        className="absolute top-0 left-0 h-full bg-white/60 group-hover:bg-accent transition-colors"
                                        style={{ width: `${(currentTime / duration) * 100}%` }}
                                    />
                                    {/* Dot Indicator */}
                                    <motion.div
                                        className="absolute top-1/2 w-1.5 h-1.5 bg-white rounded-full -translate-y-1/2 -translate-x-1/2"
                                        style={{ left: `${(currentTime / duration) * 100}%` }}
                                    />

                                    {/* Interaction Area (Hitbox) */}
                                    <div className="absolute inset-0 -top-6 -bottom-6" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
