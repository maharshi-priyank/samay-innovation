import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAVIGATION, SITE_CONFIG } from '../../lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 dark:bg-dark-bg-primary/95 backdrop-blur-md border-b border-border-light/20 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo/logo.svg" 
                alt={SITE_CONFIG.name}
                className={`h-10 w-auto transition-all duration-500`}
                style={{
                  filter: isScrolled 
                    ? 'brightness(0) saturate(100%)' // Dark color when scrolled (matches text-primary)
                    : 'brightness(0) invert(1)' // White when transparent
                }}
                onError={(e) => {
                  e.currentTarget.src = '/logo/logo.png';
                }}
              />
              <span className={`text-base font-light tracking-[0.15em] uppercase transition-colors duration-500 ${
                isScrolled 
                  ? 'text-text-primary dark:text-dark-text-primary' 
                  : 'text-white'
              }`}>
                SAMAY INNOVATION
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {NAVIGATION.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-xs font-light tracking-widest uppercase transition-colors duration-500 ${
                      isScrolled
                        ? isActive
                          ? 'text-text-primary dark:text-dark-text-primary'
                          : 'text-text-tertiary dark:text-dark-text-tertiary hover:text-text-primary dark:hover:text-dark-text-primary'
                        : isActive
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-500 ${
                isScrolled 
                  ? 'text-text-primary dark:text-dark-text-primary' 
                  : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-dark-bg-primary md:hidden"
            >
              <div className="flex flex-col h-full p-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="self-end p-2 mb-8"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>

                <nav className="space-y-6">
                  {NAVIGATION.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm font-light tracking-widest uppercase text-text-primary dark:text-dark-text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
