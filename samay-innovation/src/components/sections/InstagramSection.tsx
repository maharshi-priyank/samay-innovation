import { motion } from 'framer-motion';
import { Instagram, ExternalLink, MapPin, Award, Sparkles, Newspaper, ArrowRight } from 'lucide-react';
import { instagramPosts } from '../../data/instagramPosts';

const INSTAGRAM_URL = 'https://www.instagram.com/samayinnovation/';

const profileBullets = [
  { icon: Award,     text: 'Award @ House of Commons, UK' },
  { icon: Newspaper, text: 'Featured in Forbes, Vogue, Zee News & more' },
  { icon: MapPin,    text: 'India + USA — Commercial & Residential' },
  { icon: Sparkles,  text: 'Interior Design Studio since inception' },
];

const profileStats = [
  { value: '749',   label: 'Posts' },
  { value: '31.4K', label: 'Followers' },
  { value: '57',    label: 'Following' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden:   { opacity: 0, scale: 0.96 },
  visible:  { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function InstagramSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0b1012] overflow-hidden">
      <div className="px-6 md:px-16">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-white/8 pb-8"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/30 block mb-3">
            Follow Our Journey
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-light text-white"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Instagram Gallery
            </h2>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3"
            >
              <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-accent-primary group-hover:text-white transition-colors duration-300">
                @samayinnovation
              </span>
              <div className="w-6 h-px bg-accent-primary/50 group-hover:w-10 group-hover:bg-white transition-all duration-400" />
              <ExternalLink size={11} className="text-accent-primary/50 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </motion.div>

        {/* ── Profile Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-[#0f1618] border border-white/8 p-8 md:p-10 mb-4"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">

            {/* Avatar */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="relative">
                <div
                  className="w-28 h-28 p-[3px]"
                  style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
                >
                  <div className="w-full h-full bg-[#0f1618] flex items-center justify-center overflow-hidden">
                    <img
                      src="/logo/logo.png"
                      alt="Samay Innovation"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-accent-primary flex items-center justify-center border-2 border-[#0f1618]">
                  <Sparkles size={12} className="text-white" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span
                  className="text-xl md:text-2xl font-light text-white"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  samayinnovation
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-accent-primary transition-colors duration-200"
                >
                  <Instagram size={16} strokeWidth={1.5} />
                </a>
              </div>
              <p className="text-white/40 text-sm font-light mb-6">
                Samay Innovation Interior Design Studio
              </p>

              {/* Stats */}
              <div className="flex items-center gap-10 mb-6 pb-6 border-b border-white/8">
                {profileStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-light text-accent-primary" style={{ fontFamily: 'Georgia, serif' }}>{s.value}</p>
                    <p className="font-mono text-[9px] tracking-widest uppercase text-white/30 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {profileBullets.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon size={12} strokeWidth={1.5} className="text-accent-primary flex-shrink-0" />
                    <span className="text-white/45 text-sm font-light">{text}</span>
                  </div>
                ))}
              </div>

              {/* Follow CTA */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3"
              >
                <Instagram size={13} strokeWidth={1.5} className="text-accent-primary group-hover:text-white transition-colors duration-300" />
                <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-accent-primary group-hover:text-white transition-colors duration-300">
                  Follow Us
                </span>
                <div className="w-6 h-px bg-accent-primary/50 group-hover:w-10 group-hover:bg-white transition-all duration-400" />
                <ArrowRight size={11} className="text-accent-primary/50 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Posts label ── */}
        <div className="flex items-center justify-between mb-4 px-1">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25">
            Latest Posts
          </span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2"
          >
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-accent-primary group-hover:text-white transition-colors duration-300">
              View All
            </span>
            <ExternalLink size={10} className="text-accent-primary/60 group-hover:text-white transition-colors duration-300" />
          </a>
        </div>

        {/* ── 3×3 Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-1"
        >
          {instagramPosts.map((post) => (
            <motion.a
              key={post.id}
              variants={itemVariants}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
                <Instagram size={18} className="text-white" strokeWidth={1.5} />
                <p className="text-white/70 text-[11px] text-center leading-relaxed font-light line-clamp-2 px-2">
                  {post.caption}
                </p>
                <span className="font-mono text-[9px] tracking-widest uppercase text-accent-primary">
                  View Post
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ── Join CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 bg-[#0f1618] border border-white/8 p-10 md:p-12 text-center"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25 block mb-6">
            Stay Inspired
          </span>
          <h3
            className="text-2xl md:text-3xl font-light text-white mb-3"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Join Our Instagram Family
          </h3>
          <p className="text-white/35 text-sm font-light max-w-md mx-auto mb-10 leading-relaxed">
            Daily design inspiration, behind-the-scenes content, and exclusive project reveals.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3"
          >
            <Instagram size={13} strokeWidth={1.5} className="text-accent-primary group-hover:text-white transition-colors duration-300" />
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-accent-primary group-hover:text-white transition-colors duration-300">
              Follow for Daily Inspiration
            </span>
            <div className="w-8 h-px bg-accent-primary/50 group-hover:w-14 group-hover:bg-white transition-all duration-500" />
            <ArrowRight size={12} className="text-accent-primary/50 group-hover:text-white transition-colors duration-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
