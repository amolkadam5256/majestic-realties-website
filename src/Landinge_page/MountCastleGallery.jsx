import React, { useState, useEffect } from "react";
import {
  FaExpand,
  FaHeart,
  FaDownload,
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaSearchMinus,
  FaExpandArrowsAlt,
  FaCompressArrowsAlt,
} from "react-icons/fa";
import images from "../assets/images/images"; // adjust path if needed

const MountCastleGallery = () => {
  const galleryImages = [
    images.Mount_Castle1,
    images.Mount_Castle2,
    images.Mount_Castle3,
    images.Mount_Castle4,
    images.Mount_Castle5,
    images.Mount_Castle6,
    images.Mount_Castle7,
    images.Mount_Castle8,
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);

  const openLightbox = (index) => {
    setSelectedImage(galleryImages[index]);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setZoom(1);
    setAutoPlay(false);
  };

  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === "next") {
      newIndex = (lightboxIndex + 1) % galleryImages.length;
    } else {
      newIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    setLightboxIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
    setZoom(1);
  };

  // Auto slideshow
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        navigateLightbox("next");
      }, 4000); // 4s delay
    }
    return () => clearInterval(interval);
  }, [autoPlay, lightboxIndex]);

  // Download image
  const downloadImage = (imageSrc, index) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = `mount-castle-view-${index + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Zoom controls
  const handleZoom = (type) => {
    if (type === "in") setZoom((prev) => Math.min(prev + 0.25, 3));
    if (type === "out") setZoom((prev) => Math.max(prev - 0.25, 1));
  };

  // Fullscreen toggle
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* === HEADER SECTION === */}
      <div className="pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sm:max-w-full">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Majestic Mount Castle Views
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Experience the breathtaking beauty and luxury of Mount Castle through our
              exclusive gallery of premium properties and stunning landscapes.
            </p>
          </div>

          {/* === IMAGE GRID === */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img}
                  alt={`Mount Castle View ${idx + 1}`}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-3">
                  <button
                    className="p-2 bg-yellow-600 rounded-full text-white hover:bg-yellow-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(idx);
                    }}
                  >
                    <FaExpand />
                  </button>
                  <button className="p-2 bg-yellow-600 rounded-full text-white hover:bg-yellow-700">
                    <FaHeart />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block rounded-md border border-transparent bg-yellow-600 py-3 px-8 text-center font-medium text-white hover:bg-yellow-700"
            >
              Explore Gallery
            </a>
          </div>
        </div>
      </div>

      {/* === LIGHTBOX === */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox} // Close only when clicking outside
        >
          <div
            className="relative max-w-6xl w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full z-10 hover:bg-yellow-600"
              onClick={closeLightbox}
            >
              ✕
            </button>

            {/* Prev/Next */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-3 rounded-full z-10 hover:bg-yellow-600"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-3 rounded-full z-10 hover:bg-yellow-600"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Controls */}
            <div
              className="flex items-center space-x-3 absolute bottom-4 z-40 left-1/2 transform -translate-x-1/2 bg-black/40 px-4 py-2 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="text-white p-2 hover:text-yellow-400"
                onClick={() => handleZoom("out")}
              >
                <FaSearchMinus />
              </button>
              <button
                className="text-white p-2 hover:text-yellow-400"
                onClick={() => handleZoom("in")}
              >
                <FaSearchPlus />
              </button>
              <button
                className="text-white p-2 hover:text-yellow-400"
                onClick={() => downloadImage(selectedImage, lightboxIndex)}
              >
                <FaDownload />
              </button>
              <button
                className="text-white p-2 hover:text-yellow-400"
                onClick={toggleFullScreen}
              >
                {isFullScreen ? <FaCompressArrowsAlt /> : <FaExpandArrowsAlt />}
              </button>
              <button
                className={`text-white p-2 ${autoPlay ? "text-yellow-400" : ""}`}
                onClick={() => setAutoPlay(!autoPlay)}
              >
                ▶
              </button>
              <span className="text-white text-sm">
                {lightboxIndex + 1} / {galleryImages.length}
              </span>
            </div>

            {/* Image */}
            <img
              src={selectedImage}
              alt={`Mount Castle View ${lightboxIndex + 1}`}
              style={{ transform: `scale(${zoom})` }}
              className="w-full h-auto max-h-screen object-contain transition-transform duration-300 rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent accidental close
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MountCastleGallery;
