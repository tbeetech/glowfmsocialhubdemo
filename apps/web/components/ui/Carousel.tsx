"use client";

import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}

export function Carousel({ children, className = "", itemClassName = "min-w-[85%] sm:min-w-[45%] lg:min-w-[30%]" }: CarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // -10 for tolerance
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of view width
    
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 -ml-4 opacity-0 group-hover:opacity-100 disabled:opacity-0 ${!showLeftArrow ? 'invisible' : ''}`}
        aria-label="Scroll left"
        disabled={!showLeftArrow}
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 -mr-4 opacity-0 group-hover:opacity-100 disabled:opacity-0 ${!showRightArrow ? 'invisible' : ''}`}
        aria-label="Scroll right"
        disabled={!showRightArrow}
      >
        <FaChevronRight />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto gap-6 pb-8 pt-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {React.Children.map(children, (child) => (
          <div className={`${itemClassName} snap-center shrink-0`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
