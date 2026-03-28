import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Maximize2, X, ChevronLeft, ChevronRight, ArrowRight, Play, ExternalLink } from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects';
import Button from '../components/ui/Button';
import SEO from '../components/seo/SEO';
import { breadcrumbSchema, projectSchema } from '../components/seo/schemas';

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
      <SEO
        title={`${project.title} — Interior Design Project | Samay Innovation Ahmedabad`}
        description={`${project.description.slice(0, 155)}…`}
        keywords={`${project.tags.join(', ')}, interior design ${project.location}, luxury interior Ahmedabad, Samay Innovation portfolio`}
        path={`/portfolio/${project.slug}`}
        image={project.thumbnail}
        structuredData={[
          projectSchema(project),
          breadcrumbSchema([
            { name: 'Home', url: 'https://samayinnovation.in/' },
            { name: 'Portfolio', url: 'https://samayinnovation.in/portfolio' },
            { name: project.title, url: `https://samayinnovation.in/portfolio/${project.slug}` },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

        {/* Back Button */}
        <Link
          to="/portfolio"
          className="absolute top-20 left-4 md:left-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
        >
          <ArrowLeft size={18} className="text-white" />
        </Link>

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-8 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-light tracking-[0.25em] uppercase mb-4">
                {project.flag ? `${project.flag} ` : ''}{project.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 md:mb-6 leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3 md:gap-6 text-white/80 text-xs md:text-sm">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="flex-shrink-0" />
                  <span className="truncate max-w-[160px] md:max-w-none">{project.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="flex-shrink-0" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Maximize2 size={13} className="flex-shrink-0" />
                  <span>{project.size}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-10 md:py-20 bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">

          {/* Mobile stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border-light dark:bg-border-dark mb-8 md:hidden overflow-hidden rounded-xl">
            {[
              { label: 'Category', value: project.category },
              { label: 'Year', value: String(project.year) },
              { label: 'Size', value: project.size },
              { label: 'Status', value: project.status },
            ].map((item) => (
              <div key={item.label} className="bg-white dark:bg-dark-bg-primary px-4 py-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-text-tertiary dark:text-dark-text-tertiary mb-1">{item.label}</p>
                <p className="text-sm font-light text-text-primary dark:text-dark-text-primary capitalize">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-14">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-[10px] font-light tracking-[0.35em] uppercase text-text-tertiary dark:text-dark-text-tertiary mb-3">
                  OVERVIEW
                </h2>
                <p className="text-base md:text-xl font-light text-text-primary dark:text-dark-text-primary mb-6 md:mb-8 leading-relaxed">
                  {project.description}
                </p>

                {project.challenges && (
                  <div className="mb-6 md:mb-8 pl-4 border-l-2 border-accent-primary/30">
                    <h3 className="text-sm font-light tracking-wide uppercase text-text-tertiary dark:text-dark-text-tertiary mb-2">
                      Challenges
                    </h3>
                    <p className="text-sm md:text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                )}

                {project.solutions && (
                  <div className="pl-4 border-l-2 border-accent-primary/60">
                    <h3 className="text-sm font-light tracking-wide uppercase text-text-tertiary dark:text-dark-text-tertiary mb-2">
                      Solutions
                    </h3>
                    <p className="text-sm md:text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                      {project.solutions}
                    </p>
                  </div>
                )}

                {/* Tags — mobile */}
                {project.tags && project.tags.length > 0 && (
                  <div className="mt-6 md:hidden">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-border-light dark:border-border-dark text-[10px] tracking-widest uppercase text-text-secondary dark:text-dark-text-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar — desktop only */}
            <div className="lg:col-span-1 hidden md:block">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-bg-secondary dark:bg-dark-bg-secondary p-8 sticky top-28"
              >
                <h3 className="text-[10px] font-light tracking-[0.35em] uppercase text-text-tertiary dark:text-dark-text-tertiary mb-6">
                  PROJECT DETAILS
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Category', value: project.category },
                    { label: 'Location', value: project.location },
                    { label: 'Year', value: String(project.year) },
                    { label: 'Size', value: project.size },
                    { label: 'Status', value: project.status },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-4 py-3 border-b border-border-light dark:border-border-dark last:border-0">
                      <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary flex-shrink-0">{item.label}</p>
                      <p className="text-xs font-light text-text-primary dark:text-dark-text-primary text-right capitalize">{item.value}</p>
                    </div>
                  ))}
                </div>
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-light tracking-[0.35em] uppercase text-text-tertiary dark:text-dark-text-tertiary mb-3">TAGS</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-border-light dark:border-border-dark text-[10px] text-text-secondary dark:text-dark-text-secondary">
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

      {/* Video Tour */}
      {project.videoUrl && (
        <VideoSection videoUrl={project.videoUrl} projectTitle={project.title} />
      )}

      {/* Image Gallery */}
      <section className="py-10 md:py-20 bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 md:mb-10">
            <div>
              <h2 className="text-[10px] font-light tracking-[0.35em] uppercase text-text-tertiary dark:text-dark-text-tertiary mb-1">GALLERY</h2>
              <h3 className="text-xl md:text-3xl font-light text-text-primary dark:text-dark-text-primary">Project Images</h3>
            </div>
            {/* Layout Toggle */}
            <div className="flex gap-1.5">
              {(['masonry', 'grid'] as const).map((layout) => (
                <button
                  key={layout}
                  onClick={() => setImageLayout(layout)}
                  className={`px-3 md:px-4 py-2 text-[10px] md:text-xs font-light tracking-wider uppercase transition-all ${
                    imageLayout === layout
                      ? 'bg-text-primary dark:bg-dark-text-primary text-white dark:text-dark-bg-primary'
                      : 'border border-text-primary dark:border-dark-text-primary text-text-primary dark:text-dark-text-primary'
                  }`}
                >
                  {layout}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry */}
          {imageLayout === 'masonry' && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-5 space-y-3 md:space-y-5">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
                  className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${project.title} - Image ${index + 1}`} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      <Maximize2 size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm px-2 py-0.5 text-white/70 text-[10px] tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Grid */}
          {imageLayout === 'grid' && (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
                  className="group relative aspect-square overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${project.title} - Image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      <Maximize2 size={16} className="text-white" />
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
      <section className="py-10 md:py-20 bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6 md:mb-10">
            <div>
              <h2 className="text-[10px] font-light tracking-[0.35em] uppercase text-text-tertiary dark:text-dark-text-tertiary mb-1">NEXT PROJECT</h2>
              <h3 className="text-xl md:text-3xl font-light text-text-primary dark:text-dark-text-primary">Explore More Work</h3>
            </div>
            <Link to="/portfolio" className="text-[10px] tracking-[0.25em] uppercase text-text-tertiary dark:text-dark-text-tertiary hover:text-accent-primary transition-colors flex items-center gap-1.5">
              All Projects <ArrowRight size={10} />
            </Link>
          </div>

          <Link
            to={`/portfolio/${nextProject.slug}`}
            className="group relative block h-[240px] sm:h-[360px] md:h-[480px] overflow-hidden"
          >
            <img src={nextProject.thumbnail} alt={nextProject.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            {/* Gold bottom line */}
            <motion.div className="absolute bottom-0 left-0 h-[2px] bg-accent-primary w-0 group-hover:w-full transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent-primary mb-2">Up Next</p>
              <h4 className="text-xl md:text-3xl font-light text-white mb-2 md:mb-3">{nextProject.title}</h4>
              <span className="inline-flex items-center gap-2 text-white/60 text-xs tracking-wider uppercase group-hover:text-accent-primary transition-colors duration-300">
                View Project <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? match[1] : null;
}

// ─── Video Section ───────────────────────────────────────────────────────────

interface VideoSectionProps {
  videoUrl: string;
  projectTitle: string;
}

function VideoSection({ videoUrl, projectTitle }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = extractYouTubeId(videoUrl);

  if (!videoId) return null;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`;

  return (
    <section className="py-24 bg-[#0e0e0e]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-[10px] font-light tracking-[0.4em] uppercase text-[#C9A97A] mb-4 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-[#C9A97A]" />
            Video Tour
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Experience the Space
          </h2>
        </motion.div>

        {/* Video Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#C9A97A]/60 z-10 pointer-events-none" />
          <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-[#C9A97A]/60 z-10 pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-[#C9A97A]/60 z-10 pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#C9A97A]/60 z-10 pointer-events-none" />

          {/* 16:9 container */}
          <div className="relative aspect-video bg-black overflow-hidden">
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Thumbnail */}
                  <img
                    src={thumbnailUrl}
                    alt={`${projectTitle} video tour`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                  {/* Pulsing rings + play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Outer ring 1 */}
                    <motion.div
                      animate={{ scale: [1, 1.35, 1], opacity: [0.25, 0, 0.25] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute w-40 h-40 rounded-full border border-[#C9A97A]/50"
                    />
                    {/* Outer ring 2 */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0, 0.15] }}
                      transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute w-40 h-40 rounded-full border border-[#C9A97A]/30"
                    />

                    {/* Play circle */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative w-[72px] h-[72px] rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-[#C9A97A]/30 group-hover:border-[#C9A97A] transition-colors duration-300"
                    >
                      <Play size={26} className="text-white ml-1" fill="currentColor" />
                    </motion.div>
                  </div>

                  {/* Bottom info strip */}
                  <div className="absolute bottom-0 left-0 right-0 px-8 py-7">
                    <p className="text-[10px] font-light tracking-[0.35em] uppercase text-[#C9A97A] mb-1">
                      Client Walkthrough
                    </p>
                    <p className="text-white text-xl font-light leading-snug">
                      {projectTitle}
                    </p>
                  </div>

                  {/* Top-right "PLAY" label */}
                  <div className="absolute top-6 right-8 flex items-center gap-2">
                    <span className="text-[10px] font-light tracking-[0.3em] uppercase text-white/50">
                      Watch Tour
                    </span>
                    <div className="w-4 h-px bg-white/30" />
                  </div>
                </motion.div>
              ) : (
                <motion.iframe
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={embedUrl}
                  title={`${projectTitle} — Video Tour`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Watch on YouTube link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex items-center justify-between"
        >
          <p className="text-sm font-light text-white/40">
            Full project walkthrough by the client
          </p>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-light tracking-[0.2em] uppercase text-[#C9A97A] hover:text-white transition-colors duration-300"
          >
            Watch on YouTube
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Lightbox Component ───────────────────────────────────────────────────────

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
      className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
      >
        <X size={20} className="text-white" />
      </button>

      {/* Desktop side nav */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="hidden md:flex absolute left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center hover:bg-white/20 transition-all z-10"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="hidden md:flex absolute right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center hover:bg-white/20 transition-all z-10"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Image */}
      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="max-w-[92vw] max-h-[75vh] md:max-h-[88vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Mobile bottom bar: counter + nav */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4 md:hidden" onClick={(e) => e.stopPropagation()}>
        <button onClick={onPrev} className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center active:bg-white/20">
          <ChevronLeft size={20} className="text-white" />
        </button>
        <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs tracking-widest">
          {currentIndex + 1} / {images.length}
        </span>
        <button onClick={onNext} className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center active:bg-white/20">
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      {/* Desktop counter */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-widest">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}
