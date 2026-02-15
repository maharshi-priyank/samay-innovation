import { motion } from 'framer-motion';
import { STATS } from '../../lib/constants';

export default function Stats() {
  const stats = [
    { label: 'Projects Completed', value: STATS.projectsCompleted },
    { label: 'Happy Clients', value: STATS.happyClients },
    { label: 'Years Experience', value: STATS.yearsExperience },
    { label: 'Awards Won', value: STATS.awards },
  ];

  return (
    <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-light text-text-primary dark:text-dark-text-primary mb-3">
                {stat.value}
              </div>
              <div className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
