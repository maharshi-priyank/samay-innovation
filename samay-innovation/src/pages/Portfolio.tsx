import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Maximize2, Globe } from 'lucide-react';
import { projects, getProjectsByCategory } from '../data/projects';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/seo/SEO';
import { breadcrumbSchema } from '../components/seo/schemas';

const categories = [
  { id: 'all', name: 'All Projects' },
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
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    const india = getProjectsByCategory(activeCategory).filter((p) => p.region !== 'international');
    setFilteredProjects(india);
  }, [activeCategory]);

  return (
    <div>
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

      <PageHeader title="Portfolio" subtitle="OUR WORK" />

      {/* Filter Section */}
      <section className="py-4 md:py-6 bg-white dark:bg-dark-bg-primary border-b border-border-light dark:border-border-dark sticky top-20 z-40 backdrop-blur-md bg-white/95 dark:bg-dark-bg-primary/95">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 px-4 md:px-8 md:justify-center min-w-max md:min-w-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 text-[10px] md:text-xs font-light tracking-widest uppercase transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-text-primary dark:bg-dark-text-primary text-white dark:text-dark-bg-primary'
                    : 'border border-text-primary dark:border-dark-text-primary text-text-primary dark:text-dark-text-primary hover:bg-text-primary hover:text-white dark:hover:bg-dark-text-primary dark:hover:text-dark-bg-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* India Projects Grid */}
      <section className="py-6 md:py-16 bg-[#0d0d0d] md:bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isHovered={hoveredProject === project.id}
                  onHover={() => setHoveredProject(project.id)}
                  onLeave={() => setHoveredProject(null)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-text-secondary dark:text-dark-text-secondary">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── International Projects Section ── */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden relative">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-custom relative z-10">
          {/* Section header */}
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
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              International Projects
            </h2>
            <p className="text-white/40 text-sm max-w-lg leading-relaxed">
              Samay Innovation's design language extends beyond India — delivering award-winning interiors across Europe and the United States.
            </p>
          </motion.div>

          {/* International cards — full-width stacked */}
          <div className="space-y-6">
            {internationalProjects.map((project, index) => (
              <InternationalCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredProject === project.id}
                onHover={() => setHoveredProject(project.id)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface ProjectCardProps {
  project: any;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ProjectCard({ project, index, isHovered, onHover, onLeave }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isHovered) { setCurrentImageIndex(0); return; }
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="group block"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        data-cursor-image=""
      >
        {/* ── MOBILE CARD ── */}
        <div className="md:hidden relative overflow-hidden bg-[#111111]">
          {/* Full bleed image */}
          <div className="relative h-[260px] overflow-hidden">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient — heavier at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-transparent" />

            {/* Index top-left */}
            <span className="absolute top-4 left-4 text-[9px] font-light tracking-[0.45em] text-white/40">{num}</span>

            {/* Category top-right */}
            <span className="absolute top-4 right-4 px-2.5 py-1 bg-black/50 backdrop-blur-sm border border-white/10 text-white/60 text-[9px] tracking-[0.2em] uppercase">
              {project.category}
            </span>
          </div>

          {/* Info — sits flush against gradient bottom */}
          <div className="px-5 pt-3 pb-5 flex items-end justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-[17px] font-light text-white leading-snug tracking-wide">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 mt-1.5">
                <MapPin size={9} className="text-accent-primary flex-shrink-0" />
                <span className="text-[10px] text-white/40 font-light tracking-wide truncate">{project.location}</span>
                <span className="text-white/20 text-[10px]">·</span>
                <span className="text-[10px] text-white/40 font-light">{project.year}</span>
              </div>
            </div>
            {/* Gold arrow */}
            <div className="flex-shrink-0 w-9 h-9 border border-accent-primary/60 flex items-center justify-center">
              <ArrowRight size={14} className="text-accent-primary" />
            </div>
          </div>

          {/* Gold bottom line */}
          <div className="h-[1px] bg-gradient-to-r from-accent-primary/60 via-accent-primary/20 to-transparent" />
        </div>

        {/* ── DESKTOP CARD (hover overlay) ── */}
        <div className="hidden md:block relative h-[480px] overflow-hidden bg-neutral-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: isHovered ? 1.06 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

          {/* Gold bottom line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-accent-primary"
            initial={{ width: '0%' }}
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          />

          {/* Top row */}
          <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
            <span className="text-[10px] font-light tracking-[0.4em] text-white/50">{num}</span>
            <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/15 text-white/70 text-[10px] font-light tracking-[0.25em] uppercase">
              {project.category}
            </span>
          </div>

          {/* Image dots on hover */}
          <motion.div
            className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.images.map((_: any, idx: number) => (
              <div key={idx} className={`h-[3px] rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-5 bg-accent-primary' : 'w-1.5 bg-white/30'}`} />
            ))}
          </motion.div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-7">
            <h3 className="text-2xl md:text-3xl font-light text-white leading-snug group-hover:-translate-y-1 transition-transform duration-500">
              {project.title}
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 12 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-5 mt-3 text-white/55 text-[11px] font-light tracking-[0.15em] uppercase"
            >
              <span className="flex items-center gap-1.5"><MapPin size={10} />{project.location}</span>
              <span className="w-px h-3 bg-white/20" />
              <span className="flex items-center gap-1.5"><Calendar size={10} />{project.year}</span>
              <span className="w-px h-3 bg-white/20" />
              <span className="flex items-center gap-1.5"><Maximize2 size={10} />{project.size}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -8 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="flex items-center gap-2 mt-4 text-accent-primary text-[10px] tracking-[0.3em] uppercase font-light"
            >
              <span>View Project</span>
              <ArrowRight size={11} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

interface InternationalCardProps {
  project: any;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function InternationalCard({ project, index, isHovered, onHover, onLeave }: InternationalCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isHovered) { setCurrentImageIndex(0); return; }
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="group block relative overflow-hidden rounded-2xl border border-white/10 hover:border-accent-primary/40 transition-colors duration-500"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        data-cursor-image=""
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

          {/* Image side */}
          <div className="relative h-64 lg:h-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={project.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: isHovered ? 1.05 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-transparent lg:hidden" />

            {/* Flag badge */}
            <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
              <span className="text-lg leading-none">{project.flag}</span>
              <span className="text-white/80 text-xs font-light tracking-widest uppercase">{project.country}</span>
            </div>

            {/* Image dots */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-5 left-5 flex gap-1.5"
              >
                {project.images.map((_: any, idx: number) => (
                  <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-accent-primary' : 'w-1.5 bg-white/40'}`} />
                ))}
              </motion.div>
            )}
          </div>

          {/* Content side */}
          <div className="bg-[#111111] p-8 md:p-12 flex flex-col justify-between">
            <div>
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <Globe size={12} className="text-accent-primary" />
                <span className="text-xs font-light tracking-[0.3em] uppercase text-accent-primary">International Project</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-3">
                {project.description}
              </p>

              {/* Meta */}
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

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag: string) => (
                  <span key={tag} className="px-3 py-1 border border-white/10 text-white/40 text-[10px] tracking-widest uppercase rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-8 flex items-center gap-3 text-accent-primary text-xs tracking-[0.2em] uppercase font-light"
              animate={{ x: isHovered ? 6 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>View Project</span>
              <ArrowRight size={14} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
