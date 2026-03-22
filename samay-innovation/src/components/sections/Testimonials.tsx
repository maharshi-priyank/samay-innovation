import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase, type Review } from '../../lib/supabase';

const FALLBACK = [
  {
    id: 'f1', name: 'Sadhna Shah', role: 'Homeowner', rating: 5,
    review: 'I am glad that I have come across you and have your recommendation from one of my friends. What I want for my house is what you actually give in return. A big thank you for letting my dream come true. Kudos to Samay Innovation!',
    project: 'Residential Interior',
  },
  {
    id: 'f2', name: 'Ashwin Shukla', role: 'Homeowner', rating: 5,
    review: "We breathe relaxed in our home because we have perfect interior designing, perfect color combination, and everything is just perfect as we dreamt. I don't have words to express my gratitude to Samay Innovation!",
    project: 'Home Interior',
  },
  {
    id: 'f3', name: 'Amit Shah', role: 'Business Owner', rating: 5,
    review: 'Technically what we want is almost impossible within the space we have, but Seme Nadvi makes it happen for us! My employees and I are very happy to have such an amazing, comfortable, and relaxing working space.',
    project: 'Office Interior',
  },
  {
    id: 'f4', name: 'Amit Agrawal', role: 'Client', rating: 5,
    review: 'Samay Innovations has performed and delivered for us in an efficient and professional fashion. The design talent is exceptional and has given us unique designs and interior design as we want.',
    project: 'Interior Design',
  },
];

type T = { id: string; name: string; role: string | null; review: string; project: string | null; rating: number };

function toT(r: Review): T {
  return { id: r.id, name: r.name, role: r.role, review: r.review, project: r.project, rating: r.rating };
}

export default function Testimonials() {
  const [list, setList]   = useState<T[]>(FALLBACK);
  const [idx, setIdx]     = useState(0);
  const [dir, setDir]     = useState(1);

  useEffect(() => {
    supabase.from('reviews').select('*').eq('approved', true).order('created_at', { ascending: false })
      .then(({ data }) => { if (data && data.length > 0) { setList((data as Review[]).map(toT)); setIdx(0); } });
  }, []);

  function go(next: number) {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  }
  const prev = () => go((idx - 1 + list.length) % list.length);
  const next = () => go((idx + 1) % list.length);
  const t = list[idx];

  return (
    <section className="relative py-28 bg-[#111111] overflow-hidden">

      {/* Faint grid texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Large faint "T" watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[320px] font-light text-white/[0.02] leading-none select-none pointer-events-none pr-8 hidden lg:block">
        T
      </div>

      <div className="container-custom relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px w-12 bg-accent-primary" />
          <span className="text-xs font-light tracking-[0.35em] uppercase text-accent-primary">
            Testimonials
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

          {/* ── Left: Quote area ── */}
          <div>
            {/* Decorative quote mark */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[120px] leading-none text-accent-primary/20 font-serif mb-2 select-none"
              aria-hidden
            >
              "
            </motion.div>

            {/* Quote */}
            <div className="overflow-hidden min-h-[180px] relative">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={t.id}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed"
                >
                  {t.review}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-8" />

            {/* Client info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id + '-info'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-5"
              >
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full border border-accent-primary/40 bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-primary text-lg font-light">
                    {t.name.charAt(0)}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-white font-light text-lg leading-tight">{t.name}</p>
                  <p className="text-white/40 text-sm mt-0.5">{t.role}</p>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className={`w-4 h-4 ${s <= t.rating ? 'text-accent-primary' : 'text-white/15'}`}
                      fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Right: Project tag + Navigation ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-between h-full gap-10 lg:pt-2"
          >
            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                What Our<br />Clients Say
              </h2>
              {t.project && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={t.id + '-proj'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="mt-5 inline-flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                    <span className="text-xs font-light tracking-[0.2em] uppercase text-white/50">
                      {t.project}
                    </span>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-6">
              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {list.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === idx
                        ? 'w-8 h-1.5 bg-accent-primary'
                        : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrow buttons + counter */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="w-12 h-12 border border-white/15 flex items-center justify-center text-white/60 hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 border border-white/15 flex items-center justify-center text-white/60 hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
                  aria-label="Next"
                >
                  <ChevronRight size={18} strokeWidth={1.5} />
                </button>
                <span className="text-sm font-light text-white/30 ml-2">
                  <span className="text-white">{String(idx + 1).padStart(2, '0')}</span>
                  {' / '}
                  {String(list.length).padStart(2, '0')}
                </span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
