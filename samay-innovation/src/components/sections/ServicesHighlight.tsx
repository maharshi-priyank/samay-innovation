import { motion } from 'framer-motion';
import { Home, Building2, Wrench, Palette } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Interior',
    description: 'Transform your home into a personalized sanctuary',
  },
  {
    icon: Building2,
    title: 'Commercial Design',
    description: 'Create inspiring workspaces that boost productivity',
  },
  {
    icon: Wrench,
    title: 'Turnkey Solutions',
    description: 'End-to-end project management and execution',
  },
  {
    icon: Palette,
    title: 'Design Consultation',
    description: 'Expert guidance for your interior design needs',
  },
];

export default function ServicesHighlight() {
  return (
    <section className="py-24 bg-white dark:bg-dark-bg-primary">
      <div className="container-custom">
        {/* Section Header */}
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
          <h3 className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary">
            What We Do
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 border-2 border-text-primary dark:border-dark-text-primary flex items-center justify-center group-hover:bg-text-primary dark:group-hover:bg-dark-text-primary transition-colors duration-300">
                  <service.icon 
                    size={28} 
                    className="text-text-primary dark:text-dark-text-primary group-hover:text-white transition-colors duration-300" 
                  />
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-light mb-3 text-text-primary dark:text-dark-text-primary">
                {service.title}
              </h4>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
