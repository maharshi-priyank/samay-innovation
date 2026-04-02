import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Instagram, Linkedin, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SITE_CONFIG } from '../lib/constants';
import Button from '../components/ui/Button';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/seo/SEO';
import { localBusinessSchema } from '../components/seo/schemas';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, reply_to: formData.email, phone: formData.phone || 'Not provided', project_type: formData.projectType, budget: formData.budget || 'Not specified', message: formData.message, to_name: 'Seme Nadvi', to_email: 'info@samayinnovation.in' },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setIsSubmitted(true);
    } catch (err: unknown) {
      const message = err && typeof err === 'object' && 'text' in err ? String((err as { text: unknown }).text) : 'Something went wrong. Please call us directly or email ' + SITE_CONFIG.email;
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (name: string) =>
    `w-full px-0 py-3 bg-transparent border-b border-border-medium focus:border-text-primary outline-none transition-colors duration-300 text-text-primary text-sm font-light`;

  const labelClass = (field: string, value: string) =>
    `absolute left-0 transition-all duration-300 pointer-events-none ${
      focusedField === field || value ? '-top-4 text-[9px] tracking-[0.3em] uppercase text-text-tertiary' : 'top-3 text-sm text-text-tertiary'
    }`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Contact Samay Innovation — Interior Designer in Ahmedabad, Gujarat"
        description="Get in touch with Samay Innovation to start your interior design project. Visit our studio at Bodakdev, Ahmedabad or call (+91) 989 852 4366."
        keywords="contact interior designer Ahmedabad, interior design studio Bodakdev Ahmedabad, book interior designer Gujarat, interior design consultation Ahmedabad, Samay Innovation contact"
        path="/contact"
        structuredData={localBusinessSchema}
      />

      <PageHeader title="Contact Us" subtitle="GET IN TOUCH" />

      {/* ── Main Section ── */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-20">

            {/* ── Left — contact info ── */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary mb-6 flex items-center gap-3">
                  <span className="w-5 h-px bg-accent-primary" />
                  Get In Touch
                </p>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary mb-7 leading-tight"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Let's Start a<br />Conversation
                </h2>
                <p className="text-base text-text-secondary leading-relaxed mb-12">
                  Whether you're planning a residential renovation, commercial space, or hospitality project, we're here to help bring your vision to life.
                </p>

                {/* Contact items */}
                <div className="space-y-0 divide-y divide-border-light">
                  {[
                    { Icon: MapPin, title: 'Visit Us', lines: ['403 Before, Lane of ICICI Bank', 'PV Enclave, Sindhu Bhavan Marg', 'Bodakdev, Ahmedabad 380059'], link: SITE_CONFIG.mapUrl },
                    { Icon: Phone, title: 'Call Us', lines: [SITE_CONFIG.phone], link: `tel:${SITE_CONFIG.phone}` },
                    { Icon: Mail,  title: 'Email Us', lines: [SITE_CONFIG.email], link: `mailto:${SITE_CONFIG.email}` },
                    { Icon: Clock, title: 'Working Hours', lines: [SITE_CONFIG.hours], link: null },
                  ].map(({ Icon, title, lines, link }) => {
                    const Inner = (
                      <div className="flex items-start gap-5 py-5">
                        <Icon size={15} className="text-accent-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[9px] font-light tracking-[0.35em] uppercase text-text-tertiary mb-1.5">{title}</p>
                          {lines.map((l, i) => (
                            <p key={i} className="text-sm font-light text-text-primary leading-relaxed">{l}</p>
                          ))}
                        </div>
                      </div>
                    );
                    return link ? (
                      <a key={title} href={link} target={link.startsWith('http') ? '_blank' : undefined} rel={link.startsWith('http') ? 'noopener noreferrer' : undefined} className="block hover:text-accent-primary transition-colors duration-200 group">
                        {Inner}
                      </a>
                    ) : (
                      <div key={title}>{Inner}</div>
                    );
                  })}
                </div>

                {/* Social */}
                <div className="mt-10">
                  <p className="text-[9px] font-light tracking-[0.45em] uppercase text-text-tertiary mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    {[
                      { Icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
                      { Icon: Linkedin,  href: SITE_CONFIG.social.linkedin,  label: 'LinkedIn' },
                      { Icon: Facebook,  href: SITE_CONFIG.social.facebook,  label: 'Facebook' },
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 border border-border-medium flex items-center justify-center text-text-tertiary hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
                      >
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── Right — form ── */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <p className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary mb-8 flex items-center gap-3">
                  <span className="w-5 h-px bg-accent-primary" />
                  Send a Message
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name */}
                    <div className="relative">
                      <input type="text" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} required className={fieldClass('name')} placeholder=" " />
                      <label className={labelClass('name', formData.name)}>Your Name *</label>
                    </div>

                    {/* Email + Phone — side by side on md+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="relative">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} required className={fieldClass('email')} placeholder=" " />
                        <label className={labelClass('email', formData.email)}>Email Address *</label>
                      </div>
                      <div className="relative">
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} className={fieldClass('phone')} placeholder=" " />
                        <label className={labelClass('phone', formData.phone)}>Phone Number</label>
                      </div>
                    </div>

                    {/* Project Type + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="relative">
                        <select name="projectType" value={formData.projectType} onChange={handleChange} onFocus={() => setFocusedField('projectType')} onBlur={() => setFocusedField(null)} required className={`${fieldClass('projectType')} appearance-none cursor-pointer`}>
                          <option value="">Project Type *</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="office">Office</option>
                          <option value="hospitality">Hospitality</option>
                          <option value="retail">Retail</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="relative">
                        <select name="budget" value={formData.budget} onChange={handleChange} onFocus={() => setFocusedField('budget')} onBlur={() => setFocusedField(null)} className={`${fieldClass('budget')} appearance-none cursor-pointer`}>
                          <option value="">Budget Range</option>
                          <option value="under-10">Under ₹10 Lakhs</option>
                          <option value="10-25">₹10 – 25 Lakhs</option>
                          <option value="25-50">₹25 – 50 Lakhs</option>
                          <option value="50-100">₹50 Lakhs – 1 Crore</option>
                          <option value="above-100">Above ₹1 Crore</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} required rows={4} className={`${fieldClass('message')} resize-none`} placeholder=" " />
                      <label className={labelClass('message', formData.message)}>Tell us about your project *</label>
                    </div>

                    {error && (
                      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3 p-4 bg-red-50 border-l-2 border-red-400">
                        <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700">{error}</p>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center gap-3 px-10 py-4 bg-text-primary text-white overflow-hidden transition-all duration-300 hover:bg-accent-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="text-[10px] font-light tracking-[0.35em] uppercase">
                        {isSubmitting ? 'Sending…' : 'Send Message'}
                      </span>
                      {isSubmitting
                        ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        : <Send size={14} />
                      }
                    </button>
                  </form>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-14 text-center">
                    <CheckCircle size={40} className="text-accent-primary mx-auto mb-5" strokeWidth={1} />
                    <h3 className="text-2xl font-light text-text-primary mb-3">Thank You!</h3>
                    <p className="text-sm text-text-secondary">Your message has been sent. We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="bg-[#111111] py-16 md:py-20">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-[9px] font-light tracking-[0.45em] uppercase text-accent-primary mb-3 flex items-center gap-3">
                  <span className="w-5 h-px bg-accent-primary" />
                  Find Us
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  Visit Our Studio
                </h2>
              </div>
              <a href={SITE_CONFIG.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase font-light text-accent-primary hover:text-white transition-colors duration-200">
                <MapPin size={12} /> Get Directions
              </a>
            </div>

            {/* Map + Address */}
            <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden border border-white/10">
              {/* Map */}
              <div className="lg:col-span-2 h-[280px] sm:h-[360px] md:h-[420px] relative">
                <iframe
                  title="Samay Innovation Location"
                  src="https://maps.google.com/maps?q=PV+Enclave+Sindhu+Bhavan+Marg+Bodakdev+Ahmedabad+Gujarat+380059&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="100%"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent-primary" />
              </div>

              {/* Address */}
              <div className="bg-[#1a1a1a] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <MapPin size={16} className="text-accent-primary mb-5" />
                  <h3 className="text-base font-light text-white mb-4 tracking-wide">Samay Innovation</h3>
                  <div className="space-y-1 mb-8">
                    {['403 Before, Lane of ICICI Bank', 'PV Enclave, Sindhu Bhavan Marg', 'opp. Satyam House, Bodakdev', 'Ahmedabad, Gujarat 380059'].map((l) => (
                      <p key={l} className="text-white/50 text-sm font-light">{l}</p>
                    ))}
                  </div>
                  <div className="w-6 h-px bg-accent-primary/40 mb-7" />
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock size={12} className="text-accent-primary flex-shrink-0" />
                      <span className="text-white/45 text-xs font-light">Mon – Sat, 10:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={12} className="text-accent-primary flex-shrink-0" />
                      <a href={`tel:${SITE_CONFIG.phone}`} className="text-white/45 text-xs font-light hover:text-accent-primary transition-colors">
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={SITE_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 border border-accent-primary/50 text-accent-primary px-5 py-3 text-[10px] tracking-[0.25em] uppercase font-light hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-all duration-300"
                >
                  <MapPin size={11} /> Open in Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary mb-6 leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Ready to Transform Your Space?
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-10">
              Visit our studio in Ahmedabad or reach out through any channel above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href={SITE_CONFIG.mapUrl}>Get Directions</Button>
              <Button variant="outline" size="lg" href="/portfolio">View Our Work</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
