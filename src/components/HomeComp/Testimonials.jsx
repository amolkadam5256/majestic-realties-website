import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dr. Jagtap",
    company: "Mount Castle, Ambedwet, Pirangut",
    date: "April 2024",
    videoId: "y2VnJQEK98Q",
    originalUrl: "https://www.youtube.com/watch?v=y2VnJQEK98Q",
    type: "video",
    platform: "youtube",
    feedback: "The team at Majestic Realties made the process of purchasing a plot at Mount Castle seamless. Their professionalism and attention to detail are commendable.",
    stars: 5
  },
  {
    name: "Mr. Aniket Awtani",
    company: "Mount Castle, Ambedwet, Pirangut",
    date: "April 2024",
    videoId: "H6O6_yF_kY4",
    originalUrl: "https://youtube.com/shorts/H6O6_yF_kY4?si=zuC3wtE8vVD9Jd3Y",
    type: "video",
    platform: "youtube",
    feedback: "The team at Majestic Realties made the process of purchasing a plot at Mount Castle seamless. Their professionalism and attention to detail are commendable.",
    stars: 5
  },
  {
    name: "Mr. Aniket Awtani",
    company: "Mount Castle, Ambedwet, Pirangut",
    date: "April 2024",
    videoId: "81qQQoY2Tpg",
    originalUrl: "https://youtube.com/shorts/81qQQoY2Tpg?si=bAisJ3r5fHysqXof",
    type: "video",
    platform: "youtube",
    feedback: "The team at Majestic Realties made the process of purchasing a plot at Mount Castle seamless. Their professionalism and attention to detail are commendable.",
    stars: 5
  },
  {
    name: "Mr. Utkarsh Ghate",
    company: "Royal Greens, Supa, Morgain",
    date: "March 2024",
    reelId: "DOvA2x4jmeN",
    originalUrl: "https://www.instagram.com/reel/DOvA2x4jmeN/",
    type: "video",
    platform: "instagram",
    feedback: "I was searching for the perfect place to build my farmhouse, and Royal Greens exceeded my expectations. The accessibility to essential utilities is a huge plus.",
    stars: 4.5
  },
  {
    name: "Mr. Utkarsh Ghate",
    company: "Royal Greens, Supa, Morgain",
    date: "March 2024",
    reelId: "DOvA2x4jmeN",
    originalUrl: "https://www.instagram.com/reel/DOvA2x4jmeN/",
    type: "video",
    platform: "instagram",
    feedback: "I was searching for the perfect place to build my farmhouse, and Royal Greens exceeded my expectations. The accessibility to essential utilities is a huge plus.",
    stars: 4.5
  },
  {
    name: "Mr. Utkarsh Ghate",
    company: "Royal Greens, Supa, Morgain",
    date: "March 2024",
    reelId: "DOvA2x4jmeN",
    originalUrl: "https://www.instagram.com/reel/DOvA2x4jmeN/",
    type: "video",
    platform: "instagram",
    feedback: "I was searching for the perfect place to build my farmhouse, and Royal Greens exceeded my expectations. The accessibility to essential utilities is a huge plus.",
    stars: 4.5
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex mt-2 gap-1 text-[#F2B90C]">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z" />
          </svg>
        ))}
      {halfStar && (
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <defs>
            <linearGradient id="half" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="50%" stopColor="#F2B90C" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z"
          />
        </svg>
      )}
    </div>
  );
};

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const videoEndTimers = useRef({});

  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  const handleNext = () => swiperRef.current?.swiper?.slideNext();

  const getYouTubeEmbedUrl = (videoId, autoplay = true) => {
    // Remove loop parameter and add end parameter detection
    return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`;
  };

  const getInstagramEmbedUrl = (reelId) => {
    return `https://www.instagram.com/reel/${reelId}/embed/?autoplay=true&playsinline=1`;
  };

  const getVideoUrl = (item) => {
    if (item.platform === 'youtube') {
      return getYouTubeEmbedUrl(item.videoId, true);
    } else if (item.platform === 'instagram') {
      return getInstagramEmbedUrl(item.reelId);
    }
    return '';
  };

  const getOriginalUrl = (item) => {
    if (item.platform === 'youtube') {
      return item.originalUrl || `https://www.youtube.com/watch?v=${item.videoId}`;
    } else if (item.platform === 'instagram') {
      return item.originalUrl || `https://www.instagram.com/reel/${item.reelId}/`;
    }
    return '';
  };

  // Handle slide change to manage video playback
  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const handleSlideChange = () => {
      setActiveSlide(swiper.activeIndex);

      // Clear any existing timers when slide changes
      Object.values(videoEndTimers.current).forEach(timer => {
        if (timer) clearTimeout(timer);
      });
      videoEndTimers.current = {};

      // Set up video end detection for current slide
      const currentSlide = testimonials[swiper.activeIndex];
      if (currentSlide?.type === 'video') {
        // Estimate video duration and set timer (YouTube Shorts/Instagram Reels are typically 15-60 seconds)
        const estimatedDuration = 30000; // 30 seconds as default for reels/shorts

        videoEndTimers.current[swiper.activeIndex] = setTimeout(() => {
          swiper.slideNext();
        }, estimatedDuration);
      }
    };

    swiper.on('slideChange', handleSlideChange);

    return () => {
      swiper.off('slideChange', handleSlideChange);
      // Clear all timers on unmount
      Object.values(videoEndTimers.current).forEach(timer => {
        if (timer) clearTimeout(timer);
      });
    };
  }, []);

  const VideoPlayer = ({ item, index }) => (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg relative group">
      <div className="relative pt-[177.78%]"> {/* 9:16 aspect ratio */}
        <iframe
          data-video-index={index}
          src={getVideoUrl(item)}
          title={`${item.name} testimonial video`}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        // Note: For YouTube, we could use YouTube IFrame API to detect actual video end
        // but that requires additional setup and API key
        />
      </div>

      {/* Watch Full Button Overlay - For both YouTube and Instagram */}
      <a
        href={getOriginalUrl(item)}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-end justify-start p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className={`flex items-center gap-2 text-white text-sm font-medium px-3 py-2 rounded-lg ${item.platform === 'youtube'
          ? 'bg-red-600 hover:bg-red-700'
          : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
          } transition-colors duration-200`}>
          {item.platform === 'youtube' ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Watch Full on YouTube
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 12c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5zm-2.5-4.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5z" />
              </svg>
              Watch Full on Instagram
            </>
          )}
        </span>
      </a>
    </div>
  );

  return (
    <section className="bg-gray-10 max-w-7xl mx-auto px-6 py-16" data-aos="fade-up" data-aos-duration="3000" id="Testimonials">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-2/5 text-center lg:text-left" data-aos="fade-up" data-aos-duration="1000">
          <span className="text-[#F2B90C] font-semibold text-sm tracking-wider uppercase mb-3 block">Testimonial</span>
          <h2 className="text-4xl font-bold text-[#262324] mb-6 leading-tight">
            324+ Happy Clients Shared Their{" "}
            <span className="bg-gradient-to-tr from-[#F2B90C] to-[#BF8D30] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-[#4B4033] text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            We help Indians achieve their dream of land ownership with premium NA plots, second home destinations, and farmhouse investments. Here's what our satisfied clients say.
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-center lg:justify-start mt-10 gap-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border-2 border-[#F2B90C] flex items-center justify-center hover:bg-[#F2B90C] transition group"
            >
              <svg
                className="w-6 h-6 text-[#F2B90C] group-hover:text-[#262324]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"></path>
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 border-2 border-[#F2B90C] flex items-center justify-center hover:bg-[#F2B90C] transition group"
            >
              <svg
                className="w-6 h-6 text-[#F2B90C] group-hover:text-[#262324]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full lg:w-3/5">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={false} // Disable Swiper autoplay since we're handling it manually
            loop
            className="swiperText"
            spaceBetween={20}
            slidesPerView={1}
            onSlideChangeTransitionEnd={(swiper) => {
              setActiveSlide(swiper.activeIndex);
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-100 text-[#262324] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Video Section - Left Side */}
                    {item.type === "video" && (
                      <div className="w-full lg:w-2/5 p-4">
                        <VideoPlayer item={item} index={index} />
                      </div>
                    )}

                    {/* Text Content Section - Right Side */}
                    <div className={`w-full ${item.type === "video" ? "lg:w-3/5" : "w-full"} p-6`}>
                      {item.type === "video" ? (
                        // Video testimonial layout
                        <div className="flex items-start gap-4 h-full">
                          <div className="flex-shrink-0">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold text-lg ${item.platform === 'youtube'
                              ? 'bg-red-600'
                              : 'bg-gradient-to-r from-purple-500 to-pink-500'
                              }`}>
                              {item.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <p className="text-sm font-medium">{item.company}</p>
                            <p className="text-xs text-[#735A2C] italic">{item.date}</p>
                            {renderStars(item.stars)}
                            <p className="mt-3 text-base italic">"{item.feedback}"</p>
                          </div>
                        </div>
                      ) : (
                        // Regular text testimonial
                        <div className="flex flex-col sm:flex-row gap-6">
                          <div className="flex-shrink-0">
                            <img
                              className="w-20 h-20 sm:w-24 sm:h-24 object-cover border-4 border-white shadow-md rounded-lg"
                              src={item.image}
                              alt={item.name}
                              onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=F2B90C&color=262324&bold=true&size=96`;
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <p className="text-sm font-medium">{item.company}</p>
                            <p className="text-xs text-[#735A2C] italic">{item.date}</p>
                            {renderStars(item.stars)}
                            <p className="mt-3 text-base italic">"{item.feedback}"</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;