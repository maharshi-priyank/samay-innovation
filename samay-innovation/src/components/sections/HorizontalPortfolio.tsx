import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const featured = projects.filter((p) => p.featured && p.region !== 'international').slice(0, 6);

export default function HorizontalPortfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoveredProject = featured.find((p) => p.id === hoveredId);

  return (
    <section className="py-24 md:py-32 bg-[#0b1012] relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 border-b border-white/8 pb-8"
        >
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/30 block mb-3">
              Selected Work
            </span>
            <h2
              className="text-4xl md:text-5xl font-light text-white leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden md:flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-white/30 hover:text-accent-primary transition-colors duration-300 group"
          >
            All Projects
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Two-column: list left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Project list */}
          <div>
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group flex items-center justify-between gap-6 py-5 border-b border-white/8 hover:border-white/20 transition-colors duration-300"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="flex items-center gap-5 min-w-0">
                    <span className="text-[10px] font-mono text-white/20 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h3 className={`text-base md:text-lg font-light leading-snug truncate transition-colors duration-300 ${hoveredId === project.id ? 'text-accent-primary' : 'text-white/80 group-hover:text-white'}`}>
                        {project.title}
                      </h3>
                      <p className="text-[11px] font-mono text-white/30 tracking-widest uppercase mt-0.5">
                        {project.category} · {project.year}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={14}
                    className={`flex-shrink-0 transition-all duration-300 ${hoveredId === project.id ? 'text-accent-primary translate-x-1' : 'text-white/20'}`}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <div className="mt-8 md:hidden">
              <Link
                to="/portfolio"
                className="flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-white/40"
              >
                All Projects <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Hover image — desktop only */}
          <div className="hidden md:block sticky top-32 h-[460px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {hoveredProject ? (
                <motion.div
                  key={hoveredProject.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="absolute inset-0"
                >
                  <img
                    src={hoveredProject.images[0]}
                    alt={hoveredProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1012]/60 to-transparent" />
                  {/* Project meta overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] font-mono tracking-[0.35em] uppercase text-accent-primary mb-1">
                      {hoveredProject.category}
                    </p>
                    <p className="text-white font-light text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                      {hoveredProject.title}
                    </p>
                    <p className="text-white/40 text-xs font-mono tracking-widest uppercase mt-0.5">
                      {hoveredProject.location} · {hoveredProject.size}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 border border-white/8 flex items-center justify-center"
                >
                  <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/15">
                    Hover a project
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
