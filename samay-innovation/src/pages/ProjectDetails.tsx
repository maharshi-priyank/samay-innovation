import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ArrowRight, Play, ExternalLink, Maximize2 } from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects';
import Button from '../components/ui/Button';
import SEO from '../components/seo/SEO';
import { breadcrumbSchema, projectSchema } from '../components/seo/schemas';

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0e0e0e]">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Project Not Found</h1>
          <Button variant="outline" href="/portfolio">Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Editorial gallery: full-width → pair → full-width → pair…
  const galleryBlocks: Array<
    | { type: 'full'; img: string; idx: number }
    | { type: 'pair'; imgs: [string, string]; idxs: [number, number] }
  > = [];
  let i = 0;
  while (i < project.images.length) {
    if (galleryBlocks.length % 3 === 0) {
      galleryBlocks.push({ type: 'full', img: project.images[i], idx: i });
      i++;
    } else if (i + 1 < project.images.length) {
      galleryBlocks.push({ type: 'pair', imgs: [project.images[i], project.images[i + 1]], idxs: [i, i + 1] });
      i += 2;
    } else {
      galleryBlocks.push({ type: 'full', img: project.images[i], idx: i });
      i++;
    }
  }

  return (
    <div className="bg-[#0e0e0e]">
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

      {/* ── Hero ── */}
      <section className="relative h-[65vh] md:h-[80vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25" />

        <Link
          to="/portfolio"
          className="absolute top-20 left-5 md:left-8 w-9 h-9 md:w-11 md:h-11 bg-black/25 backdrop-blur-md border border-white/15 flex items-center justify-center hover:border-white/40 transition-all duration-300 z-10"
        >
          <ArrowLeft size={16} className="text-white" strokeWidth={1.5} />
        </Link>

        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-10 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-px bg-accent-primary" />
                <span className="text-[9px] md:text-[10px] font-light tracking-[0.45em] uppercase text-accent-primary">
                  {project.flag ? `${project.flag} ` : ''}{project.category}
                </span>
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-none mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {project.title}
              </h1>
              <p className="text-white/40 text-xs md:text-sm tracking-[0.25em] uppercase">
                {project.location}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stat Strip ── */}
      <div className="border-b border-white/8 bg-[#0e0e0e]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8">
            {[
              { label: 'Category', value: project.category },
              { label: 'Location', value: project.location },
              { label: 'Size', value: project.size },
              { label: 'Year', value: String(project.year) },
            ].map((item) => (
              <div key={item.label} className="px-5 md:px-7 py-5 md:py-6">
                <p className="text-[9px] font-light tracking-[0.35em] uppercase text-white/30 mb-1.5">{item.label}</p>
                <p className="text-sm font-light text-white/80 capitalize leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Project Narrative ── */}
      <section className="py-14 md:py-24 bg-[#0e0e0e]">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-16"
          >
            <p className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary mb-6 flex items-center gap-3">
              <span className="w-5 h-px bg-accent-primary" />
              Design Brief
            </p>
            <p className="text-lg md:text-2xl font-light text-white/80 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {project.challenges && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-10"
            >
              <p className="text-[9px] font-light tracking-[0.45em] uppercase text-white/30 mb-5 flex items-center gap-3">
                <span className="w-5 h-px bg-white/20" />
                Challenges
              </p>
              <p className="text-base font-light text-white/55 leading-relaxed">{project.challenges}</p>
            </motion.div>
          )}

          {project.solutions && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-10"
            >
              <p className="text-[9px] font-light tracking-[0.45em] uppercase text-white/30 mb-5 flex items-center gap-3">
                <span className="w-5 h-px bg-white/20" />
                Solutions
              </p>
              <p className="text-base font-light text-white/55 leading-relaxed">{project.solutions}</p>
            </motion.div>
          )}

          {project.tags && project.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2 pt-4 border-t border-white/8"
            >
              {project.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 border border-white/10 text-white/30 text-[9px] tracking-[0.25em] uppercase">
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Video Tour ── */}
      {project.videoUrl && (
        <VideoSection videoUrl={project.videoUrl} projectTitle={project.title} />
      )}

      {/* ── Editorial Gallery ── */}
      <section className="pb-14 md:pb-24 bg-[#0a0a0a]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-10 md:py-14"
          >
            <p className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary flex items-center gap-3">
              <span className="w-5 h-px bg-accent-primary" />
              Photography
            </p>
          </motion.div>

          <div className="space-y-3 md:space-y-4">
            {galleryBlocks.map((block, bi) => {
              if (block.type === 'full') {
                return (
                  <motion.div
                    key={bi}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative overflow-hidden cursor-pointer"
                    style={{ aspectRatio: '16/7' }}
                    onClick={() => setSelectedImage(block.idx)}
                  >
                    <img src={block.img} alt={`${project.title} — ${block.idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 bg-white/10 backdrop-blur-md flex items-center justify-center">
                        <Maximize2 size={15} className="text-white" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-4 text-white/30 text-[9px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {String(block.idx + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  key={bi}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-2 gap-3 md:gap-4"
                >
                  {block.imgs.map((img, pi) => (
                    <div key={pi} className="group relative overflow-hidden cursor-pointer aspect-[4/3]" onClick={() => setSelectedImage(block.idxs[pi])}>
                      <img src={img} alt={`${project.title} — ${block.idxs[pi] + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-400 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 bg-white/10 backdrop-blur-md flex items-center justify-center">
                          <Maximize2 size={14} className="text-white" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 text-white/30 text-[9px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {String(block.idxs[pi] + 1).padStart(2, '0')}
                      </span>
                    </div>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedImage !== null && (
          <Lightbox
            images={project.images}
            currentIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={() => setSelectedImage((selectedImage + 1) % project.images.length)}
            onPrev={() => setSelectedImage((selectedImage - 1 + project.images.length) % project.images.length)}
          />
        )}
      </AnimatePresence>

      {/* ── Next Project ── */}
      <section className="border-t border-white/8 bg-[#0e0e0e]">
        <div className="container-custom py-14 md:py-20">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[9px] font-light tracking-[0.4em] uppercase text-white/30">Next Project</p>
            <Link to="/portfolio" className="text-[9px] font-light tracking-[0.3em] uppercase text-white/25 hover:text-accent-primary transition-colors flex items-center gap-2">
              All Projects <ArrowRight size={10} />
            </Link>
          </div>

          <Link to={`/portfolio/${nextProject.slug}`} className="group block">
            <div className="relative overflow-hidden aspect-[16/7] mb-6">
              <img src={nextProject.thumbnail} alt={nextProject.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-px bg-accent-primary" />
                  <span className="text-[9px] font-light tracking-[0.4em] uppercase text-accent-primary">{nextProject.category}</span>
                </div>
                <h4 className="text-2xl md:text-4xl font-light text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  {nextProject.title}
                </h4>
                <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mt-2">
                  {nextProject.location} · {nextProject.year}
                </p>
              </div>
              <div className="flex items-center gap-3 text-white/30 group-hover:text-accent-primary transition-colors duration-300 flex-shrink-0 ml-6">
                <span className="hidden md:block text-[10px] font-light tracking-[0.35em] uppercase">View Project</span>
                <ArrowRight size={18} strokeWidth={1} />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

// ─── Video Section ─────────────────────────────────────────────────────────────

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? match[1] : null;
}

function VideoSection({ videoUrl, projectTitle }: { videoUrl: string; projectTitle: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = extractYouTubeId(videoUrl);
  if (!videoId) return null;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`;

  return (
    <section className="py-14 md:py-24 bg-[#080808]">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-10">
          <p className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary flex items-center gap-3">
            <span className="w-5 h-px bg-accent-primary" />
            Video Tour
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="relative aspect-video bg-black overflow-hidden">
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div key="thumb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0 cursor-pointer group" onClick={() => setIsPlaying(true)}>
                <img src={thumbnailUrl} alt={`${projectTitle} video`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div animate={{ scale: [1, 1.35, 1], opacity: [0.2, 0, 0.2] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute w-36 h-36 rounded-full border border-accent-primary/40" />
                  <motion.div whileHover={{ scale: 1.1 }} className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:border-accent-primary group-hover:bg-accent-primary/20 transition-colors duration-300">
                    <Play size={22} className="text-white ml-1" fill="currentColor" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-6 md:px-8 py-6">
                  <p className="text-[9px] font-light tracking-[0.35em] uppercase text-accent-primary mb-1">Client Walkthrough</p>
                  <p className="text-white text-lg font-light">{projectTitle}</p>
                </div>
              </motion.div>
            ) : (
              <motion.iframe key="video" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} src={embedUrl} title={`${projectTitle} — Video Tour`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full border-0" />
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-5 flex items-center justify-end">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-light tracking-[0.25em] uppercase text-accent-primary/60 hover:text-accent-primary transition-colors duration-300">
            Watch on YouTube <ExternalLink size={11} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

interface LightboxProps { images: string[]; currentIndex: number; onClose: () => void; onNext: () => void; onPrev: () => void; }

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-5 md:top-8 md:right-8 w-10 h-10 bg-white/8 border border-white/15 flex items-center justify-center hover:bg-white/15 transition-all z-10">
        <X size={18} className="text-white" strokeWidth={1.5} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="hidden md:flex absolute left-6 text-white/25 hover:text-white transition-colors z-10 p-4">
        <ChevronLeft size={28} strokeWidth={1} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="hidden md:flex absolute right-6 text-white/25 hover:text-white transition-colors z-10 p-4">
        <ChevronRight size={28} strokeWidth={1} />
      </button>
      <motion.img key={currentIndex} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }} src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="max-w-[92vw] max-h-[78vh] md:max-h-[88vh] object-contain" onClick={(e) => e.stopPropagation()} />
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/30 text-[10px] tracking-widest" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-5 md:hidden">
          <button onClick={onPrev} className="text-white/40 hover:text-white transition-colors"><ChevronLeft size={20} strokeWidth={1} /></button>
          <span>{currentIndex + 1} / {images.length}</span>
          <button onClick={onNext} className="text-white/40 hover:text-white transition-colors"><ChevronRight size={20} strokeWidth={1} /></button>
        </div>
        <span className="hidden md:block">{currentIndex + 1} / {images.length}</span>
      </div>
    </motion.div>
  );
}
