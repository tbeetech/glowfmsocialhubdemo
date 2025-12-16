"use client";

import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    quote: "Working with Glow FM was a fantastic experience. They were professional, responsive, and truly understood our needs. The final product exceeded our expectations, and we couldn't be happier with the results. We highly recommend them!",
    author: "Adebayo Williams",
    role: "CEO, Blue Cross Oil"
  },
  {
    id: 2,
    quote: "The Glow FM team delivered exceptional service from start to finish. Their creativity and attention to detail made our campaign a huge success. We've seen tremendous growth in brand awareness since partnering with them.",
    author: "Funmi Adebayo",
    role: "Marketing Director, Tech Innovate"
  },
  {
    id: 3,
    quote: "Outstanding professionalism and creativity! Glow FM brought our vision to life and exceeded all expectations. The entire process was seamless, and the results speak for themselves. Absolutely phenomenal work!",
    author: "Michael Thompson",
    role: "Founder, Creative Solutions"
  },
  {
    id: 4,
    quote: "Glow FM's innovative approach to broadcasting and digital marketing is truly impressive. They helped us reach our target audience effectively and increased our engagement rates significantly.",
    author: "Sarah Johnson",
    role: "Brand Manager, Future Foods"
  }
];

export function ProgramReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['El_Messiri']">Our Programmes Reviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['El_Messiri'] font-semibold">
            We&apos;re proud of the work we do and the relationships we build. Take a look at what some of our clients
            have to say.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-gradient-to-br from-orange-500 via-purple-600 to-orange-400 rounded-[2rem] p-8 min-h-[500px] relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-8 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                      </div>

                      <p className="text-white text-sm leading-relaxed mb-6 font-['El_Messiri'] font-semibold">
                        &quot;{testimonials[currentIndex].quote}&quot;
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-2 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                        <FaUserCircle className="w-full h-full text-white/90" />
                      </div>

                      <h4 className="text-white font-bold text-sm font-['El_Messiri']">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-white/80 text-xs font-['El_Messiri']">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>

                <div className="w-32 h-1 bg-gray-700 rounded-full mx-auto mt-2"></div>
              </div>

              <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-indigo-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
