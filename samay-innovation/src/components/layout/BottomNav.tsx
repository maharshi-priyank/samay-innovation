import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NAVIGATION } from '../../lib/constants';

// Nav items without Contact (handled separately as CTA)
const navItems = NAVIGATION.filter((n) => n.name !== 'Contact');

export default function BottomNav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Desktop pill nav ── */}
      <nav className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50 items-center gap-0 px-5 py-2.5 rounded-full backdrop-blur-md bg-black/75 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Logo wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2 pr-5 mr-4 border-r border-white/10"
        >
          <span className="text-white text-[13px] font-light tracking-[0.2em] uppercase">SI</span>
          <span className="text-white/40 text-[10px] tracking-[0.15em] uppercase hidden lg:block">Samay Innovation</span>
        </Link>

        {/* Nav links */}
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              to={item.href}
              className="relative px-4 py-1.5 group"
            >
              <span className={`text-[11px] tracking-[0.2em] uppercase font-light transition-colors duration-200 ${active ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                {item.name}
              </span>
              {active && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute bottom-0 left-4 right-4 h-px bg-accent-primary"
                  transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                />
              )}
            </Link>
          );
        })}

        {/* Contact CTA */}
        <Link
          to="/contact"
          className="ml-4 pl-4 border-l border-white/10 flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase font-light text-accent-primary hover:text-accent-secondary transition-colors duration-200"
        >
          Contact
          <span className="text-[9px]">↗</span>
        </Link>
      </nav>

      {/* ── Mobile pill nav ── */}
      <nav className="md:hidden fixed bottom-5 left-4 right-4 z-50">
        <div className="flex items-center justify-between px-5 py-3 rounded-full backdrop-blur-md bg-black/80 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <span className="text-white text-[13px] font-light tracking-[0.2em] uppercase">SI</span>
            <span className="text-white/40 text-[10px] tracking-widest uppercase">Samay</span>
          </Link>

          {/* Hamburger / close */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={16} className="text-white/70" />
            ) : (
              <div className="flex flex-col gap-[5px]">
                <span className="w-5 h-px bg-white/70" />
                <span className="w-3 h-px bg-white/70" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="md:hidden fixed inset-0 z-40 flex flex-col justify-end pb-28"
            style={{ backdropFilter: 'blur(24px)', backgroundColor: 'rgba(11,16,18,0.92)' }}
          >
            <div className="px-8 space-y-1">
              {NAVIGATION.map((item, i) => {
                const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-4 text-3xl font-light border-b border-white/8 transition-colors duration-200 ${active ? 'text-accent-primary' : 'text-white/70 hover:text-white'}`}
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
