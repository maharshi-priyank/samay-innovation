import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Ruler, Calendar } from 'lucide-react';
import { projects } from '../../data/projects';
import Button from '../ui/Button';

export default function HorizontalPortfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
      <div className="container-custom mb-12">
        {/* Section Header */}
        <div className="flex items-center gap-8 mb-8">
          <div className="w-12 h-12 rounded-full border-2 border-text-primary dark:border-dark-text-primary flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold">P</span>
          </div>
          <div className="h-px bg-border-light dark:bg-border-dark flex-1" />
        </div>

        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
              PORTFOLIO.
            </h2>
            <p className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary max-w-2xl">
              Featured Projects
            </p>
          </div>
          <Button variant="outline" href="/portfolio" className="hidden md:inline-flex">
            ALL PROJECTS
          </Button>
        </div>
      </div>

      {/* Horizontal Scrollable Projects */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className="flex gap-6 px-4 md:px-8 lg:px-16 pb-4">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[600px] h-[400px] md:h-[500px] overflow-hidden cursor-pointer"
            >
              {/* Project Image */}
              <div className="absolute inset-0">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay - appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content - always visible but enhanced on hover */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Hover Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-8 right-8 w-12 h-12 rounded-full bg-accent-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ArrowRight size={20} className="text-white" />
                </motion.div>

                {/* Project Title */}
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>

                {/* Project Meta - appears on hover */}
                <div className="flex flex-wrap gap-4 text-white/80 text-xs font-light tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {project.area && (
                    <div className="flex items-center gap-2">
                      <Ruler size={14} />
                      <span>{project.area}</span>
                    </div>
                  )}
                  {project.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                  )}
                  {project.status && (
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{project.status}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Button */}
      <div className="container-custom mt-8 md:hidden">
        <Button variant="outline" href="/portfolio" className="w-full">
          ALL PROJECTS
        </Button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
