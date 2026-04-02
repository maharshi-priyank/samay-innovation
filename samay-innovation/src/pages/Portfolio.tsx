import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, MapPin } from 'lucide-react';
import { projects, getProjectsByCategory } from '../data/projects';
import SEO from '../components/seo/SEO';
import { breadcrumbSchema } from '../components/seo/schemas';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'retail', name: 'Retail' },
];

const internationalProjects = projects.filter((p) => p.region === 'international');

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(
    projects.filter((p) => p.region !== 'international')
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    setFilteredProjects(
      getProjectsByCategory(activeCategory).filter((p) => p.region !== 'international')
    );
  }, [activeCategory]);

  return (
    <div className="bg-[#f3f0ec]">
      <SEO
        title="Interior Design Portfolio — Luxury Projects in Ahmedabad, Gujarat & USA"
        description="Browse Samay Innovation's portfolio of luxury interior design projects."
        keywords="interior design portfolio Ahmedabad, luxury home design projects Gujarat"
        path="/portfolio"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: 'https://samayinnovation.in/' },
          { name: 'Portfolio', url: 'https://samayinnovation.in/portfolio' },
        ])}
      />

      {/* ── Page Header ── */}
      <section className="pt-32 pb-12 px-6 md:px-16 border-b border-[#ddd8d0]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#0b1012]/40 block mb-3">
            Our Work
          </span>
          <h1
            className="text-5xl md:text-7xl font-light text-[#0b1012] leading-none"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Portfolio
          </h1>
        </motion.div>
      </section>

      {/* ── Filter bar ── */}
      <section className="sticky top-0 z-40 bg-[#f3f0ec]/95 backdrop-blur-sm border-b border-[#ddd8d0]">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-0 px-6 md:px-16 min-w-max md:min-w-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-4 text-[11px] font-mono tracking-[0.3em] uppercase whitespace-nowrap transition-colors duration-200 ${
                  activeCategory === cat.id
                    ? 'text-[#0b1012]'
                    : 'text-[#0b1012]/35 hover:text-[#0b1012]/70'
                }`}
              >
                {cat.name}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="portfolio-filter"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-primary"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── India projects ── */}
      <section className="py-4 px-6 md:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-[#0b1012]/30 text-sm font-mono tracking-widest uppercase">
                  No projects in this category.
                </p>
              </div>
            ) : (
              <div>
                {filteredProjects.map((project, index) => (
                  <ProjectRow
                    key={project.id}
                    project={project}
                    index={index}
                    isHovered={hoveredId === project.id}
                    onHover={() => setHoveredId(project.id)}
                    onLeave={() => setHoveredId(null)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── International ── */}
      <InternationalSection />
    </div>
  );
}

/* ── Project Row ── */
interface RowProps {
  project: (typeof projects)[0];
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ProjectRow({ project, index, isHovered, onHover, onLeave }: RowProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="group flex items-center gap-6 md:gap-10 py-5 md:py-6 border-b border-[#ddd8d0] hover:border-[#0b1012]/20 transition-colors duration-300"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <span className="text-[10px] font-mono text-[#0b1012]/25 flex-shrink-0 w-8">{num}</span>

        {/* Thumbnail — mobile only */}
        <div className="md:hidden flex-shrink-0 w-16 h-12 overflow-hidden">
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3
            className={`text-lg md:text-2xl font-light leading-snug transition-colors duration-300 truncate ${isHovered ? 'text-accent-primary' : 'text-[#0b1012]'}`}
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-3 mt-1 flex-wrap">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#0b1012]/35">{project.category}</span>
            <span className="text-[#0b1012]/20 text-[10px]">·</span>
            <span className="text-[10px] font-mono text-[#0b1012]/35 flex items-center gap-1">
              <MapPin size={8} />{project.location}
            </span>
            <span className="text-[#0b1012]/20 text-[10px]">·</span>
            <span className="text-[10px] font-mono text-[#0b1012]/35">{project.year}</span>
          </div>
        </div>

        {/* Desktop: hover image + arrow */}
        <div className="hidden md:flex items-center gap-6">
          <div className="w-32 h-20 overflow-hidden flex-shrink-0 bg-[#ede9e3]">
            <AnimatePresence>
              {isHovered && (
                <motion.img
                  key={project.id}
                  src={project.images[0]}
                  alt={project.title}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="w-full h-full object-cover"
                />
              )}
            </AnimatePresence>
          </div>
          <ArrowRight
            size={16}
            className={`flex-shrink-0 transition-all duration-300 ${isHovered ? 'text-accent-primary translate-x-1' : 'text-[#0b1012]/20'}`}
          />
        </div>

        {/* Mobile arrow */}
        <ArrowRight
          size={14}
          className={`md:hidden flex-shrink-0 transition-colors duration-300 ${isHovered ? 'text-accent-primary' : 'text-[#0b1012]/20'}`}
        />
      </Link>
    </motion.div>
  );
}

/* ── International Section ── */
function InternationalSection() {
  return (
    <section className="py-24 bg-[#0b1012] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="px-6 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 border-b border-white/8 pb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe size={10} className="text-accent-primary" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-accent-primary">Global Reach</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            International Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {internationalProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                to={`/portfolio/${project.slug}`}
                className="group block relative overflow-hidden border border-white/8 hover:border-accent-primary/30 transition-colors duration-500"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1012] via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/15 px-3 py-1.5">
                    <span className="text-base leading-none">{project.flag}</span>
                    <span className="text-white/70 text-[10px] font-mono tracking-widest uppercase">{project.country}</span>
                  </div>
                </div>
                <div className="p-6 bg-[#111315]">
                  <p className="text-[10px] font-mono tracking-[0.35em] uppercase text-accent-primary mb-2">
                    International · {project.category}
                  </p>
                  <h3
                    className="text-2xl font-light text-white mb-3 group-hover:text-accent-primary/90 transition-colors duration-300"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[10px] font-mono text-white/30 tracking-widest uppercase">
                      <span>{project.location}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>
                    <ArrowRight size={14} className="text-white/20 group-hover:text-accent-primary group-hover:translate-x-1 transition-all duration-300" />
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
