import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Globe, Mail, ArrowUpRight, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--text-main)', color: 'var(--bg-main)', padding: '8rem 4rem 4rem', 
      borderTop: '1px solid var(--border-subtle)' 
    }}>
      <div className="content-box">
        <div className="grid-2" style={{ marginBottom: '8rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem', fontWeight: 950, marginBottom: '2rem', letterSpacing: '-0.04em' }}>
              IMPACTBRIDGES.
            </h2>
            <p style={{ opacity: 0.5, maxWidth: '400px', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem' }}>
              Il primo ecosistema a Milano che trasforma la responsabilità sociale in asset strategico reale.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
               <a href="#" style={{ color: 'var(--bg-main)' }}><Globe size={20} /></a>
               <a href="#" style={{ color: 'var(--bg-main)' }}><Share2 size={20} /></a>
               <a href="#" style={{ color: 'var(--bg-main)' }}><Mail size={20} /></a>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
             <div>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', opacity: 0.3 }}>Pagine</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   <Link to="/" style={{ color: 'var(--bg-main)', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
                   <Link to="/about" style={{ color: 'var(--bg-main)', textDecoration: 'none', fontWeight: 600 }}>About</Link>
                   <Link to="/services" style={{ color: 'var(--bg-main)', textDecoration: 'none', fontWeight: 600 }}>Tecnologia</Link>
                   <Link to="/impact" style={{ color: 'var(--bg-main)', textDecoration: 'none', fontWeight: 600 }}>Impact Feed</Link>
                </div>
             </div>
             <div>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', opacity: 0.3 }}>Newsletter</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '1.5rem' }}>Ricevi aggiornamenti sulla stagione ESG 2026.</p>
                <div style={{ display: 'flex', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '0.5rem' }}>
                   <input type="email" placeholder="latua@email.com" style={{ background: 'none', border: 'none', color: 'var(--bg-main)', width: '100%', outline: 'none' }} />
                   <button style={{ background: 'none', border: 'none', color: 'var(--accent-purple)', cursor: 'pointer' }}><ArrowUpRight /></button>
                </div>
             </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4rem', borderTop: '1px solid rgba(128,128,128,0.1)', fontSize: '0.8rem', opacity: 0.4 }}>
           <p>© 2026 ImpactBridges by Brasnext S.r.l. All rights reserved.</p>
           <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#" style={{ color: 'var(--bg-main)' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'var(--bg-main)' }}>Cookie Policy</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="cinematic-container">
      <div className="noise-overlay" />
      <Navigation />
      <main style={{ minHeight: '100vh' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
