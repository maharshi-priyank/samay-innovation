import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, MapPin } from 'lucide-react';
import { AWARDS, FEATURED_IN } from '../lib/constants';
import { projects } from '../data/projects';
import SEO from '../components/seo/SEO';
import { localBusinessSchema } from '../components/seo/schemas';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

// Pull 4 featured projects for the gallery
const showcaseProjects = projects.filter((p) => p.featured && p.region !== 'international').slice(0, 4);

const PHILOSOPHY = [
  {
    number: '01',
    title: 'Purposeful Space',
    description:
      'Every room is a living system — proportion, light, and material work together to support the way people inhabit a space.',
  },
  {
    number: '02',
    title: 'Honest Materials',
    description:
      'We source sustainably and let materials speak for themselves. Wood, stone, and textile retain their texture rather than being masked by ornament.',
  },
  {
    number: '03',
    title: 'Client at Centre',
    description:
      "Design emerges from listening. We immerse ourselves in a client's life before a single line is drawn, ensuring the result feels unmistakably theirs.",
  },
];

export default function About() {
  return (
    <div style={{ backgroundColor: '#fafaf8' }}>
      <SEO
        title="About Us — Seme Nadvi | Award-Winning Interior Designer Ahmedabad"
        description="Meet Seme Nadvi, founder of Samay Innovation — award-winning interior designer based in Ahmedabad, Gujarat. Recognised at the House of Commons London (2022) and India Excellence Awards (2019). Featured in Forbes, Vogue & De-Mode."
        keywords="Seme Nadvi interior designer, about Samay Innovation, interior design firm Ahmedabad, award winning interior designer Gujarat, Forbes Vogue interior designer India, luxury interior designer founder Ahmedabad"
        path="/about"
        structuredData={localBusinessSchema}
      />

      {/* ── 1. HERO — full-bleed project image ── */}
      <section className="relative h-[85vh] min-h-[560px] overflow-hidden bg-[#0b1012]">
        <motion.img
          src={showcaseProjects[0]?.images[0]}
          alt="Samay Innovation — Featured Project"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1012]/85 via-black/30 to-black/20" />

        {/* Bottom-left text */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-14 z-10">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-[10px] tracking-[0.5em] uppercase text-accent-primary mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,8vw,7rem)] font-light text-white leading-none"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            10 Years of<br />Crafted Spaces.
          </motion.h1>
        </div>

        {/* Stats — top right */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute top-24 md:top-28 right-6 md:right-16 flex items-center gap-8 md:gap-12 z-10"
        >
          {[
            { value: '200+', label: 'Projects' },
            { value: '10+',  label: 'Years'    },
            { value: '2',    label: 'Awards'   },
          ].map((s, i) => (
            <div key={s.label} className={`text-right ${i > 0 ? 'pl-8 border-l border-white/15' : ''}`}>
              <p className="text-2xl md:text-3xl font-light text-white leading-none" style={{ fontFamily: 'Georgia, serif' }}>
                {s.value}
              </p>
              <p className="font-mono text-[9px] tracking-widest uppercase text-white/35 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 2. FEATURED IN ── */}
      <section className="py-8 border-b border-[#ddd8d0]" style={{ backgroundColor: '#fafaf8' }}>
        <div className="container-custom">
        <motion.div {...fadeUp} className="flex flex-wrap items-center gap-6 md:gap-14">
          <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-[#0b1012]/40 shrink-0">Featured In</p>
          {FEATURED_IN.map((pub, i) => (
            <span key={pub} className="flex items-center gap-6 md:gap-14">
              <span className="text-2xl md:text-3xl font-light text-[#0b1012]/70" style={{ fontFamily: 'Georgia, serif' }}>
                {pub}
              </span>
              {i < FEATURED_IN.length - 1 && <span className="text-[#ddd8d0] text-2xl select-none">·</span>}
            </span>
          ))}
        </motion.div>
        </div>
      </section>

      {/* ── 3. SELECTED WORK ── */}
      <section className="py-20" style={{ backgroundColor: '#fafaf8' }}>
        <div className="container-custom">
        <motion.div
          {...fadeUp}
          className="flex items-end justify-between mb-10 pb-8 border-b border-[#ddd8d0]"
        >
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#0b1012]/35 block mb-3">
              Selected Work
            </span>
            <h2
              className="text-4xl md:text-5xl font-light text-[#0b1012]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Work That Defines Us
            </h2>
          </div>
          <Link to="/portfolio" className="hidden md:flex items-center gap-3 group">
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#0b1012]/40 group-hover:text-accent-primary transition-colors duration-300">
              Full Portfolio
            </span>
            <div className="w-6 h-px bg-[#0b1012]/20 group-hover:w-10 group-hover:bg-accent-primary transition-all duration-400" />
            <ArrowRight size={11} className="text-[#0b1012]/25 group-hover:text-accent-primary transition-colors duration-300" />
          </Link>
        </motion.div>

        {/* Bento grid: large left + 2 right stacked */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {/* Large card — 2 cols */}
          {showcaseProjects[0] && (
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <WorkCard project={showcaseProjects[0]} aspectClass="aspect-[4/3] md:aspect-[3/2]" />
            </motion.div>
          )}
          {/* Right stacked */}
          <div className="flex flex-col gap-3">
            {showcaseProjects.slice(1, 3).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i + 1) * 0.1 }}
                className="flex-1"
              >
                <WorkCard project={p} aspectClass="aspect-[4/3]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom full-width card */}
        {showcaseProjects[3] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <WorkCard project={showcaseProjects[3]} aspectClass="aspect-[16/6]" />
          </motion.div>
        )}

        <div className="mt-8 md:hidden">
          <Link to="/portfolio" className="group flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#0b1012]/50 group-hover:text-accent-primary transition-colors duration-300">
              View All Projects
            </span>
            <div className="w-6 h-px bg-[#0b1012]/20 group-hover:w-10 group-hover:bg-accent-primary transition-all duration-400" />
            <ArrowRight size={11} className="text-[#0b1012]/25 group-hover:text-accent-primary transition-colors duration-300" />
          </Link>
        </div>
        </div>
      </section>

      {/* ── 4. FOUNDER ── */}
      <section className="py-24 border-t border-[#ddd8d0]" style={{ backgroundColor: '#fafaf8' }}>
        <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div {...fadeUp}>
            <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-[#0b1012]/40 mb-6">The Studio</p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#0b1012] leading-tight mb-10"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Simple, Minimalistic
              <br />& Elegant Design
            </h2>
            <p className="text-base text-[#0b1012]/70 leading-relaxed mb-5">
              Samay Innovation is an Ahmedabad-based interior firm whose work has been featured in
              Forbes, Vogue, and De-Mode. We offer residential, office, and commercial design
              solutions rooted in a minimalistic aesthetic — spaces that endure because they are
              grounded in proportion, material, and light.
            </p>
            <p className="text-base text-[#0b1012]/70 leading-relaxed mb-12">
              Our team is energetic, cooperative, and diverse — united by a commitment to sustainable
              design. We treat every project as a long-term relationship, remaining responsive to the
              client's vision from first sketch to final installation.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-[#0b1012] hover:gap-3 transition-all duration-200"
            >
              Explore our services <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Right — founder photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/assets/images/founder/founder-photo.png"
                alt="Seme Nadvi — Founder, Samay Innovation"
                className="w-full h-full object-cover object-center"
                onError={(e) => { e.currentTarget.src = '/assets/images/founder/founder-photo.png'; }}
              />
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* ── 5. PHILOSOPHY ── */}
      <section className="py-24" style={{ backgroundColor: '#0b1012' }}>
        <div className="container-custom">
        <motion.div {...fadeUp} className="text-center mb-20">
          <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-white/30 mb-10">Our Philosophy</p>
          <blockquote
            className="text-3xl md:text-5xl font-light italic text-white leading-snug max-w-3xl mx-auto"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            "We design spaces that shape how people feel."
          </blockquote>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-white/10 pt-16">
          {PHILOSOPHY.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <p className="font-mono tracking-[0.4em] text-[10px] text-white/25 mb-5">{item.number}</p>
              <h3 className="text-xl font-light text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {item.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* ── 6. AWARDS ── */}
      <section className="py-24" style={{ backgroundColor: '#fafaf8' }}>
        <div className="container-custom">
        <motion.div {...fadeUp} className="mb-16">
          <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-[#0b1012]/40 mb-6">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#0b1012]" style={{ fontFamily: 'Georgia, serif' }}>
            Awards & Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`pt-10 pb-12 border-t border-[#ddd8d0] ${i === 0 ? 'md:pr-12' : 'md:pl-12 md:border-l'}`}
            >
              {award.image && (
                <div className="aspect-[4/3] overflow-hidden mb-8">
                  <img src={award.image} alt={award.title} className="w-full h-full object-cover object-center" />
                </div>
              )}
              <p className="text-6xl md:text-7xl font-light mb-6 leading-none" style={{ fontFamily: 'Georgia, serif', color: '#b8975a' }}>
                {award.year}
              </p>
              <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-[#0b1012]/40 mb-3 flex items-center gap-2">
                <Award size={10} className="shrink-0" />{award.location}
              </p>
              <h3 className="text-xl md:text-2xl font-light text-[#0b1012] leading-snug mb-5" style={{ fontFamily: 'Georgia, serif' }}>
                {award.title}
              </h3>
              <p className="text-sm text-[#0b1012]/60 leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          className="mt-20 pt-12 border-t border-[#ddd8d0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-2xl md:text-3xl font-light text-[#0b1012]" style={{ fontFamily: 'Georgia, serif' }}>
            Ready to transform your space?
          </p>
          <div className="flex items-center gap-10">
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-[#0b1012] hover:gap-3 transition-all duration-200">
              Get in touch <ArrowRight size={14} />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-[#0b1012]/50 hover:text-[#0b1012] hover:gap-3 transition-all duration-200">
              View portfolio <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
        </div>
      </section>
    </div>
  );
}

// ─── Work Card ────────────────────────────────────────────────────────────────

function WorkCard({ project, aspectClass }: { project: (typeof projects)[0]; aspectClass: string }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className="group block relative overflow-hidden">
      <div className={`relative overflow-hidden ${aspectClass}`}>
        <img
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1012]/75 via-black/10 to-transparent" />

        {/* Gold line on hover */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-accent-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />

        {/* Category badge */}
        <div className="absolute top-5 left-5">
          <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/60 bg-black/30 backdrop-blur-sm px-2 py-1">
            {project.category}
          </span>
        </div>

        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
          <h3
            className="font-light text-white leading-tight text-lg md:text-xl mb-1.5 group-hover:text-accent-primary/90 transition-colors duration-300"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-mono text-[9px] tracking-widest uppercase text-white/40">
              <MapPin size={8} />{project.location}
            </span>
            <span className="text-white/20 text-[9px]">·</span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-white/40">{project.year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
