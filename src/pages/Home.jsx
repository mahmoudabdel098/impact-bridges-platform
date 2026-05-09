import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Shield, ChevronDown, Video, Target, BarChart3, Users } from 'lucide-react';

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Image paths from public assets
  const heroImg = "/assets/hero.png";
  const targetImg = "/assets/target.png";
  const cameraImg = "/assets/camera.png";

  return (
    <div>
      {/* HERO SECTION - 100VH IMPACT */}
      <section style={{ height: '100vh', padding: 0, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div className="content-box" style={{ width: '100%' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="feature-pill" style={{ marginBottom: '1.5rem' }}>
                <Star size={14} fill="currentColor" /> Premier ESG Network Milan 2026
              </div>
              <h1 className="text-huge" style={{ lineHeight: 0.9, marginBottom: '2rem' }}>
                IMPACT<br />
                <span className="gradient-text">BRIDGES.</span>
              </h1>
              <p className="text-muted" style={{ fontSize: '1.4rem', maxWidth: '550px', marginBottom: '3rem', lineHeight: '1.4' }}>
                Il primo ecosistema a Milano che trasforma la responsabilità sociale in asset strategico attraverso la narrazione cinematografica e il dialogo strutturato.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link to="/contacts" className="nav-btn dark" style={{ padding: '1.5rem 3rem', fontSize: '1.1rem' }}>Inizia il Dialogo</Link>
                <Link to="/impact" className="nav-btn" style={{ border: '1px solid #000', padding: '1.5rem 3rem', fontSize: '1.1rem', textDecoration: 'none' }}>Esplora i Reportage</Link>
              </div>
            </motion.div>
            
            <div style={{ position: 'relative' }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)', 
                  padding: '1.5rem', borderRadius: '4rem', 
                  boxShadow: '0 80px 150px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transform: 'rotate(-2deg)'
                }}>
                  <img src={heroImg} alt="Abstract Bridge" style={{ width: '100%', borderRadius: '3rem' }} />
                </div>
              <div className="main-card" 
                style={{ 
                  position: 'absolute', top: '-2rem', right: '-1rem', 
                  padding: '1.5rem', background: 'var(--accent-purple)', color: '#fff',
                  borderRadius: '2rem', zIndex: 10
                }}
              >
                <div style={{ fontWeight: 900, fontSize: '1.5rem' }}>100%</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.7 }}>VERIFIED NETWORK</div>
              </div>
            </div>
          </div>
        </div>
        <motion.div 
          style={{ opacity, position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} color="rgba(0,0,0,0.2)" />
        </motion.div>
      </section>

      {/* DETAILED MISSION - SLIDE 3 & 4 */}
      <section style={{ background: '#fff' }}>
        <div className="content-box">
          <div className="grid-2" style={{ gap: '6rem' }}>
            <div>
               <h2 style={{ fontSize: '4rem', fontWeight: 950, lineHeight: 1, marginBottom: '2rem' }}>La fine delle <br />"brochure sociali".</h2>
               <p className="text-muted" style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                 Le aziende oggi faticano a trovare partner sociali affidabili e il Terzo Settore manca di strumenti per narrare il proprio valore. Questa frammentazione crea un "relational gap" che danneggia l'impatto reale.
               </p>
               <div className="main-card bg-grid" style={{ padding: '3rem' }}>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Il Nostro Approccio</h4>
                  <p className="text-muted" style={{ fontSize: '1rem' }}>
                    Non vendiamo spazi pubblicitari. Costruiamo <strong>dialogo</strong>. Utilizziamo la "Tecnologia del Dialogo" per sincronizzare gli obiettivi ESG delle aziende con i bisogni reali del territorio milanese.
                  </p>
               </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
               <div className="main-card" style={{ background: '#f8f9fb', padding: '3rem' }}>
                  <Zap className="accent-text" size={32} style={{ marginBottom: '1.5rem' }} />
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Matching Strategico</h3>
                  <p className="text-muted">Un'analisi profonda degli obiettivi CSR dell'azienda per trovare la ETS (Ente Terzo Settore) perfetta nella nostra shortlist curata.</p>
               </div>
               <div className="main-card" style={{ background: 'var(--accent-purple)', color: '#fff', padding: '3rem' }}>
                  <Users size={32} style={{ marginBottom: '1.5rem' }} />
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Ecosistema Vivo</h3>
                  <p style={{ opacity: 0.8 }}>Oltre 10 ETS già mappate e pronte per attivare partnership che generano valore misurabile e storie autentiche.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO & STORYTELLING IMPACT - SLIDE 12 */}
      <section style={{ background: '#000', color: '#fff' }}>
        <div className="content-box">
           <div className="grid-2" style={{ alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                 <motion.img 
                   src={cameraImg} 
                   alt="Storytelling" 
                   style={{ width: '90%', filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.1))' }}
                 />
              </div>
              <div>
                 <div className="feature-pill" style={{ background: 'var(--accent-purple)', color: '#fff', border: 'none', marginBottom: '2rem' }}>IMPACT STORY360</div>
                 <h2 style={{ fontSize: '5rem', fontWeight: 950, lineHeight: 1, marginBottom: '2.5rem' }}>Narrazione <br />Cinematografica.</h2>
                 <p style={{ fontSize: '1.3rem', opacity: 0.7, lineHeight: 1.6, marginBottom: '3rem' }}>
                    Documentiamo l'incontro reale sul campo. Niente attori, solo la verità del lavoro sociale intrecciata con la visione aziendale. Il risultato è un asset di comunicazione unico per il bilancio di sostenibilità.
                 </p>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div>
                       <h4 style={{ color: 'var(--accent-purple)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Video-Reportage</h4>
                       <p style={{ fontSize: '0.9rem', opacity: 0.5 }}>Produzione professionale HD per social e canali corporate.</p>
                    </div>
                    <div>
                       <h4 style={{ color: 'var(--accent-purple)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Dialogue Table</h4>
                       <p style={{ fontSize: '0.9rem', opacity: 0.5 }}>Workshop facilitati per massimizzare il valore del partnerariato.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* THE 17 SECTIONS SUMMARY - SLIDE 1 & 17 */}
      <section style={{ background: '#f8f9fb' }}>
        <div className="content-box">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
             <h2 className="text-huge" style={{ fontSize: '6rem' }}>Vision 2026.</h2>
             <p className="text-muted" style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                Un percorso strutturato in 17 tappe per trasformare il modo in cui Milano pensa l'impatto sociale.
             </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             <div className="main-card" style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>01. Brasnext</h3>
                <p className="text-muted">L'operatore logistico e produttivo che garantisce l'esecuzione impeccabile di ogni fase del progetto.</p>
             </div>
             <div className="main-card" style={{ padding: '3rem', border: '2px solid #000' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>02. Shortlist</h3>
                <p className="text-muted">Un accesso esclusivo a una rete verificata di Enti del Terzo Settore accuratamente selezionati per trasparenza e impatto.</p>
             </div>
             <div className="main-card" style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>03. Report</h3>
                <p className="text-muted">Dati granulari e storie umane per trasformare la CSR in un vantaggio competitivo reale sul mercato milanese.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
