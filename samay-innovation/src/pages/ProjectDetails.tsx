import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Maximize2, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects';
import Button from '../components/ui/Button';

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLayout, setImageLayout] = useState<'masonry' | 'grid'>('masonry');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <Button variant="outline" href="/portfolio">
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  // Get next project
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Back Button */}
        <Link
          to="/portfolio"
          className="absolute top-24 left-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
        >
          <ArrowLeft size={20} className="text-white" />
        </Link>

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-light tracking-wider uppercase mb-6">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 size={18} />
                  <span>{project.size}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-24 bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
                  OVERVIEW
                </h2>
                <p className="text-xl font-light text-text-primary dark:text-dark-text-primary mb-8 leading-relaxed">
                  {project.description}
                </p>

                {project.challenges && (
                  <div className="mb-8">
                    <h3 className="text-lg font-light text-text-primary dark:text-dark-text-primary mb-3">
                      Challenges
                    </h3>
                    <p className="text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                )}

                {project.solutions && (
                  <div>
                    <h3 className="text-lg font-light text-text-primary dark:text-dark-text-primary mb-3">
                      Solutions
                    </h3>
                    <p className="text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      {project.solutions}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-bg-secondary dark:bg-dark-bg-secondary p-8"
              >
                <h3 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-6">
                  PROJECT DETAILS
                </h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary mb-1">
                      Category
                    </p>
                    <p className="text-sm font-light text-text-primary dark:text-dark-text-primary capitalize">
                      {project.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary mb-1">
                      Location
                    </p>
                    <p className="text-sm font-light text-text-primary dark:text-dark-text-primary">
                      {project.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary mb-1">
                      Year
                    </p>
                    <p className="text-sm font-light text-text-primary dark:text-dark-text-primary">
                      {project.year}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary mb-1">
                      Size
                    </p>
                    <p className="text-sm font-light text-text-primary dark:text-dark-text-primary">
                      {project.size}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary mb-1">
                      Status
                    </p>
                    <p className="text-sm font-light text-text-primary dark:text-dark-text-primary capitalize">
                      {project.status}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <h4 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
                      TAGS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border border-border-light dark:border-border-dark text-xs text-text-secondary dark:text-dark-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-2">
                GALLERY
              </h2>
              <h3 className="text-3xl font-light text-text-primary dark:text-dark-text-primary">
                Project Images
              </h3>
            </div>

            {/* Layout Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setImageLayout('masonry')}
                className={`px-4 py-2 text-xs font-light tracking-wider uppercase transition-all ${
                  imageLayout === 'masonry'
                    ? 'bg-text-primary text-white'
                    : 'border border-text-primary text-text-primary hover:bg-text-primary hover:text-white'
                }`}
              >
                Masonry
              </button>
              <button
                onClick={() => setImageLayout('grid')}
                className={`px-4 py-2 text-xs font-light tracking-wider uppercase transition-all ${
                  imageLayout === 'grid'
                    ? 'bg-text-primary text-white'
                    : 'border border-text-primary text-text-primary hover:bg-text-primary hover:text-white'
                }`}
              >
                Grid
              </button>
            </div>
          </div>

          {/* Masonry Layout */}
          {imageLayout === 'masonry' && (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <Maximize2 size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Grid Layout */}
          {imageLayout === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <Maximize2 size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <Lightbox
            images={project.images}
            currentIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={() => setSelectedImage((selectedImage + 1) % project.images.length)}
            onPrev={() =>
              setSelectedImage((selectedImage - 1 + project.images.length) % project.images.length)
            }
          />
        )}
      </AnimatePresence>

      {/* Next Project */}
      <section className="py-24 bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
              NEXT PROJECT
            </h2>
            <h3 className="text-4xl font-light text-text-primary dark:text-dark-text-primary">
              Explore More Work
            </h3>
          </div>

          <Link
            to={`/portfolio/${nextProject.slug}`}
            className="group relative block h-[500px] overflow-hidden"
          >
            <img
              src={nextProject.thumbnail}
              alt={nextProject.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-4xl font-light text-white mb-4">{nextProject.title}</h4>
                <span className="inline-flex items-center gap-2 text-white/90 text-sm">
                  View Project <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Lightbox Component
interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Image */}
      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}
