import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Check } from 'lucide-react';
import { AWARDS, FEATURED_IN } from '../lib/constants';
import SEO from '../components/seo/SEO';
import { localBusinessSchema } from '../components/seo/schemas';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const FEATURES = [
  'Sustainable Design',
  'Custom Furniture',
  'Award-Winning',
  'International Projects',
];

const PHILOSOPHY = [
  {
    number: '01',
    title: 'Purposeful Space',
    description:
      'Every room is considered as a living system — proportion, light, and material work together to support the way people inhabit a space.',
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
    <div style={{ backgroundColor: '#f3f0ec' }}>
      <SEO
        title="About Us — Seme Nadvi | Award-Winning Interior Designer Ahmedabad"
        description="Meet Seme Nadvi, founder of Samay Innovation — award-winning interior designer based in Ahmedabad, Gujarat. Recognised at the House of Commons London (2022) and India Excellence Awards (2019). Featured in Forbes, Vogue & De-Mode."
        keywords="Seme Nadvi interior designer, about Samay Innovation, interior design firm Ahmedabad, award winning interior designer Gujarat, Forbes Vogue interior designer India, luxury interior designer founder Ahmedabad"
        path="/about"
        structuredData={localBusinessSchema}
      />

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        className="pt-40 pb-24 px-6 md:px-16"
        style={{ backgroundColor: '#0b1012' }}
      >
        <motion.div {...fadeUp}>
          <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-white/50 mb-6">
            Our Story
          </p>
          <h1
            className="text-[clamp(4rem,12vw,10rem)] font-light leading-none text-white"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            About
          </h1>
        </motion.div>
      </section>

      {/* ── 2. FEATURED IN ───────────────────────────────────────────────── */}
      <section
        className="py-10 px-6 md:px-16 border-b"
        style={{ backgroundColor: '#f3f0ec', borderColor: '#ddd8d0' }}
      >
        <motion.div
          {...fadeUp}
          className="flex flex-wrap items-center gap-6 md:gap-14"
        >
          <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-[#0b1012]/40 shrink-0">
            Featured In
          </p>
          {FEATURED_IN.map((pub, i) => (
            <span key={pub} className="flex items-center gap-6 md:gap-14">
              <span
                className="text-3xl md:text-4xl font-light text-[#0b1012]/80"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {pub}
              </span>
              {i < FEATURED_IN.length - 1 && (
                <span className="text-[#ddd8d0] text-2xl select-none">·</span>
              )}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── 3. FOUNDER ───────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: '#f3f0ec' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <motion.div {...fadeUp}>
            <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-[#0b1012]/40 mb-6">
              The Studio
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#0b1012] leading-tight mb-10"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Simple, Minimalistic
              <br />& Elegant Design
            </h2>
            <p className="text-base text-[#0b1012]/70 leading-relaxed mb-5">
              Samay Innovation is an Ahmedabad-based interior decorative firm whose work has been
              featured in Forbes, Vogue, and De-Mode. We offer residential, office, and commercial
              design solutions rooted in a simple, minimalistic aesthetic — spaces that endure
              because they are grounded in proportion, material, and light.
            </p>
            <p className="text-base text-[#0b1012]/70 leading-relaxed mb-10">
              Our team is energetic, cooperative, and diverse — united by a commitment to
              sustainable design. We treat every project as a long-term relationship, remaining
              responsive to the client's vision from first sketch to final installation.
            </p>

            <ul className="space-y-4 mb-12">
              {FEATURES.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-[#0b1012]/80">
                  <Check size={15} className="shrink-0 text-[#0b1012]/40" />
                  <span className="text-sm">{feat}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-[#0b1012] hover:gap-3 transition-all duration-200"
            >
              Explore our services <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Right — founder photo placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="aspect-[3/4] flex items-center justify-center"
              style={{ backgroundColor: '#ede9e3' }}
            >
              <div className="text-center">
                <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-[#0b1012]/30 mb-2">
                  Founder Photo
                </p>
                <p
                  className="text-lg font-light text-[#0b1012]/40"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Seme Nadvi
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. PHILOSOPHY ────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: '#0b1012' }}
      >
        <motion.div {...fadeUp} className="text-center mb-20">
          <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-white/30 mb-10">
            Our Philosophy
          </p>
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
              <p className="font-mono tracking-[0.4em] text-[10px] text-white/25 mb-5">
                {item.number}
              </p>
              <h3
                className="text-xl font-light text-white mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 5. AWARDS ────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: '#f3f0ec' }}
      >
        <motion.div {...fadeUp} className="mb-16">
          <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-[#0b1012]/40 mb-6">
            Recognition
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#0b1012]"
            style={{ fontFamily: 'Georgia, serif' }}
          >
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
              className={`pt-10 pb-12 border-t border-[#ddd8d0] ${
                i === 0 ? 'md:pr-12' : 'md:pl-12 md:border-l'
              }`}
            >
              {/* Year */}
              <p
                className="text-6xl md:text-7xl font-light mb-6 leading-none"
                style={{ fontFamily: 'Georgia, serif', color: '#b8975a' }}
              >
                {award.year}
              </p>

              {/* Location label */}
              <p className="font-mono tracking-[0.4em] uppercase text-[10px] text-[#0b1012]/40 mb-3 flex items-center gap-2">
                <Award size={10} className="shrink-0" />
                {award.location}
              </p>

              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-light text-[#0b1012] leading-snug mb-5"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {award.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#0b1012]/60 leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          className="mt-20 pt-12 border-t border-[#ddd8d0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p
            className="text-2xl md:text-3xl font-light text-[#0b1012]"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Ready to transform your space?
          </p>
          <div className="flex items-center gap-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-[#0b1012] hover:gap-3 transition-all duration-200"
            >
              Get in touch <ArrowRight size={14} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-[#0b1012]/50 hover:text-[#0b1012] hover:gap-3 transition-all duration-200"
            >
              View portfolio <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
