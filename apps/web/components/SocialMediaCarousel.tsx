"use client";
import { useState, ReactNode } from "react";

interface SocialMediaCarouselProps {
  children: ReactNode[];
  itemsPerView?: number;
}

export function SocialMediaCarousel({ children, itemsPerView = 1 }: SocialMediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;
  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  // Touch handlers for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setIsDragging(false);
  };

  // Mouse handlers for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(0);
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const slidePercentage = 100 / itemsPerView;

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 compact:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-br from-orange-500/90 to-red-500/90 backdrop-blur-sm rounded-full p-2 compact:p-3 shadow-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-110 transition-all duration-300 group border-2 border-orange-400/50"
        aria-label="Previous"
      >
        <svg className="w-5 h-5 compact:w-6 compact:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 compact:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-br from-orange-500/90 to-red-500/90 backdrop-blur-sm rounded-full p-2 compact:p-3 shadow-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-110 transition-all duration-300 group border-2 border-orange-400/50"
        aria-label="Next"
      >
        <svg className="w-5 h-5 compact:w-6 compact:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div className="px-12 compact:px-16 py-4">
        <div 
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          {/* Carousel Track */}
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * slidePercentage}%)`,
              pointerEvents: isDragging ? 'none' : 'auto'
            }}
          >
            {children.map((child, index) => (
              <div
                key={index}
                className="px-2 compact:px-3"
                style={{ 
                  minWidth: `${slidePercentage}%`,
                  maxWidth: `${slidePercentage}%`
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-gradient-to-r from-orange-500 to-red-500 w-8 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                : "bg-gray-300 hover:bg-orange-400/50 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
