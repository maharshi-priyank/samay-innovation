import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
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

  useEffect(() => {
    const india = getProjectsByCategory(activeCategory).filter((p) => p.region !== 'international');
    setFilteredProjects(india);
  }, [activeCategory]);

  return (
    <div className="bg-[#0d0d0d]">
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

      {/* ── Filter Bar ── */}
      <section className="sticky top-20 z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/8">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-0 px-6 md:px-0 md:justify-center min-w-max md:min-w-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 md:px-7 py-4 text-[10px] md:text-[11px] font-light tracking-[0.35em] uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'text-accent-primary'
                    : 'text-white/35 hover:text-white/70'
                }`}
              >
                {cat.name}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="filter-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-primary"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── India Projects ── */}
      <section className="py-12 md:py-20 bg-[#0d0d0d]">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <p className="text-white/30 text-sm tracking-widest uppercase">
                No projects in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── International Projects ── */}
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-accent-primary/60" />
              <span className="text-[10px] font-light tracking-[0.45em] uppercase text-accent-primary flex items-center gap-2">
                <Globe size={10} />
                Global Reach
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              International Projects
            </h2>
            <p className="text-white/35 text-sm font-light max-w-md leading-relaxed">
              Samay Innovation's design language extends beyond India — delivering award-winning interiors across Europe and the United States.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
            {internationalProjects.map((project, index) => (
              <InternationalCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) { setImgIdx(0); return; }
    const t = setInterval(() => setImgIdx((p) => (p + 1) % project.images.length), 1800);
    return () => clearInterval(t);
  }, [hovered, project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="group block py-8 md:py-10 border-b border-white/8"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] mb-6">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIdx}
              src={project.images[imgIdx]}
              alt={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
          <span className="absolute top-4 left-4 text-[9px] font-light tracking-[0.45em] text-white/40">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Text */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-px bg-accent-primary/70" />
            <span className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary">
              {project.category}
            </span>
          </div>
          <h3
            className="text-2xl md:text-[1.75rem] font-light text-white leading-tight mb-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {project.title}
          </h3>
          <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mb-4">
            {project.location} &nbsp;·&nbsp; {project.year}
          </p>
          <p className="text-white/50 text-sm font-light leading-relaxed line-clamp-2 mb-6 max-w-md">
            {project.description}
          </p>
          <div className="flex items-center gap-3 text-white/35 group-hover:text-accent-primary transition-colors duration-300">
            <span className="text-[10px] font-light tracking-[0.35em] uppercase">View Project</span>
            <span className="h-px w-5 bg-current group-hover:w-9 transition-all duration-300" />
            <ArrowRight size={12} strokeWidth={1.5} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── International Card ───────────────────────────────────────────────────────

function InternationalCard({ project, index }: { project: any; index: number }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) { setImgIdx(0); return; }
    const t = setInterval(() => setImgIdx((p) => (p + 1) % project.images.length), 1800);
    return () => clearInterval(t);
  }, [hovered, project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="group block py-8 md:py-10 border-b border-white/10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative overflow-hidden aspect-[4/3] mb-6">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIdx}
              src={project.images[imgIdx]}
              alt={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
          {project.flag && (
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1">
              <span className="text-base leading-none">{project.flag}</span>
              <span className="text-white/70 text-[9px] font-light tracking-widest uppercase">{project.country}</span>
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-px bg-accent-primary/70" />
            <span className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary">
              International · {project.category}
            </span>
          </div>
          <h3
            className="text-2xl md:text-[1.75rem] font-light text-white leading-tight mb-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {project.title}
          </h3>
          <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mb-4">
            {project.location} &nbsp;·&nbsp; {project.year}
          </p>
          <p className="text-white/50 text-sm font-light leading-relaxed line-clamp-2 mb-6 max-w-md">
            {project.description}
          </p>
          <div className="flex items-center gap-3 text-white/35 group-hover:text-accent-primary transition-colors duration-300">
            <span className="text-[10px] font-light tracking-[0.35em] uppercase">View Project</span>
            <span className="h-px w-5 bg-current group-hover:w-9 transition-all duration-300" />
            <ArrowRight size={12} strokeWidth={1.5} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
