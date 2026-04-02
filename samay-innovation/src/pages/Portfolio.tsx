import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Globe } from 'lucide-react';
import { projects } from '../data/projects';
import SEO from '../components/seo/SEO';
import { breadcrumbSchema } from '../components/seo/schemas';

const indiaProjects = projects.filter((p) => p.region !== 'international');
const internationalProjects = projects.filter((p) => p.region === 'international');

export default function Portfolio() {
  return (
    <div className="bg-[#0a0a0a]">
      <SEO
        title="Interior Design Portfolio — Luxury Projects in Ahmedabad, Gujarat & USA"
        description="Browse Samay Innovation's portfolio of luxury interior design projects — residential villas, 4BHK apartments, farmhouses, commercial spaces, and international projects in Italy and the USA."
        keywords="interior design portfolio Ahmedabad, luxury home design projects Gujarat, villa interior design portfolio, 4BHK flat interior Ahmedabad, farmhouse interior design India, US restaurant interior design, Italy villa interior"
        path="/portfolio"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: 'https://samayinnovation.in/' },
          { name: 'Portfolio', url: 'https://samayinnovation.in/portfolio' },
        ])}
      />

      {/* ── Header ── */}
      <section className="pt-32 pb-16 px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-primary font-light">Our Work</span>
          <h1 className="mt-3 text-5xl md:text-7xl font-light text-white leading-none tracking-tight">
            Portfolio
          </h1>
          <p className="mt-4 text-white/40 text-sm font-light max-w-md leading-relaxed">
            A curated selection of spaces designed for living, working, and gathering — from Ahmedabad to the world.
          </p>
        </motion.div>
      </section>

      {/* ── Mobile: vertical cards ── */}
      <section className="md:hidden px-4 pb-16 space-y-4">
        {indiaProjects.map((project, i) => (
          <MobileCard key={project.id} project={project} index={i} />
        ))}
      </section>

      {/* ── Desktop: horizontal scroll panels ── */}
      <HorizontalScroll projects={indiaProjects} />

      {/* ── International Projects ── */}
      <InternationalSection />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Horizontal Scroll (desktop only)
