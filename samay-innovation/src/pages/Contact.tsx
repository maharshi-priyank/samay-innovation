import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, Linkedin, Facebook } from 'lucide-react';
import { SITE_CONFIG } from '../lib/constants';
import Button from '../components/ui/Button';
import PageHeader from '../components/ui/PageHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'No 104/A, 1st Floor',
        'Shilp The Address, Shilaj Circle',
        'Thaltej, Ahmedabad',
        'Gujarat 380059',
      ],
      link: SITE_CONFIG.mapUrl,
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [SITE_CONFIG.phone],
      link: `tel:${SITE_CONFIG.phone}`,
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [SITE_CONFIG.email],
      link: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [SITE_CONFIG.hours],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
    { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
  ];

  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title="Contact Us" 
        subtitle="GET IN TOUCH"
      />

      {/* Main Content */}
      <section className="py-24 bg-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
                  GET IN TOUCH
                </h2>
                <h3 className="text-4xl md:text-5xl font-light text-text-primary dark:text-dark-text-primary mb-8">
                  Let's Start a<br />Conversation
                </h3>
                <p className="text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-12">
                  Whether you're planning a residential renovation, commercial space, or hospitality project, 
                  we're here to help bring your vision to life with our award-winning design expertise.
                </p>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-start gap-4 p-6 bg-white dark:bg-dark-bg-primary hover:shadow-medium transition-all duration-300"
                        >
                          <div className="w-12 h-12 border-2 border-text-primary dark:border-dark-text-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-text-primary dark:group-hover:bg-dark-text-primary transition-colors duration-300">
                            <item.icon size={20} className="text-text-primary dark:text-dark-text-primary group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div>
                            <h4 className="text-sm font-light tracking-wider uppercase text-text-primary dark:text-dark-text-primary mb-2">
                              {item.title}
                            </h4>
                            {item.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-6 bg-white dark:bg-dark-bg-primary">
                          <div className="w-12 h-12 border-2 border-text-primary dark:border-dark-text-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <item.icon size={20} className="text-text-primary dark:text-dark-text-primary" />
                          </div>
                          <div>
                            <h4 className="text-sm font-light tracking-wider uppercase text-text-primary dark:text-dark-text-primary mb-2">
                              {item.title}
                            </h4>
                            {item.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-12"
                >
                  <h4 className="text-xs font-light tracking-widest uppercase text-text-tertiary dark:text-dark-text-tertiary mb-4">
                    FOLLOW US
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border-2 border-text-primary dark:border-dark-text-primary rounded-full flex items-center justify-center hover:bg-text-primary dark:hover:bg-dark-text-primary hover:text-white transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-dark-bg-primary p-8 md:p-12"
              >
                <h3 className="text-2xl font-light text-text-primary dark:text-dark-text-primary mb-8">
                  Send us a message
                </h3>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-border-light dark:border-border-dark focus:border-text-primary dark:focus:border-dark-text-primary outline-none transition-colors duration-300 text-text-primary dark:text-dark-text-primary"
                        placeholder=" "
                      />
                      <label
                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                          focusedField === 'name' || formData.name
                            ? '-top-5 text-xs text-text-primary dark:text-dark-text-primary'
                            : 'top-3 text-sm text-text-tertiary dark:text-dark-text-tertiary'
                        }`}
                      >
                        Your Name *
                      </label>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-border-light dark:border-border-dark focus:border-text-primary dark:focus:border-dark-text-primary outline-none transition-colors duration-300 text-text-primary dark:text-dark-text-primary"
                        placeholder=" "
                      />
                      <label
                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                          focusedField === 'email' || formData.email
                            ? '-top-5 text-xs text-text-primary dark:text-dark-text-primary'
                            : 'top-3 text-sm text-text-tertiary dark:text-dark-text-tertiary'
                        }`}
                      >
                        Email Address *
                      </label>
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-border-light dark:border-border-dark focus:border-text-primary dark:focus:border-dark-text-primary outline-none transition-colors duration-300 text-text-primary dark:text-dark-text-primary"
                        placeholder=" "
                      />
                      <label
                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                          focusedField === 'phone' || formData.phone
                            ? '-top-5 text-xs text-text-primary dark:text-dark-text-primary'
                            : 'top-3 text-sm text-text-tertiary dark:text-dark-text-tertiary'
                        }`}
                      >
                        Phone Number
                      </label>
                    </div>

                    {/* Project Type */}
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('projectType')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-border-light dark:border-border-dark focus:border-text-primary dark:focus:border-dark-text-primary outline-none transition-colors duration-300 text-text-primary dark:text-dark-text-primary appearance-none cursor-pointer"
                      >
                        <option value="">Select Project Type *</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="office">Office</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('budget')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-border-light dark:border-border-dark focus:border-text-primary dark:focus:border-dark-text-primary outline-none transition-colors duration-300 text-text-primary dark:text-dark-text-primary appearance-none cursor-pointer"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-10">Under ₹10 Lakhs</option>
                        <option value="10-25">₹10 - 25 Lakhs</option>
                        <option value="25-50">₹25 - 50 Lakhs</option>
                        <option value="50-100">₹50 Lakhs - 1 Crore</option>
                        <option value="above-100">Above ₹1 Crore</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={4}
                        className="w-full px-0 py-3 bg-transparent border-b-2 border-border-light dark:border-border-dark focus:border-text-primary dark:focus:border-dark-text-primary outline-none transition-colors duration-300 text-text-primary dark:text-dark-text-primary resize-none"
                        placeholder=" "
                      />
                      <label
                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                          focusedField === 'message' || formData.message
                            ? '-top-5 text-xs text-text-primary dark:text-dark-text-primary'
                            : 'top-3 text-sm text-text-tertiary dark:text-dark-text-tertiary'
                        }`}
                      >
                        Tell us about your project *
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full md:w-auto px-12 py-4 bg-text-primary dark:bg-dark-text-primary text-white dark:text-dark-bg-primary overflow-hidden transition-all duration-300 hover:shadow-strong disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 text-xs font-light tracking-widest uppercase">
                        {isSubmitting ? (
                          <>
                            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={16} />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-text-secondary dark:bg-dark-text-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                      <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-light text-text-primary dark:text-dark-text-primary mb-4">
                      Thank You!
                    </h3>
                    <p className="text-base text-text-secondary dark:text-dark-text-secondary">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-dark-bg-primary">
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
              Visit our office in Ahmedabad or reach out through any of the channels above. 
              We're excited to hear about your project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href={SITE_CONFIG.mapUrl} className="group">
                GET DIRECTIONS
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
