import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Grid2x2, Wrench, Info, BookOpen, Mail, X, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/',          label: 'Home',      Icon: Home       },
  { href: '/portfolio', label: 'Portfolio', Icon: Grid2x2    },
  { href: '/services',  label: 'Services',  Icon: Wrench     },
  { href: '/about',     label: 'About',     Icon: Info       },
  { href: '/blogs',     label: 'Blogs',     Icon: BookOpen   },
  { href: '/contact',   label: 'Contact',   Icon: Mail       },
];

export default function BottomNav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          className="flex items-center gap-1 px-3 py-2 rounded-full"
          style={{
            background: 'rgba(10,10,10,0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 8px 40px rgba(0,0,0,0.5), 0 0 60px rgba(201,169,122,0.04)',
          }}
        >
          {/* Brand mark */}
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-2 mr-1 group"
            aria-label="Home"
          >
            <Sparkles
              size={13}
              className="text-accent-primary group-hover:text-white transition-colors duration-300"
            />
            <span className="text-[11px] font-light tracking-[0.25em] uppercase text-white/50 group-hover:text-white/80 transition-colors duration-300">
              SI
            </span>
          </Link>

          {/* Divider */}
          <div className="w-px h-5 bg-white/10 mr-1" />

          {/* Nav items */}
          {NAV_ITEMS.map(({ href, label, Icon }) => {
            const active = isActive(href);
            const hovered = hoveredHref === href;

            return (
              <Link
                key={href}
                to={href}
                onMouseEnter={() => setHoveredHref(href)}
                onMouseLeave={() => setHoveredHref(null)}
                className="relative"
                aria-label={label}
              >
                <motion.div
                  className="relative flex items-center gap-2 px-3 py-2 rounded-full overflow-hidden"
                  animate={{
                    paddingLeft: hovered || active ? 12 : 10,
                    paddingRight: hovered || active ? 12 : 10,
                  }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Active/hover background pill */}
                  <AnimatePresence>
                    {(active || hovered) && (
                      <motion.span
                        key="bg"
                        layoutId={active ? 'active-pill' : undefined}
                        className={`absolute inset-0 rounded-full ${active ? 'bg-accent-primary/15' : 'bg-white/6'}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: active ? 1.1 : hovered ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon
                      size={15}
                      strokeWidth={active ? 1.8 : 1.5}
                      className={`relative z-10 transition-colors duration-200 ${
                        active
                          ? 'text-accent-primary'
                          : hovered
                          ? 'text-white/90'
                          : 'text-white/40'
                      }`}
                    />
                  </motion.div>

                  {/* Label — slides in on hover/active */}
                  <AnimatePresence>
                    {(hovered || active) && (
                      <motion.span
                        key="label"
                        initial={{ opacity: 0, width: 0, x: -4 }}
                        animate={{ opacity: 1, width: 'auto', x: 0 }}
                        exit={{ opacity: 0, width: 0, x: -4 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className={`relative z-10 text-[10px] font-light tracking-[0.2em] uppercase whitespace-nowrap overflow-hidden ${
                          active ? 'text-accent-primary' : 'text-white/70'
                        }`}
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Active dot */}
                  {active && !hovered && (
                    <motion.span
                      layoutId="active-dot"
                      className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-primary"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </nav>

      {/* ── Mobile nav ── */}
      <nav className="md:hidden fixed bottom-5 left-4 right-4 z-50">
        <div
          className="flex items-center justify-between px-5 py-3 rounded-full"
          style={{
            background: 'rgba(10,10,10,0.88)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.5)',
          }}
        >
          {/* Active page indicator + logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <Sparkles size={13} className="text-accent-primary" />
            <span className="text-[11px] font-light tracking-[0.2em] uppercase text-white/60">
              {NAV_ITEMS.find(({ href }) => isActive(href))?.label ?? 'Samay'}
            </span>
          </Link>

          {/* Hamburger / close */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={16} className="text-white/70" />
                </motion.div>
              ) : (
                <motion.div
                  key="burger"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-[5px]"
                >
                  <span className="w-5 h-px bg-white/60" />
                  <span className="w-3 h-px bg-white/40" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40"
            style={{
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              backgroundColor: 'rgba(10,10,10,0.9)',
            }}
          >
            <div className="flex flex-col justify-center h-full px-8 pb-28 pt-16">
              {NAV_ITEMS.map(({ href, label, Icon }, i) => {
                const active = isActive(href);
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  >
                    <Link
                      to={href}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex items-center gap-5 py-5 border-b transition-colors duration-200 ${
                        active ? 'border-accent-primary/30' : 'border-white/6 hover:border-white/15'
                      }`}
                    >
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${active ? 'bg-accent-primary/15' : 'bg-white/5 group-hover:bg-white/10'}`}>
                        <Icon
                          size={15}
                          strokeWidth={1.5}
                          className={active ? 'text-accent-primary' : 'text-white/40 group-hover:text-white/70'}
                        />
                      </div>
                      <span
                        className={`text-3xl font-light transition-colors duration-200 ${active ? 'text-accent-primary' : 'text-white/70 group-hover:text-white'}`}
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        {label}
                      </span>
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