───────────────────────────────────────────── */
function HorizontalScroll({ projects }: { projects: typeof indiaProjects }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const n = projects.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Translate the track from 0 to -(n-1)*100vw
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `${-(n - 1) * 100}vw`]
  );

  // Progress bar width
  const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={containerRef}
      className="hidden md:block relative"
      style={{ height: `${n * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Horizontal track */}
        <motion.div
          className="flex h-full"
          style={{ x, width: `${n * 100}vw` }}
        >
          {projects.map((project, index) => (
            <HorizontalPanel
              key={project.id}
              project={project}
              index={index}
              total={n}
            />
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
          <motion.div
            className="h-full bg-accent-primary"
            style={{ width: barWidth }}
          />
        </div>
      </div>
    </div>
  );
}

interface PanelProps {
  project: (typeof indiaProjects)[0];
  index: number;
  total: number;
}

function HorizontalPanel({ project, index, total }: PanelProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="relative w-screen h-screen flex-shrink-0 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.images[0]})` }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

      {/* Index */}
      <div className="absolute top-10 left-10 text-[10px] tracking-[0.45em] text-white/30 font-light">
        {num} / {String(total).padStart(2, '0')}
      </div>

      {/* Category badge */}
      <div className="absolute top-10 right-10">
        <span className="px-3 py-1.5 border border-white/15 text-white/50 text-[9px] tracking-[0.3em] uppercase font-light">
          {project.category}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-14 left-12 right-12">
        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase text-accent-primary font-light mb-3">
            {project.category}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {project.title}
          </h2>
          <div className="flex items-center gap-4 text-white/40 text-xs font-light tracking-widest uppercase mb-8">
            <span className="flex items-center gap-1.5">
              <MapPin size={10} />
              {project.location}
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span>{project.year}</span>
            <span className="w-px h-3 bg-white/20" />
            <span>{project.size}</span>
          </div>

          <Link
            to={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-3 group"
          >
            <span className="text-[10px] tracking-[0.35em] uppercase text-white font-light group-hover:text-accent-primary transition-colors duration-300">
              View Project
            </span>
            <div className="w-8 h-px bg-white/40 group-hover:w-14 group-hover:bg-accent-primary transition-all duration-500" />
            <ArrowRight size={12} className="text-white/40 group-hover:text-accent-primary transition-colors duration-300" />
          </Link>
        </div>
      </div>

      {/* Right edge scroll hint (first panel only) */}
      {index === 0 && (
        <div className="absolute right-12 bottom-1/2 translate-y-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-light rotate-90 whitespace-nowrap">
            Scroll to explore
          </span>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Mobile Card
───────────────────────────────────────────── */
function MobileCard({ project, index }: { project: (typeof indiaProjects)[0]; index: number }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link to={`/portfolio/${project.slug}`} className="group block relative overflow-hidden bg-[#111]">
        <div className="relative h-[260px] overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover group-active:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent" />
          <span className="absolute top-4 left-4 text-[9px] font-light tracking-[0.45em] text-white/40">{num}</span>
          <span className="absolute top-4 right-4 px-2.5 py-1 bg-black/50 backdrop-blur-sm border border-white/10 text-white/60 text-[9px] tracking-[0.2em] uppercase">
            {project.category}
          </span>
        </div>

        <div className="px-5 pt-3 pb-5 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-[17px] font-light text-white leading-snug tracking-wide">{project.title}</h3>
            <div className="flex items-center gap-2 mt-1.5">
              <MapPin size={9} className="text-accent-primary flex-shrink-0" />
              <span className="text-[10px] text-white/40 font-light tracking-wide truncate">{project.location}</span>
              <span className="text-white/20 text-[10px]">·</span>
              <span className="text-[10px] text-white/40 font-light">{project.year}</span>
            </div>
          </div>
          <div className="flex-shrink-0 w-9 h-9 border border-accent-primary/60 flex items-center justify-center">
            <ArrowRight size={14} className="text-accent-primary" />
          </div>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-accent-primary/60 via-accent-primary/20 to-transparent" />
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   International Section
───────────────────────────────────────────── */
function InternationalSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-primary" />
            <span className="text-xs font-light tracking-[0.35em] uppercase text-accent-primary flex items-center gap-2">
              <Globe size={12} />
              Global Reach
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">International Projects</h2>
          <p className="text-white/40 text-sm max-w-lg leading-relaxed">
            Samay Innovation's design language extends beyond India — delivering award-winning interiors across Europe and the United States.
          </p>
        </motion.div>

        <div className="space-y-6">
          {internationalProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Link
                to={`/portfolio/${project.slug}`}
                className="group block relative overflow-hidden rounded-2xl border border-white/10 hover:border-accent-primary/40 transition-colors duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a] hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-transparent lg:hidden" />
                    <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
                      <span className="text-lg leading-none">{project.flag}</span>
                      <span className="text-white/80 text-xs font-light tracking-widest uppercase">{project.country}</span>
                    </div>
                  </div>

                  <div className="bg-[#111111] p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <Globe size={12} className="text-accent-primary" />
                        <span className="text-xs font-light tracking-[0.3em] uppercase text-accent-primary">International Project</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight">{project.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-3">{project.description}</p>
                      <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/10">
                        <div>
                          <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Location</p>
                          <p className="text-white/70 text-xs font-light leading-relaxed">{project.location}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Year</p>
                          <p className="text-white/70 text-xs font-light">{project.year}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Size</p>
                          <p className="text-white/70 text-xs font-light">{project.size}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag: string) => (
                          <span key={tag} className="px-3 py-1 border border-white/10 text-white/40 text-[10px] tracking-widest uppercase rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.div
                      className="mt-8 flex items-center gap-3 text-accent-primary text-xs tracking-[0.2em] uppercase font-light"
                      animate={{ x: 0 }}
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>View Project</span>
                      <ArrowRight size={14} />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
