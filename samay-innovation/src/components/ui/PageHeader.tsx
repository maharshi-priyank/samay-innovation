import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-bg-dark-section dark:bg-dark-bg-tertiary">
      {/* Background Image (Optional) */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Small Label */}
          {subtitle && (
            <p className="text-xs font-light tracking-[0.3em] uppercase text-white/50 mb-6">
              {subtitle}
            </p>
          )}

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight uppercase">
            {title}
          </h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-white/30 mx-auto mt-8"
          />
        </motion.div>
      </div>
    </section>
  );
}
