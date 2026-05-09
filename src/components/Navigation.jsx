import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Plus, ArrowUpRight, Menu, X, ChevronRight } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const links = [
    { name: 'Il Progetto', path: '/', desc: 'Scopri la nostra visione e i numeri dell\'impatto.' },
    { name: 'Chi Siamo', path: '/about', desc: 'Le tre identità di Brasnext e la roadmap 2026.' },
    { name: 'Tecnologia', path: '/services', desc: 'Come connettiamo profit e non-profit.' },
    { name: 'Impact Feed', path: '/impact', desc: 'Storie reali, video reportage e la mappa ETS.' }
  ];

  return (
    <>
      <header style={{ 
        position: 'fixed', top: '2rem', left: '2rem', right: '2rem', 
        zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 2rem', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)',
        borderRadius: '5rem', border: '1px solid rgba(0,0,0,0.05)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
      }}>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontWeight: 900, fontSize: '1rem', background: '#000', color: '#fff', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>I</div>
            <span style={{ fontWeight: 800, fontSize: '0.9rem', letterSpacing: '-0.02em', color: '#000' }}>IMPACTBRIDGES</span>
          </Link>
          <nav className="desktop-only" style={{ display: 'flex', gap: '2rem' }}>
            {links.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`nav-btn ${location.pathname === link.path ? 'active' : ''}`}
                style={{ fontSize: '0.85rem', fontWeight: 700 }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/contacts" className="nav-btn dark" style={{ padding: '0.75rem 2rem' }}>Contact</Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Full-screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
              background: '#fff', zIndex: 999, padding: '10rem 4rem 4rem'
            }}
          >
            <div className="content-box">
              <div className="grid-2">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {links.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link 
                        to={link.path} 
                        onClick={() => setIsOpen(false)}
                        style={{ textDecoration: 'none', color: '#000' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                           <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>{link.name}</h2>
                           <ChevronRight className="accent-text" />
                        </div>
                        <p className="text-muted" style={{ fontSize: '1.1rem' }}>{link.desc}</p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="main-card" style={{ background: '#f9f9f9', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                   <div style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '2rem', opacity: 0.1 }}>BRIDGES.</div>
                   <p className="text-muted" style={{ maxWidth: '300px' }}>
                     Connettiamo il valore sociale con le strategie aziendali ESG.
                   </p>
                   <Link to="/contacts" onClick={() => setIsOpen(false)} className="btn-primary" style={{ marginTop: '3rem' }}>
                      Inizia un Progetto <ArrowUpRight />
                   </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
