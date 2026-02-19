import { useRef, useEffect } from 'react';
import clsx from 'clsx';

interface VideoBackgroundProps {
    src: string;
    poster?: string;
    className?: string;
    opacity?: number;
}

export const VideoBackground = ({ src, poster, className, opacity = 0.6 }: VideoBackgroundProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0;
        }
    }, []);

    return (
        <div className={clsx("absolute inset-0 z-0 select-none overflow-hidden", className)}>
            <div
                className="absolute inset-0 bg-black z-10 transition-opacity duration-300"
                style={{ opacity: 1 - opacity }}
            />
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster={poster}
                className="object-cover w-full h-full"
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
};
