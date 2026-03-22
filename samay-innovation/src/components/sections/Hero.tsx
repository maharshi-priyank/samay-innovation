import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  images?: string[];
  height?: 'full' | 'screen' | 'auto';
}

const defaultImages = [
  'https://res.cloudinary.com/diojzujpv/image/upload/v1774166968/samay/farmhouse-rancharda/nm-08744.jpg', // Farmhouse — dramatic bar lounge
  'https://res.cloudinary.com/diojzujpv/image/upload/v1774167601/samay/parijaat-eclat-4bhk/nm-00133.jpg', // Parijaat Eclat — living room with gold partition
  'https://res.cloudinary.com/diojzujpv/image/upload/v1774166684/samay/arvind-villa-khatraj/nm-08573.jpg', // Arvind Villa — serene white bedroom
  'https://res.cloudinary.com/diojzujpv/image/upload/v1774167469/samay/parijaat-eclat-4bhk/nm-00071.jpg', // Parijaat Eclat — elegant dining room
  'https://res.cloudinary.com/diojzujpv/image/upload/v1774166740/samay/arvind-villa-khatraj/nm-08653.jpg', // Arvind Villa — clean living room
  'https://res.cloudinary.com/diojzujpv/image/upload/v1774167886/samay/parijaat-eclat-4bhk/nm-00225.jpg', // Parijaat Eclat — white corridor with artwork
  'https://res.cloudinary.com/diojzujpv/image/upload/v1774166707/samay/arvind-villa-khatraj/nm-08607.jpg', // Arvind Villa — clean white kitchen
  'https://res.cloudinary.com/diojzujpv/image/upload/v1774167776/samay/parijaat-eclat-4bhk/nm-00192.jpg', // Parijaat Eclat — bedroom
  'https://res.cloudinary.com/diojzujpv/image/upload/v1774166850/samay/farmhouse-rancharda/nm-08681.jpg', // Farmhouse — office with exposed brick & LED ceiling
  'https://res.cloudinary.com/diojzujpv/image/upload/v1774166795/samay/arvind-villa-khatraj/nm-08663.jpg', // Arvind Villa — outdoor terrace seating
];

export default function Hero({
  images = defaultImages,
  height = 'screen',
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const optimizedImages = images;
  const containerRef = useRef<HTMLElement>(null);

  // Parallax: background moves at 40% of scroll speed
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const heightClass = {
    full: 'h-screen',
    screen: 'min-h-screen',
    auto: 'min-h-[600px]',
  }[height];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % optimizedImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [optimizedImages.length]);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % optimizedImages.length;
    const img = new Image();
    img.src = optimizedImages[nextIndex];
  }, [currentIndex, optimizedImages]);

  // Preload first 2 on mount
  useEffect(() => {
    optimizedImages.slice(0, 2).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section ref={containerRef} className={`relative ${heightClass} overflow-hidden bg-black`}>
      {/* Image Slider with parallax wrapper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Extra height (-15% top, 130% total) gives room for the parallax Y travel */}
          <motion.div
            className="absolute left-0 right-0 bg-cover bg-center"
            style={{
              top: '-15%',
              height: '130%',
              backgroundImage: `url(${optimizedImages[currentIndex]})`,
              y: bgY,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-[3]">
        {optimizedImages.map((_, index) => (
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
