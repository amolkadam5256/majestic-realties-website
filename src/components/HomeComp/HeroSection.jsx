import React, { useRef, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { IoPlayCircle, IoPauseCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import images from '../../assets/images/images';

const HeroSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showThumbnail, setShowThumbnail] = useState(true);

    const handleTogglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
            setShowThumbnail(false);
        }
    };

    return (
        <section className="relative overflow-hidden group min-h-[92vh] flex items-center px-4 md:px-16">
            {/* Background Video */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover z-0"
                muted
                loop
                playsInline
                poster={images.thumnail}
            >
                <source src={images.bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Thumbnail overlay before play */}
            {showThumbnail && (
                <div className="absolute inset-0 w-full h-full z-0">
                    <img
                        src={images.thumnail}
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Text Content */}
            <div className="relative z-10 w-full lg:w-1/2 text-left text-white space-y-6 bg-transparent backdrop-blur-[1.1px]">
                <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 drop-shadow-lg leading-tight">
                    "The best investment on earth is earth"
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold">
                    Welcome to <span className="text-yellow-300">Majestic Realties</span>
                </h1>
                <p className="text-md md:text-lg text-gray-200 ">
                    Where we turn dreams into reality. As passionate land developers, we craft spaces that inspire,
                    innovate, and endure. With a legacy of excellence and a future-focused approach,{' '}
                    <span className="text-yellow-300 font-bold">Majestic Realties</span> is poised to redefine your perception of
                    what’s possible.
                </p>

                <Link
                    to="/contact"
                    className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 transition-transform hover:scale-105 shadow-md"
                >
                    General Enquiry
                    <IoMdAddCircle className="ml-2 text-xl" />
                </Link>
            </div>

            {/* Circular Animated Play/Pause Button */}
            <button
                onClick={handleTogglePlay}
                className="absolute z-10 text-yellow-400 hover:text-yellow-300 transition-transform hover:scale-110
                rounded-full border-4 border-yellow-400 p-2 
                shadow-[0_0_25px_#facc15] hover:shadow-[0_0_40px_#facc15]
                animate-pulse
                right-4 md:right-10 top-[85%] md:top-1/2 transform md:-translate-y-1/2"
            >
                {isPlaying ? (
                    <IoPauseCircle className="text-4xl md:text-6xl" />
                ) : (
                    <IoPlayCircle className="text-4xl md:text-6xl" />
                )}
            </button>
        </section>
    );
};

export default HeroSection;
