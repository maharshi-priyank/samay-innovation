import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  category: string;
  title: string;
  location: string;
  description: string;
  slug: string;
  region?: string; // e.g. 'Italy' | 'Los Angeles'
}

const slides: Slide[] = [
  {
    image: '/assets/hero/hero-living-room.png',
    category: 'Residential',
    title: 'Arvind Villa',
    location: 'Khatraj, Ahmedabad',
    description: 'Pure white interiors, clean lines, and a calming minimalist palette across 4,200 sq ft.',
    slug: 'arvind-villa-khatraj',
  },
  {
    image: '/assets/hero/hero-bar-area.png',
    category: 'Hospitality',
    title: 'Event Office',
    location: 'Bodakdev, Ahmedabad',
    description: 'A high-energy commercial space where function meets crafted luxury.',
    slug: 'event-office',
  },
  {
    image: '/assets/hero/hero-restaurant.png',
    category: 'Hospitality',
    title: 'The Grand Dining',
    location: 'Ahmedabad',
    description: 'Warm textures and curated lighting define an unforgettable dining atmosphere.',
    slug: 'event-office',
  },
  {
    image: '/assets/hero/hero-us-restaurant.jpg',
    category: 'International · Hospitality',
    title: 'USA Restaurant',
    location: 'Los Angeles, California',
    description: 'Bringing Indian design sensibility to the heart of the American West Coast.',
    slug: 'usa-restaurant-la',
    region: 'United States',
  },
  {
    image: '/assets/hero/hero-us.png',
    category: 'International · Residential',
    title: 'Ravello Villa',
    location: 'Ravello, Italy',
    description: 'A Mediterranean retreat shaped by heritage, light, and timeless Italian proportion.',
    slug: 'ravello-italy',
    region: 'Italy',
  },
  {
    image: '/assets/hero/hero-3a.png',
    category: 'Residential',
    title: 'Venice Bungalows',
    location: 'Anand, Gujarat',
    description: 'Venetian elegance reimagined for a modern Indian family home.',
    slug: 'venice-bungalows',
  },
];

const INTERVAL = 6000;

const textVariants = {
  initial: { opacity: 0, y: 22 },
  animate: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
  exit: { opacity: 0, y: -12, transition: { duration: 0.35, ease: [0.4, 0, 1, 1] as [number, number, number, number] } },
};

export default function Hero() {
  const [current, setCurrent]   = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef  = useRef<number>(0);
  const startRef  = useRef<number>(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
    startRef.current = performance.now();
  }, []);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  // Animate progress bar with requestAnimationFrame
  useEffect(() => {
    let running = true;
    startRef.current = performance.now();

    const tick = (now: number) => {
      if (!running) return;
      const elapsed = now - startRef.current;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };
    frameRef.current = requestAnimationFrame(tick);

    timerRef.current = setTimeout(() => next(), INTERVAL);

    return () => {
      running = false;
      cancelAnimationFrame(frameRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, next]);

  const slide = slides[current];
  const counterCurrent = String(current + 1).padStart(2, '0');
  const counterTotal   = String(slides.length).padStart(2, '0');

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-black">

      {/* ── Background image with parallax ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
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

      {/* ── Gradient overlays ── */}
      {/* Bottom-left: text legibility */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.1) 65%, transparent 100%)',
        }}
      />
      {/* Vignette left edge */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 55%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen pb-20 md:pb-24">
        <div className="px-6 md:px-14 lg:px-20 max-w-3xl">

          <AnimatePresence mode="wait">
            <motion.div key={current} className="flex flex-col gap-4 md:gap-5">

              {/* Overline */}
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0}
                className="flex items-center gap-3"
              >
                <div className="h-px w-6 bg-accent-primary" />
                <span className="text-[10px] md:text-[11px] font-light tracking-[0.45em] uppercase text-accent-primary">
                  {slide.category}
                </span>
                {slide.region && (
                  <span className="text-[10px] font-light tracking-[0.3em] uppercase text-white/30 ml-1">
                    · {slide.region}
                  </span>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.1}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-white leading-[1.02] tracking-tight"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {slide.title}
              </motion.h1>

              {/* Location */}
              <motion.p
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.18}
                className="text-white/40 text-xs md:text-sm tracking-[0.25em] uppercase font-light"
              >
                {slide.location}
              </motion.p>

              {/* Description */}
              <motion.p
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.26}
                className="text-white/65 text-sm md:text-base font-light leading-relaxed max-w-md"
              >
                {slide.description}
              </motion.p>

              {/* CTA */}
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0.34}
                className="mt-1"
              >
                <Link
                  to={`/portfolio/${slide.slug}`}
                  className="inline-flex items-center gap-2.5 group"
                >
                  <span className="text-[11px] font-light tracking-[0.35em] uppercase text-white/70 group-hover:text-accent-primary transition-colors duration-300">
                    View Project
                  </span>
                  <span className="w-7 h-px bg-white/30 group-hover:w-10 group-hover:bg-accent-primary transition-all duration-400" />
                  <ArrowRight
                    size={13}
                    strokeWidth={1.5}
                    className="text-white/40 group-hover:text-accent-primary group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Bottom bar ── */}
        <div className="absolute bottom-7 md:bottom-9 left-0 right-0 px-6 md:px-14 lg:px-20 flex items-end justify-between z-20">

          {/* Progress bar + dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative h-[2px] bg-white/15 overflow-hidden"
                style={{ width: i === current ? '48px' : '20px', transition: 'width 0.3s ease' }}
              >
                {i === current && (
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-accent-primary origin-left"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Counter + arrows */}
          <div className="flex items-center gap-5">
            <span className="text-white/30 text-[11px] font-light tracking-widest tabular-nums">
              {counterCurrent}
              <span className="mx-1.5 text-white/15">/</span>
              {counterTotal}
            </span>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={prev}
                className="w-8 h-8 flex items-center justify-center text-white/25 hover:text-white transition-colors duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} strokeWidth={1} />
              </button>
              <button
                onClick={next}
                className="w-8 h-8 flex items-center justify-center text-white/25 hover:text-white transition-colors duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={16} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile swipe arrows (large touch targets, semi-transparent) */}
        <button
          onClick={prev}
          className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-14 h-20 flex items-center justify-start pl-3 z-20 text-white/20 hover:text-white/50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} strokeWidth={1} />
        </button>
        <button
          onClick={next}
          className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-14 h-20 flex items-center justify-end pr-3 z-20 text-white/20 hover:text-white/50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={22} strokeWidth={1} />
        </button>

      </div>
    </section>
  );
}
