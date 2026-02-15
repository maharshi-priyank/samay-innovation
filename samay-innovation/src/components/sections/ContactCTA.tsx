import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { SITE_CONFIG } from '../../lib/constants';

export default function ContactCTA() {
  return (
    <section className="py-32 bg-white dark:bg-dark-bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-light text-text-primary dark:text-dark-text-primary mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-12 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch with us to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/contact">
              START A PROJECT
            </Button>
            <Button variant="outline" size="lg" href={`mailto:${SITE_CONFIG.email}`}>
              EMAIL US
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
