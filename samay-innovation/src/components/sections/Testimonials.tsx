import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sadhna Shah',
    role: 'Customer',
    content: 'I am glad that I have come across you and have your recommendation from one of my friends. What I want for my house is what you actually give in return. A big thank you for letting my dream come true. Kudos to Samay Innovation!',
    project: 'Residential Interior',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ashwin Shukla',
    role: 'Customer',
    content: 'We breathe relaxed in our home because we have perfect interior designing, perfect color combination, and everything is just perfect as we dreamt. I don\'t have words to express my gratitude to Samay Innovation, just thank you is not enough for your efforts!',
    project: 'Home Interior',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Shah',
    role: 'Customer',
    content: 'Technically what we want is almost impossible within the space we have, but Seme Nadvi makes it happen for us! My employees and I are very happy to have such an amazing, comfortable, and relaxing working space. All because of Samay Innovations and Seme Nadvi, Thank you so much!',
    project: 'Office Interior',
    rating: 5,
  },
  {
    id: 4,
    name: 'Amit Agrawal',
    role: 'Customer',
    content: 'Samay Innovations has performed and delivered for us in an efficient and professional fashion. The design talent is exceptional and has given us unique designs and interior design as we want. Keep going guys, you are amazing.',
    project: 'Interior Design',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-bg-dark-section dark:bg-dark-bg-tertiary overflow-hidden">
      <div className="container-custom">
        {/* Minimal Header with Line */}
        <div className="flex items-center gap-8 mb-20">
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-white">T</span>
          </div>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        {/* Section Title */}
        <div className="mb-20">
          <h2 className="text-xs font-light tracking-[0.3em] uppercase text-white/50 mb-4">
            TESTIMONIALS.
          </h2>
          <h3 className="text-5xl md:text-6xl font-light text-white">
            What Our Clients Say
          </h3>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Quote */}
              <p className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-16">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Client Info & Navigation Row */}
              <div className="flex items-end justify-between border-t border-white/10 pt-8">
                {/* Client Details */}
                <div>
                  <p className="text-lg font-light text-white mb-1">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-white/50 mb-3">
                    {testimonials[currentIndex].role}
                  </p>
                  
                  {/* Rating & Project Badge Row */}
                  <div className="flex items-center gap-4">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonials[currentIndex].rating
                              ? 'text-accent-primary'
                              : 'text-white/20'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-white/50 ml-2">
                        {testimonials[currentIndex].rating}.0
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-4 bg-white/20" />

                    {/* Project Badge */}
                    <div className="inline-block border border-white/20 px-4 py-1.5">
                      <p className="text-xs font-light tracking-wider uppercase text-white/70">
                        {testimonials[currentIndex].project}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-6">
                  {/* Counter */}
                  <div className="text-sm font-light text-white/50">
                    <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
                    {' / '}
                    {String(testimonials.length).padStart(2, '0')}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={prev}
                      className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} strokeWidth={1.5} />
                    </button>
                    <button
                      onClick={next}
                      className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
