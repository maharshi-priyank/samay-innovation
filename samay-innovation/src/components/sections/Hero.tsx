import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  images?: string[];
  height?: 'full' | 'screen' | 'auto';
}

// Default images - you can replace these with local paths
const defaultImages = [
  '/assets/images/hero/hero-1.jpeg',
  '/assets/images/hero/hero-2.jpeg',
  '/assets/images/hero/hero-3.jpeg',
];

export default function Hero({
  images = defaultImages,
  height = 'screen',
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heightClass = {
    full: 'h-screen',
    screen: 'min-h-screen',
    auto: 'min-h-[600px]',
  }[height];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={`relative ${heightClass} overflow-hidden bg-black`}>
      {/* Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-0.5 transition-all duration-300 ${
              index === currentIndex ? 'w-12 bg-white' : 'w-6 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
