import { motion } from 'framer-motion';
import { Instagram, ExternalLink, MapPin, Award, Sparkles, Package } from 'lucide-react';
import { instagramPosts } from '../../data/instagramPosts';

const INSTAGRAM_URL = 'https://www.instagram.com/samayinnovation/';

const profileBullets = [
  { icon: Award,    text: 'Award-winning Interior Design Firm' },
  { icon: MapPin,   text: 'Ahmedabad, Gujarat — Serving India & US' },
  { icon: Sparkles, text: 'Luxury Residential & Commercial Interiors' },
  { icon: Package,  text: 'Turnkey Interior Solutions' },
];

const profileStats = [
  { value: '15+', label: 'Posts' },
  { value: '500+', label: 'Followers' },
  { value: '200+', label: 'Projects' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function InstagramSection() {
  return (
    <section className="py-24 bg-[#0e0e0e] overflow-hidden">
      <div className="container-custom">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-light tracking-[0.35em] uppercase text-accent-primary">
            Follow Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-white mt-3">Instagram Gallery</h2>
          <p className="text-white/40 text-sm mt-2">
            Stay inspired with our latest design projects
          </p>
        </motion.div>

        {/* ── Profile Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 md:p-10 mb-4"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">

            {/* Avatar */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="relative">
                {/* Instagram gradient ring */}
                <div className="w-28 h-28 rounded-full p-[3px]"
                  style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
                >
                  <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                    <img
                      src="/logo/logo.png"
                      alt="Samay Innovation"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                {/* Gold verified-style badge */}
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-accent-primary flex items-center justify-center border-2 border-[#1a1a1a]">
                  <Sparkles size={12} className="text-white" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              {/* Handle row */}
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="text-xl md:text-2xl font-light text-white tracking-wide">
                  samayinnovation
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-accent-primary transition-colors duration-200"
                >
                  <Instagram size={18} />
                </a>
              </div>
              <p className="text-white/50 text-sm mb-5">
                Samay Innovation — Interior Design &amp; Décor
              </p>

              {/* Stats */}
              <div className="flex items-center gap-8 mb-6 pb-6 border-b border-white/10">
                {profileStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl font-light text-accent-primary">{s.value}</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <div className="grid sm:grid-cols-2 gap-3 mb-7">
                {profileBullets.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon size={14} className="text-accent-primary flex-shrink-0" />
                    <span className="text-white/60 text-sm font-light">{text}</span>
                  </div>
                ))}
              </div>

              {/* Follow button */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-accent-primary text-white px-7 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-light hover:bg-accent-hover transition-colors duration-300"
              >
                <Instagram size={13} />
                Follow Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Latest Posts ── */}
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-sm font-light tracking-[0.2em] uppercase text-white/70">
            Latest Posts
          </h3>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent-primary tracking-widest uppercase font-light hover:underline flex items-center gap-1.5"
          >
            View All <ExternalLink size={10} />
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

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
                <Instagram size={20} className="text-white" />
                <p className="text-white/80 text-[11px] text-center leading-relaxed font-light line-clamp-2 px-2">
                  {post.caption}
                </p>
                <span className="text-accent-primary text-[10px] tracking-widest uppercase font-light">
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
          className="mt-4 bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {['✦', '✦', '✦'].map((s, i) => (
              <span key={i} className="text-accent-primary text-sm">{s}</span>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-light text-white mb-2">
            Join Our Instagram Family
          </h3>
          <p className="text-white/40 text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Get daily design inspiration, behind-the-scenes content, and exclusive project reveals.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#111111] border border-accent-primary text-accent-primary px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-light hover:bg-accent-primary hover:text-white transition-all duration-300"
          >
            <Instagram size={13} />
            Follow for Daily Inspiration
          </a>
        </motion.div>

      </div>
    </section>
  );
}
