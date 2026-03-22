import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { services } from '../data/services';
import ServiceIcon from '../components/ui/ServiceIcon';
import Button from '../components/ui/Button';
import PageHeader from '../components/ui/PageHeader';

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We begin with a detailed discussion to understand your vision, lifestyle, and budget. This forms the foundation of everything we design.',
  },
  {
    step: '02',
    title: 'Concept & Design',
    description: 'Our team develops bespoke design concepts with mood boards, material palettes, and 3D visualisations so you can see your space before we build it.',
  },
  {
    step: '03',
    title: 'Execution',
    description: 'We manage every aspect of the build — contractors, vendors, timelines, and quality checks — so you never have to worry about the details.',
  },
  {
    step: '04',
    title: 'Handover',
    description: 'We deliver your completed space on time and on budget, with a final walkthrough to ensure every detail meets our exacting standards.',
  },
];

export default function Services() {
  return (
    <div>
      <PageHeader title="Our Services" subtitle="WHAT WE OFFER" />

      {/* Services Grid */}
      <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom">
          <div className="flex items-center gap-8 mb-16">
            <div className="w-12 h-12 rounded-full border-2 border-text-primary dark:border-dark-text-primary flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold">S</span>
            </div>
            <div className="h-px bg-border-light dark:bg-border-dark flex-1" />
          </div>

          <div className="mb-16">
            <h2 className="text-xs font-light tracking-[0.3em] uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
              SERVICES.
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary max-w-2xl">
              Everything Your Space Needs, Under One Roof
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-bg-primary p-8 group hover:shadow-strong transition-all duration-300"
              >
                <div className="mb-6">
                  <ServiceIcon lucideIcon={service.icon} size="lg" className="text-accent-primary" />
                </div>

                <h4 className="text-xl font-light text-text-primary dark:text-dark-text-primary mb-3">
                  {service.name}
                </h4>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-text-secondary dark:text-dark-text-secondary">
                      <Check size={14} className="text-accent-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          <div className="flex items-center gap-8 mb-16">
            <div className="w-12 h-12 rounded-full border-2 border-text-primary dark:border-dark-text-primary flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold">P</span>
            </div>
            <div className="h-px bg-border-light dark:bg-border-dark flex-1" />
          </div>

          <div className="mb-16">
            <h2 className="text-xs font-light tracking-[0.3em] uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
              PROCESS.
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary">
              How We Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <p className="text-6xl font-light text-border-light dark:text-border-dark mb-6 leading-none">
                  {item.step}
                </p>
                <h4 className="text-xl font-light text-text-primary dark:text-dark-text-primary mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-px bg-border-light dark:bg-border-dark -translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-10">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                GET IN TOUCH
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                VIEW OUR WORK
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
