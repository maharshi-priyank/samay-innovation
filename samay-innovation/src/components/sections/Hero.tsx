import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Slide {
  image: string;
  category: string;
  title: string;
  location: string;
  slug: string;
}

const SLIDES: Slide[] = [
  {
    image: '/assets/hero/hero-living-room.png',
    category: 'Residential',
    title: 'Refined Living',
    location: 'Ahmedabad, India',
    slug: '/portfolio',
  },
  {
    image: '/assets/hero/hero-bar-area.png',
    category: 'Hospitality',
    title: 'The Art of Atmosphere',
    location: 'Ahmedabad, India',
    slug: '/portfolio',
  },
  {
    image: '/assets/hero/hero-restaurant.png',
    category: 'Commercial',
    title: 'Space That Speaks',
    location: 'Gujarat, India',
    slug: '/portfolio',
  },
  {
    image: '/assets/hero/hero-us-restaurant.jpg',
    category: 'International',
    title: 'Beyond Borders',
    location: 'United States',
    slug: '/portfolio',
  },
  {
    image: '/assets/hero/hero-us.png',
    category: 'International',
    title: 'Global Vision',
    location: 'United States',
    slug: '/portfolio',
  },
  {
    image: '/assets/hero/hero-3a.png',
    category: 'Residential',
    title: 'Quiet Luxury',
    location: 'Ahmedabad, India',
    slug: '/portfolio',
  },
];

interface HeroProps {
  images?: string[];
  height?: 'full' | 'screen' | 'auto';
}

export default function Hero({ height = 'screen' }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const DURATION = 5000;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const heightClass = {
    full: 'h-screen',
    screen: 'min-h-screen',
    auto: 'min-h-[600px]',
  }[height];

  const goTo = (idx: number) => {
    setCurrent(idx);
    setProgress(0);
    startRef.current = performance.now();
  };

  const next = () => goTo((current + 1) % SLIDES.length);

  // RAF-based progress bar
  useEffect(() => {
    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const pct = Math.min(elapsed / DURATION, 1);
      setProgress(pct);
      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        next();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [current]); // eslint-disable-line react-hooks/exhaustive-deps

  // Preload next image
  useEffect(() => {
    const nextIdx = (current + 1) % SLIDES.length;
    const img = new Image();
    img.src = SLIDES[nextIdx].image;
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section ref={containerRef} className={`relative ${heightClass} overflow-hidden bg-black`}>
      {/* Background image with parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute left-0 right-0 bg-cover bg-center"
            style={{
              top: '-15%',
              height: '130%',
              backgroundImage: `url(${slide.image})`,
              y: bgY,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-[1]" />

      {/* Slide counter — top right */}
      <div className="absolute top-8 right-8 z-[3] flex items-center gap-2 text-white/30 text-[10px] tracking-[0.4em] font-light">
        <span className="text-white/60">{String(current + 1).padStart(2, '0')}</span>
        <span>/</span>
        <span>{String(SLIDES.length).padStart(2, '0')}</span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] px-8 md:px-16 pb-16">
        {/* Category + location */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`meta-${current}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-px bg-accent-primary" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-accent-primary font-light">
              {slide.category}
            </span>
            <span className="text-white/20 text-[10px]">·</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-light">
              {slide.location}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Title */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-none mb-8"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {slide.title}
          </motion.h1>
        </AnimatePresence>

        {/* CTA + slide dots row */}
        <div className="flex items-end justify-between gap-8">
          {/* CTA */}
          <Link
            to={slide.slug}
            className="inline-flex items-center gap-3 group"
          >
            <span className="text-[10px] tracking-[0.35em] uppercase text-white font-light group-hover:text-accent-primary transition-colors duration-300">
              Explore Portfolio
            </span>
            <div className="w-8 h-px bg-white/40 group-hover:w-14 group-hover:bg-accent-primary transition-all duration-500" />
            <ArrowRight size={12} className="text-white/40 group-hover:text-accent-primary transition-colors duration-300" />
          </Link>

          {/* Slide indicators with progress */}
          <div className="flex items-center gap-3">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="relative h-[2px] overflow-hidden"
                style={{ width: idx === current ? 48 : 16 }}
              >
                {/* Track */}
                <div className="absolute inset-0 bg-white/20" />
                {/* Fill */}
                {idx === current ? (
                  <div
                    className="absolute inset-y-0 left-0 bg-accent-primary"
                    style={{ width: `${progress * 100}%`, transition: 'none' }}
                  />
                ) : idx < current ? (
                  <div className="absolute inset-0 bg-white/50" />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical scroll hint — right side */}
      <div className="absolute right-8 bottom-1/3 z-[3] hidden md:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-white/40"
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ height: '40%' }}
          />
        </div>
        <span className="text-[8px] tracking-[0.4em] uppercase text-white/25 font-light rotate-90 whitespace-nowrap mt-2">
          Scroll
        </span>
      </div>
    </section>
  );
}
