import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Play, X } from 'lucide-react';

// Custom Instagram SVG (lucide deprecated theirs)
function IgIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { instagramPosts, type InstagramPost as IPost } from '../../data/instagramPosts';

const INSTAGRAM_URL = 'https://www.instagram.com/samayinnovation/';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};


export default function InstagramSection() {
  const posts = instagramPosts.slice(0, 9);
  const [activeReel, setActiveReel] = useState<string | null>(null);

  // Lock body scroll when reel is open
  useEffect(() => {
    document.body.style.overflow = activeReel ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeReel]);

  return (
    <section className="py-24 md:py-32 bg-[#f3f0ec]">
      <div className="px-6 md:px-16">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4 pb-8 border-b border-[#ddd8d0]"
        >
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#0b1012]/35 block mb-3">
              Follow Our Journey
            </span>
            <h2
              className="text-4xl md:text-5xl font-light text-[#0b1012]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Instagram Gallery
            </h2>
          </div>

          {/* Profile strip */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {[
              { value: '749',   label: 'Posts'     },
              { value: '31.4K', label: 'Followers' },
            ].map((s, i) => (
              <div key={s.label} className={`text-center ${i > 0 ? 'pl-6 md:pl-10 border-l border-[#ddd8d0]' : ''}`}>
                <p
                  className="text-2xl font-light text-[#0b1012] leading-none"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {s.value}
                </p>
                <p className="font-mono text-[9px] tracking-widest uppercase text-[#0b1012]/35 mt-1">
                  {s.label}
                </p>
              </div>
            ))}

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 pl-6 md:pl-10 border-l border-[#ddd8d0]"
            >
              <IgIcon size={14} className="text-[#0b1012]/40 group-hover:text-accent-primary transition-colors duration-300" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#0b1012]/40 group-hover:text-accent-primary transition-colors duration-300">
                @samayinnovation
              </span>
              <ExternalLink size={10} className="text-[#0b1012]/25 group-hover:text-accent-primary transition-colors duration-300" />
            </a>
          </div>
        </motion.div>

        {/* ── Image grid ── */}
        {/* Row 1: 2 wide landscape images */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-3"
        >
          {posts.slice(0, 2).map((post) => (
            <InstagramPost key={post.id} post={post} aspectClass="aspect-[4/3]" onPlayReel={setActiveReel} />
          ))}
        </motion.div>

        {/* Row 2: 3 square images */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-2 md:gap-3 mb-2 md:mb-3"
        >
          {posts.slice(2, 5).map((post) => (
            <InstagramPost key={post.id} post={post} aspectClass="aspect-square" onPlayReel={setActiveReel} />
          ))}
        </motion.div>

        {/* Row 3: 4 square images */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-2 md:gap-3"
        >
          {posts.slice(5, 9).map((post) => (
            <InstagramPost key={post.id} post={post} aspectClass="aspect-square" onPlayReel={setActiveReel} />
          ))}
        </motion.div>

        {/* ── CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 pt-8 border-t border-[#ddd8d0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p
            className="text-xl md:text-2xl font-light text-[#0b1012]"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Stay inspired — follow our daily work.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 flex-shrink-0"
          >
            <IgIcon size={13} className="text-[#0b1012]/40 group-hover:text-accent-primary transition-colors duration-300" />
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#0b1012] group-hover:text-accent-primary transition-colors duration-300">
              Follow on Instagram
            </span>
            <div className="w-8 h-px bg-[#0b1012]/30 group-hover:w-14 group-hover:bg-accent-primary transition-all duration-500" />
            <ArrowRight size={12} className="text-[#0b1012]/30 group-hover:text-accent-primary transition-colors duration-300" />
          </a>
        </motion.div>

      </div>

      {/* ── Reel lightbox ── */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveReel(null)}
          >
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-5 right-5 w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors z-10"
            >
              <X size={18} className="text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-sm aspect-[9/16] bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.instagram.com/${activeReel}/embed/`}
                className="w-full h-full border-0"
                allowFullScreen
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── Single post cell ─────────────────────────────────────────────────────────

function InstagramPost({ post, aspectClass, onPlayReel }: { post: IPost; aspectClass: string; onPlayReel: (id: string) => void }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
      }}
      className="group relative block overflow-hidden cursor-pointer"
      onClick={() => {
        if (post.type === 'reel' && post.embedPath) {
          onPlayReel(post.embedPath);
        } else {
          window.open(post.postUrl, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <div className={`relative overflow-hidden ${aspectClass}`}>
        <img
          src={post.image}
          alt={post.caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
        />

        {/* Reel play badge — always visible on reel posts */}
        {post.type === 'reel' && (
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1">
            <Play size={8} className="text-white fill-white" />
            <span className="font-mono text-[8px] tracking-widest uppercase text-white/80">Reel</span>
          </div>
        )}

        <div className="absolute inset-0 bg-[#0b1012]/0 group-hover:bg-[#0b1012]/55 transition-colors duration-400 flex flex-col items-center justify-center gap-2 p-3">
          {post.type === 'reel' ? (
            <div className="w-10 h-10 border border-white/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:border-accent-primary">
              <Play size={14} className="text-white fill-white ml-0.5" />
            </div>
          ) : (
            <IgIcon size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
          <p className="text-white/80 text-[10px] text-center leading-relaxed font-light line-clamp-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {post.caption}
          </p>
          <span className="font-mono text-[9px] tracking-widest uppercase text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {post.type === 'reel' ? 'Play Reel' : 'View Post'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
