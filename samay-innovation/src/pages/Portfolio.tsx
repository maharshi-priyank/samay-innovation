import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { projects, getProjectsByCategory } from '../data/projects';
import PageHeader from '../components/ui/PageHeader';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'retail', name: 'Retail' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    setFilteredProjects(getProjectsByCategory(activeCategory));
  }, [activeCategory]);

  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title="Portfolio" 
        subtitle="OUR WORK"
      />

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-dark-bg-primary border-b border-border-light dark:border-border-dark sticky top-20 z-40 backdrop-blur-md bg-white/95 dark:bg-dark-bg-primary/95">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 text-xs font-light tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
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

      {/* Projects Grid */}
      <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
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

  // Auto-scroll images on hover
  useEffect(() => {
    if (!isHovered) {
      setCurrentImageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative h-[500px] overflow-hidden bg-bg-tertiary dark:bg-dark-bg-tertiary"
    >
      <Link to={`/portfolio/${project.slug}`} className="block h-full">
        {/* Image Carousel */}
        <div className="relative h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={project.title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: isHovered ? 1.05 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Image Counter */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 right-6 flex gap-1"
            >
              {project.images.map((_: any, idx: number) => (
                <div
                  key={idx}
                  className={`h-1 transition-all duration-300 ${
                    idx === currentImageIndex ? 'w-8 bg-white' : 'w-1 bg-white/50'
                  }`}
                />
              ))}
            </motion.div>
          )}

          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-light tracking-wider uppercase">
              {project.category}
            </span>
          </div>

          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            {/* Arrow Icon - appears on hover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center"
            >
              <ArrowRight size={20} className="text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-3xl font-light text-white mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              {project.title}
            </h3>

            {/* Meta Info - appears on hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-4 text-white/80 text-xs font-light tracking-wider uppercase"
            >
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize2 size={14} />
                <span>{project.size}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
