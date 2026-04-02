import { motion } from 'framer-motion';
import { Instagram, ExternalLink, ArrowRight } from 'lucide-react';
import { instagramPosts, type InstagramPost as IPost } from '../../data/instagramPosts';

const INSTAGRAM_URL = 'https://www.instagram.com/samayinnovation/';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function InstagramSection() {
  // Show max 9 posts for 3×3 grid
  const posts = instagramPosts.slice(0, 9);

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
              <Instagram size={14} strokeWidth={1.5} className="text-[#0b1012]/40 group-hover:text-accent-primary transition-colors duration-300" />
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
            <InstagramPost key={post.id} post={post} aspectClass="aspect-[4/3]" />
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
            <InstagramPost key={post.id} post={post} aspectClass="aspect-square" />
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
            <InstagramPost key={post.id} post={post} aspectClass="aspect-square" />
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
            <Instagram size={13} strokeWidth={1.5} className="text-[#0b1012]/40 group-hover:text-accent-primary transition-colors duration-300" />
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#0b1012] group-hover:text-accent-primary transition-colors duration-300">
              Follow on Instagram
            </span>
            <div className="w-8 h-px bg-[#0b1012]/30 group-hover:w-14 group-hover:bg-accent-primary transition-all duration-500" />
            <ArrowRight size={12} className="text-[#0b1012]/30 group-hover:text-accent-primary transition-colors duration-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

// ─── Single post cell ─────────────────────────────────────────────────────────

function InstagramPost({ post, aspectClass }: { post: IPost; aspectClass: string }) {
  return (
    <motion.a
      variants={{
        hidden:  { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
      }}
      href={post.postUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden"
    >
      <div className={`relative overflow-hidden ${aspectClass}`}>
        <img
          src={post.image}
          alt={post.caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0b1012]/0 group-hover:bg-[#0b1012]/55 transition-colors duration-400 flex flex-col items-center justify-center gap-2 p-3">
          <Instagram
            size={18}
            strokeWidth={1.5}
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <p className="text-white/80 text-[10px] text-center leading-relaxed font-light line-clamp-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {post.caption}
          </p>
          <span className="font-mono text-[9px] tracking-widest uppercase text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Post
          </span>
        </div>
      </div>
    </motion.a>
  );
}
