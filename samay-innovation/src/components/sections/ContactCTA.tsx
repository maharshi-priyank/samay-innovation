import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { SITE_CONFIG } from '../../lib/constants';

export default function ContactCTA() {
  return (
    <section className="relative py-32 bg-bg-dark-section dark:bg-dark-bg-secondary overflow-hidden">
      {/* Subtle background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gold corner accent — top left */}
      <div className="absolute top-12 left-12 hidden md:block">
        <div className="w-12 h-px bg-accent-primary" />
        <div className="w-px h-12 bg-accent-primary" />
      </div>

      {/* Gold corner accent — bottom right */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="w-12 h-px bg-accent-primary ml-auto" />
        <div className="w-px h-12 bg-accent-primary ml-auto" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-accent-primary" />
            <span className="text-xs font-light tracking-[0.3em] uppercase text-accent-primary">
              GET IN TOUCH
            </span>
            <div className="h-px w-12 bg-accent-primary" />
          </motion.div>

          {/* Heading — plain motion, no RevealText (overflow-hidden blocks viewport detection) */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
          >
            Let's Create Something<br className="hidden md:block" /> Beautiful Together
          </motion.h2>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to transform your space? Get in touch to discuss your project — we would love to hear your vision.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" href="/contact" magnetic className="!bg-accent-primary !border-accent-primary hover:!bg-accent-hover text-white">
              START A PROJECT
            </Button>
            <Button variant="outline" size="lg" href={`mailto:${SITE_CONFIG.email}`} magnetic className="!border-white !text-white hover:!bg-white hover:!text-black">
              EMAIL US
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
