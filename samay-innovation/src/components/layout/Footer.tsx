import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, ChevronUp, MapPin, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION } from '../../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
    { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-dark-section dark:bg-dark-bg-tertiary text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=600&fit=crop"
          alt="Footer background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/80" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-20">
          {/* Two Column Layout: Logo/Brand on Left, Contact on Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Logo, Brand & Social */}
            <div>
              <div className="mb-6">
                <img 
                  src="/logo/logo.svg" 
                  alt={SITE_CONFIG.name}
                  className="h-16 w-auto brightness-0 invert opacity-90"
                  onError={(e) => {
                    e.currentTarget.src = '/logo/logo.png';
                  }}
                />
              </div>
              <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-white mb-4">
                SAMAY INNOVATION
              </h2>
              <p className="text-sm text-white/60 max-w-md leading-relaxed mb-8">
                {SITE_CONFIG.description}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-bg-dark-section transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="md:text-right">
              <h3 className="text-xs font-light tracking-[0.3em] uppercase text-white/50 mb-6">
                GET IN TOUCH
              </h3>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 md:justify-end">
                  <MapPin size={18} className="text-white/60 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-white/80 md:text-right">
                    <p>No 104/A, 1st Floor Shilp The Address</p>
                    <p>Shilaj Circle, Thaltej, Ahmedabad</p>
                    <p>Gujarat 380059</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-center gap-3 md:justify-end">
                  <Phone size={18} className="text-white/60 flex-shrink-0" />
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-3 md:justify-end">
                  <Mail size={18} className="text-white/60 flex-shrink-0" />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-8">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-xs font-light tracking-wider uppercase text-white/70 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-xs text-white/50">
              Copyright {currentYear} by Samay Innovation
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-bg-dark-section transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </footer>
  );
}
