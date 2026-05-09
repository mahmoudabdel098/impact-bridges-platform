import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, ChevronRight, Moon, Sun } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const links = [
    { name: 'Il Progetto', path: '/', desc: 'Scopri la nostra visione e i numeri dell\'impatto.' },
    { name: 'Chi Siamo', path: '/about', desc: 'Le tre identità di Brasnext e la roadmap 2026.' },
    { name: 'Tecnologia', path: '/services', desc: 'Come connettiamo profit e non-profit.' },
    { name: 'Impact Feed', path: '/impact', desc: 'Storie reali, video reportage e la mappa ETS.' }
  ];

  return (
    <>
      <header style={{ 
        position: 'fixed', top: '1.5rem', left: '1.5rem', right: '1.5rem', 
        zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0.75rem 1.5rem', background: 'var(--header-bg)', backdropFilter: 'blur(15px)',
        borderRadius: '5rem', border: '1px solid var(--border-subtle)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
        width: 'calc(100% - 3rem)'
      }}>
        <div style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 3rem)', alignItems: 'center', flexShrink: 0 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ fontWeight: 900, fontSize: '0.9rem', background: 'var(--text-main)', color: 'var(--bg-main)', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>I</div>
            <span style={{ fontWeight: 800, fontSize: '0.85rem', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>IMPACTBRIDGES</span>
          </Link>
          <nav className="desktop-only" style={{ display: 'flex', gap: '1.5rem' }}>
            {links.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`nav-btn ${location.pathname === link.path ? 'active' : ''}`}
                style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)' }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexShrink: 0 }}>
          <button 
            onClick={toggleTheme}
            style={{ 
              background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', 
              display: 'flex', alignItems: 'center', color: 'var(--text-main)',
              marginRight: '0.5rem'
            }}
            title="Switch Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <Link to="/contacts" className="nav-btn dark" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>Contact</Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', color: 'var(--text-main)' }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
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
              background: 'var(--bg-main)', zIndex: 999, padding: '10rem 4rem 4rem'
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
                        style={{ textDecoration: 'none', color: 'var(--text-main)' }}
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
                <div className="main-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
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
