import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Preloader from './components/ui/Preloader';
import WhatsAppButton from './components/ui/WhatsAppButton';
import BackToTop from './components/ui/BackToTop';
import PageTransition from './components/ui/PageTransition';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Services from './pages/Services';
import './index.css';

// ─── Scroll to top on every route change ────────────────────────────────────

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// ─── Page curtain that sweeps across on every route change ──────────────────

function RouteCurtain() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    setPhase('in');
    setVisible(true);

    const t1 = setTimeout(() => setPhase('out'), 380);
    const t2 = setTimeout(() => setVisible(false), 780);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [location.key]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] pointer-events-none bg-[#111111]"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      style={{ transformOrigin: phase === 'in' ? 'bottom' : 'top' }}
      transition={{ duration: 0.38, ease: [0.76, 0, 0.24, 1] }}
    />
  );
}

// ─── Animated routes ─────────────────────────────────────────────────────────

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/portfolio/:slug" element={<PageTransition><ProjectDetails /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
        <Route path="/blogs/:slug" element={<PageTransition><BlogDetails /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

// ─── Root layout (uses hooks that need Router context) ───────────────────────

function Layout() {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <ScrollProgress />
      <Preloader />
      <RouteCurtain />
      <div className="min-h-screen flex flex-col" style={{ cursor: 'none' }}>
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
