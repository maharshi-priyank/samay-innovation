import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Button from '../components/ui/Button';
import PageHeader from '../components/ui/PageHeader';
import { AWARDS, FEATURED_IN } from '../lib/constants';
import SEO from '../components/seo/SEO';
import { localBusinessSchema } from '../components/seo/schemas';

const stats = [
  { value: '200+', label: 'Projects Completed' },
  { value: '10+',  label: 'Years Experience' },
  { value: '2',    label: 'International Awards' },
  { value: '150+', label: 'Happy Clients' },
];

const approach = [
  { num: '01', title: 'Planning', desc: 'Comprehensive space planning and layout design tailored to your lifestyle.' },
  { num: '02', title: 'Decorative Ideas', desc: 'Creative and innovative interior concepts that define each space.' },
  { num: '03', title: 'Sustainable Materials', desc: 'Eco-friendly, durable materials selected with longevity in mind.' },
];

export default function About() {
  return (
    <div className="bg-bg-primary">
      <SEO
        title="About Us — Seme Nadvi | Award-Winning Interior Designer Ahmedabad"
        description="Meet Seme Nadvi, founder of Samay Innovation — award-winning interior designer based in Ahmedabad, Gujarat. Recognised at the House of Commons London (2022) and India Excellence Awards (2019). Featured in Forbes, Vogue & De-Mode."
        keywords="Seme Nadvi interior designer, about Samay Innovation, interior design firm Ahmedabad, award winning interior designer Gujarat, Forbes Vogue interior designer India, luxury interior designer founder Ahmedabad"
        path="/about"
        structuredData={localBusinessSchema}
      />

      <PageHeader title="About Us" subtitle="OUR STORY" />

      {/* ── Featured In ── */}
      <section className="py-10 md:py-12 bg-bg-primary border-b border-border-light">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
            <span className="text-[9px] font-light tracking-[0.45em] uppercase text-text-tertiary whitespace-nowrap">
              Featured In
            </span>
            <div className="h-px w-6 bg-border-medium hidden sm:block" />
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {FEATURED_IN.map((pub) => (
                <span key={pub} className="text-lg md:text-xl font-light text-text-primary tracking-wide">
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary mb-6 flex items-center gap-3">
                <span className="w-5 h-px bg-accent-primary" />
                Our Story
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary mb-8 leading-tight"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Simple, Minimalistic<br />& Elegant Design
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-5">
                Samay Innovation's work has been featured in Forbes, Vogue, De-Mode, and more for our simple and minimalistic approach. Based in Ahmedabad, we are a premier interior design firm offering residential, office, and commercial solutions.
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-10">
                Our team is energetic, cooperative, and committed to sustainable design — creating spaces that are both beautiful and enduring.
              </p>
              <ul className="space-y-3 mb-10">
                {['Sustainable & durable raw materials', 'Budget-friendly design solutions', 'Responsive to client vision'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-text-secondary text-sm">
                    <span className="w-1 h-1 rounded-full bg-accent-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="lg" href="/services">Our Services</Button>
            </motion.div>

            {/* Right — image + location badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/diojzujpv/image/upload/v1774168098/samay/venice-bungalows/01.jpg"
                  alt="Samay Innovation — Interior Design"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Location badge */}
              <div className="absolute bottom-6 left-6 bg-white py-5 px-6 shadow-medium">
                <p className="text-[9px] font-light tracking-[0.35em] uppercase text-text-tertiary mb-1">Based in</p>
                <p className="text-base font-light text-text-primary">Ahmedabad, India</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-t border-border-light bg-bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border-light">
            {stats.map((s) => (
              <div key={s.label} className="px-6 md:px-10 py-8 md:py-10">
                <p className="text-3xl md:text-4xl font-light text-accent-primary mb-1">{s.value}</p>
                <p className="text-xs text-text-tertiary tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-16"
          >
            <p className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary mb-5 flex items-center gap-3">
              <span className="w-5 h-px bg-accent-primary" />
              The Founder
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Meet The Visionary
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-16 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden bg-bg-tertiary">
                  <img
                    src="/assets/images/founder/founder-photo.png"
                    alt="Seme Nadvi — Principal Interior Designer, Samay Innovation"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop'; }}
                  />
                </div>
                {/* Quote overlay */}
                <div className="absolute -bottom-6 -right-4 md:-right-6 bg-accent-primary p-6 max-w-[185px]">
                  <p className="text-xs font-light text-white leading-relaxed">
                    "Design is not just what it looks like, it's how it makes you feel."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-3 pt-6 lg:pt-0"
            >
              <h3
                className="text-3xl md:text-4xl font-light text-text-primary mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Seme Nadvi
              </h3>
              <p className="text-sm text-text-tertiary tracking-wide mb-8">Principal Interior Designer</p>

              <div className="space-y-4 mb-10 text-base text-text-secondary leading-relaxed">
                <p>With over 10 years of experience, Seme Nadvi has transformed countless spaces into stunning, functional environments. Her passion for thoughtful design and meticulous attention to detail has earned recognition from Forbes, Vogue, and De-Mode.</p>
                <p>Seme believes that great design should be deeply personal — a true reflection of the people who live and work within a space. This philosophy drives Samay Innovation's commitment to creating interiors that speak to each client's unique personality.</p>
                <p>Under her leadership, Samay Innovation has become one of Ahmedabad's most trusted interior design firms, known for bold ideas, impeccable craftsmanship, and exceptional client relationships.</p>
              </div>

              {/* Key stats — inline */}
              <div className="grid grid-cols-2 gap-5 pt-8 border-t border-border-light">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-light text-accent-primary mb-0.5">{s.value}</p>
                    <p className="text-xs text-text-tertiary">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Design Philosophy ── */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-14 md:mb-18"
          >
            <p className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary mb-6 flex items-center gap-3">
              <span className="w-5 h-px bg-accent-primary" />
              Our Approach
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Design Philosophy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border-light">
            {approach.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="py-8 md:py-10 px-0 md:px-8 border-b md:border-b-0 md:border-r border-border-light last:border-0"
              >
                <span className="text-[9px] font-light tracking-[0.4em] text-accent-primary/70 block mb-4">{item.num}</span>
                <h4 className="text-lg font-light text-text-primary mb-3">{item.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-18"
          >
            <p className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary mb-6 flex items-center gap-3">
              <span className="w-5 h-px bg-accent-primary" />
              Recognition
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Awards & Achievements
            </h2>
          </motion.div>

          <div className="space-y-16 md:space-y-20">
            {AWARDS.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-bg-tertiary">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop'; }}
                    />
                    <div className="absolute top-6 right-6 bg-white px-5 py-3">
                      <p className="text-xl font-light text-accent-primary">{award.year}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <Award size={16} className="text-accent-primary flex-shrink-0" />
                    <span className="text-[9px] font-light tracking-[0.35em] uppercase text-text-tertiary">{award.location}</span>
                  </div>
                  <h4
                    className="text-2xl md:text-3xl font-light text-text-primary mb-5 leading-snug"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {award.title}
                  </h4>
                  <p className="text-base text-text-secondary leading-relaxed">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-[#111111]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary mb-7 flex items-center justify-center gap-3">
              <span className="w-5 h-px bg-accent-primary" />
              Work With Us
              <span className="w-5 h-px bg-accent-primary" />
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-7 leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/50 text-base font-light leading-relaxed mb-10">
              Let's collaborate to bring your vision to life with our award-winning design team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">Get In Touch</Button>
              <Button variant="outline" size="lg" href="/portfolio">View Portfolio</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
