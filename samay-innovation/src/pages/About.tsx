import { motion } from 'framer-motion';
import { Check, Award, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import PageHeader from '../components/ui/PageHeader';
import { AWARDS, FEATURED_IN } from '../lib/constants';

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title="About Us" 
        subtitle="OUR STORY"
      />

      {/* Featured In Section */}
      <section className="py-12 bg-white dark:bg-dark-bg-primary border-b border-border-light dark:border-border-dark">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary">
              FEATURED IN
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {FEATURED_IN.map((publication) => (
                <span
                  key={publication}
                  className="text-xl md:text-2xl font-light text-text-primary dark:text-dark-text-primary"
                >
                  {publication}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom">
          {/* Section Header */}
          <div className="flex items-center gap-8 mb-16">
            <div className="w-12 h-12 rounded-full border-2 border-text-primary dark:border-dark-text-primary flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold">A</span>
            </div>
            <div className="h-px bg-border-light dark:bg-border-dark flex-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
                ABOUT.
              </h2>
              <h3 className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary mb-8">
                Simple, Minimalistic<br />& Elegant Design
              </h3>
              <p className="text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6">
                Samay Innovation's work has been featured in Forbes, Vogue, De-Mode, and more for our simple and minimalistic approach. Based in Ahmedabad, we are a premier interior decorative firm offering residential, office, and commercial designing solutions.
              </p>
              <p className="text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-8">
                Our staff is energetic, cooperative, diverse, and committed to enhancing the importance of sustainable design and development as a basic tenant of our practice.
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-10">
                {[
                  'Sustainable & durable raw materials',
                  'Budget-friendly design solutions',
                  'Responsive to client vision',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-text-secondary dark:text-dark-text-secondary"
                  >
                    <Check size={20} className="text-accent-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button variant="outline" size="lg" href="/services">
                OUR SERVICES
              </Button>
            </motion.div>

            {/* Right Column - Image with Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
                  alt="Modern architecture"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Location Badge */}
                <div className="absolute bottom-8 left-8 bg-white dark:bg-dark-bg-primary p-8 shadow-strong max-w-[200px]">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-accent-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-2">
                        Based in
                      </p>
                      <p className="text-lg font-light text-text-primary dark:text-dark-text-primary">
                        Ahmedabad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          {/* Section Header */}
          <div className="flex items-center gap-8 mb-16">
            <div className="w-12 h-12 rounded-full border-2 border-text-primary dark:border-dark-text-primary flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold">F</span>
            </div>
            <div className="h-px bg-border-light dark:bg-border-dark flex-1" />
          </div>

          <div className="mb-12">
            <h2 className="text-xs font-light tracking-[0.3em] uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
              FOUNDER.
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary">
              Meet The Visionary
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Founder Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-[3/4] overflow-hidden bg-bg-tertiary dark:bg-dark-bg-tertiary">
                  <img
                    src="/assets/images/founder/founder.jpg"
                    alt="Founder - Samay Innovation"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop';
                    }}
                  />
                </div>

                {/* Decorative Quote */}
                <div className="absolute -bottom-8 -right-8 bg-accent-primary p-8 max-w-[200px]">
                  <p className="text-sm font-light text-white leading-relaxed">
                    "Design is not just what it looks like, it's how it makes you feel."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Founder Details - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {/* Name & Title */}
              <div className="mb-8">
                <h4 className="text-3xl md:text-4xl font-light text-text-primary dark:text-dark-text-primary mb-2">
                  [Founder Name]
                </h4>
                <p className="text-lg text-text-tertiary dark:text-dark-text-tertiary">
                  Founder & Principal Designer
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-4 mb-8">
                <p className="text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  With over [X] years of experience in interior design, [Founder Name] has transformed countless spaces into stunning, functional environments. Their passion for sustainable design and attention to detail has earned recognition from Forbes, Vogue, and De-Mode.
                </p>
                <p className="text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  [Founder Name] believes that great design should be accessible to everyone. This philosophy drives Samay Innovation's commitment to creating beautiful spaces that reflect each client's unique personality and lifestyle, regardless of budget.
                </p>
                <p className="text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  Under their leadership, Samay Innovation has become one of Ahmedabad's most trusted interior design firms, known for innovative solutions and exceptional client service.
                </p>
              </div>

              {/* Achievements */}
              <div className="border-t border-border-light dark:border-border-dark pt-8">
                <h5 className="text-sm font-light tracking-wider uppercase text-text-tertiary dark:text-dark-text-tertiary mb-6">
                  Key Achievements
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-2xl font-light text-accent-primary mb-1">[X]+</p>
                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                      Projects Completed
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-accent-primary mb-1">[X]+</p>
                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-accent-primary mb-1">2</p>
                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                      International Awards
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-accent-primary mb-1">[X]+</p>
                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Education/Certifications (Optional) */}
              <div className="border-t border-border-light dark:border-border-dark pt-8 mt-8">
                <h5 className="text-sm font-light tracking-wider uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
                  Education & Certifications
                </h5>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="w-1 h-1 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                    <span>[Degree/Certification Name] - [Institution]</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="w-1 h-1 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                    <span>[Degree/Certification Name] - [Institution]</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="w-1 h-1 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                    <span>[Degree/Certification Name] - [Institution]</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
                OUR APPROACH
              </h2>
              <h3 className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary mb-8">
                Design Philosophy
              </h3>
              <p className="text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                Responsive to our clients' vision, we are committed to design that expresses the interrelationships between architecture and place, space and form, color and materials, economy and integrity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Planning',
                  description: 'Comprehensive space planning and layout design',
                },
                {
                  title: 'Decorative Ideas',
                  description: 'Creative and innovative interior concepts',
                },
                {
                  title: 'Sustainable Materials',
                  description: 'Eco-friendly and durable raw materials',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-text-primary dark:border-dark-text-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-light">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-light mb-3 text-text-primary dark:text-dark-text-primary">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom">
          {/* Section Header */}
          <div className="flex items-center gap-8 mb-16">
            <div className="w-12 h-12 rounded-full border-2 border-text-primary dark:border-dark-text-primary flex items-center justify-center flex-shrink-0">
              <Award size={20} />
            </div>
            <div className="h-px bg-border-light dark:bg-border-dark flex-1" />
          </div>

          <div className="mb-16">
            <h2 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
              RECOGNITION.
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary">
              Awards & Achievements
            </h3>
          </div>

          {/* Awards Grid */}
          <div className="space-y-16">
            {AWARDS.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative aspect-[4/3] bg-bg-tertiary dark:bg-dark-bg-tertiary overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop';
                      }}
                    />
                    {/* Year Badge */}
                    <div className="absolute top-8 right-8 bg-white dark:bg-dark-bg-primary px-6 py-3">
                      <p className="text-2xl font-light text-accent-primary">
                        {award.year}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 border-2 border-accent-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-2">
                        {award.location}
                      </p>
                      <h4 className="text-2xl md:text-3xl font-light text-text-primary dark:text-dark-text-primary">
                        {award.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-24 bg-white dark:bg-dark-bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
              OUR TEAM
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary">
              What Drives Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Energetic',
                description: 'Passionate team bringing fresh ideas and enthusiasm to every project.',
              },
              {
                title: 'Cooperative',
                description: 'Collaborative approach ensuring seamless execution and client satisfaction.',
              },
              {
                title: 'Sustainable',
                description: 'Committed to eco-friendly practices and green design solutions.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-text-primary dark:border-dark-text-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-light">{index + 1}</span>
                </div>
                <h4 className="text-xl font-light mb-4 text-text-primary dark:text-dark-text-primary">
                  {value.title}
                </h4>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary mb-8">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-10">
              Let's collaborate to bring your vision to life with our award-winning design team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                GET IN TOUCH
              </Button>
              <Button variant="outline" size="lg" href="/portfolio">
                VIEW PORTFOLIO
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
