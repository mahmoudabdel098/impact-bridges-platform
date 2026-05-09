import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Play, Milestone, Compass, Hexagon, Shield, Zap, Info } from 'lucide-react';

const About = () => {
  const identityImg = "/assets/identity.png";

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* IDENTITY - SLIDE 1 & 17 */}
      <section>
        <div className="content-box">
          <div className="flex-between" style={{ marginBottom: '4rem', alignItems: 'flex-start' }}>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-huge"
            >
              Architettura<br /><span className="gradient-text">dell'Impatto.</span>
            </motion.h1>
            <div className="feature-pill" style={{ marginTop: '1rem' }}>
               <Info size={14} /> Structure & Governance
            </div>
          </div>
          
          <div className="grid-2" style={{ marginBottom: '2rem' }}>
            <div className="main-card bg-grid" style={{ padding: '4rem' }}>
              <div className="pill-number" style={{ marginBottom: '2rem', background: 'var(--text-main)', color: 'var(--bg-main)' }}><Target size={24} /></div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Brasnext S.r.l.</h3>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                L'operatore ufficiale con sede a Milano. Rappresenta il braccio operativo del progetto, gestendo la contrattualistica, la logistica e la produzione audiovisiva. Brasnext trasforma la visione in esecuzione tecnica impeccabile, garantendo che ogni partnership sia solida dal punto di vista legale e operativo.
              </p>
            </div>
            <div className="main-card bg-grid" style={{ padding: '4rem' }}>
              <div className="pill-number" style={{ marginBottom: '2rem', background: 'var(--accent-purple)', color: '#fff' }}><Play size={24} /></div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Impact Story360</h3>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                Il brand narrativo e la "factory" creativa. Impact Story360 si occupa di catturare l'anima dei progetti attraverso il reportage cinematografico. Non facciamo pubblicità: documentiamo la realtà del Terzo Settore intrecciandola con le strategie di sostenibilità delle aziende partner.
              </p>
            </div>
          </div>
          
          <div className="main-card" style={{ background: 'var(--text-main)', color: 'var(--bg-main)', padding: '6rem 4rem', overflow: 'hidden' }}>
             <div className="grid-2" style={{ alignItems: 'center' }}>
                <div>
                   <div className="pill-number" style={{ marginBottom: '2rem', borderColor: 'rgba(255,255,255,0.2)' }}><Users size={24} /></div>
                   <h3 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1 }}>ImpactBridges</h3>
                   <p style={{ opacity: 0.6, fontSize: '1.2rem', maxWidth: '600px', lineHeight: 1.6 }}>
                     La piattaforma di matching e dialogo. ImpactBridges è l'ecosistema che connette Brasnext e Impact Story360 con il mercato. È il luogo dove il Profit e il Non-Profit si incontrano per colmare il "relational gap" e generare valore sociale misurabile.
                   </p>
                </div>
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                   <img 
                     src={identityImg} 
                     alt="Identity" 
                     style={{ width: '80%', filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.15))' }}
                   />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE - SLIDE 3 & 4 */}
      <section style={{ background: 'var(--bg-main)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="content-box">
          <div className="grid-2" style={{ alignItems: 'center', gap: '6rem' }}>
             <div>
                <h2 style={{ fontSize: '4rem', fontWeight: 950, lineHeight: 1, marginBottom: '3rem' }}>Perché esistiamo.</h2>
                <p className="text-muted" style={{ fontSize: '1.3rem', lineHeight: 1.6, marginBottom: '3rem' }}>
                   Il mercato ESG a Milano è saturo di dati freddi e brochure auto-celebrative. Le aziende hanno bisogno di <strong>storie reali</strong> per coinvolgere gli stakeholder, mentre il Terzo Settore ha bisogno di <strong>risorse e visibilità qualificata</strong>.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                   <div className="main-card" style={{ background: 'var(--bg-card)', padding: '2rem', flex: 1 }}>
                      <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Problema</h4>
                      <p className="text-muted" style={{ fontSize: '0.9rem' }}>Frammentazione tra profit e non-profit, mancanza di fiducia, narrazione inefficace.</p>
                   </div>
                   <div className="main-card" style={{ background: 'var(--bg-card)', padding: '2rem', flex: 1 }}>
                      <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Soluzione</h4>
                      <p className="text-muted" style={{ fontSize: '0.9rem' }}>Un intermediario strategico che valida, connette e documenta l'impatto.</p>
                   </div>
                </div>
             </div>
             <div className="main-card bg-grid" style={{ padding: '4rem', background: 'var(--bg-card)' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>Milano Vision 2026</h3>
                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                   Entro il 2026 vogliamo essere il punto di riferimento per ogni azienda milanese che desidera trasformare il proprio bilancio sociale in un racconto vivo e partecipato.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                   {[
                     'Mappatura di 50+ ETS certificate',
                     'Produzione di 30+ reportage cinematografici',
                     'Attivazione di 20 tavoli di dialogo permanenti'
                   ].map((item, i) => (
                     <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontWeight: 700 }}>
                        <div style={{ width: '8px', height: '8px', background: 'var(--accent-purple)', borderRadius: '50%' }}></div>
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* ROADMAP 2026 - SLIDE 16 */}
      <section>
        <div className="content-box">
          <div className="flex-between" style={{ marginBottom: '5rem' }}>
            <h2 className="text-huge" style={{ fontSize: '5rem' }}>Evoluzione.</h2>
            <div className="feature-pill">
               <Milestone size={14} /> Tappe Strategiche
            </div>
          </div>
          
          <div className="grid-2" style={{ gap: '2rem' }}>
            {[
              { q: 'Q1 2026', title: 'Audit & Selezione', desc: 'Identificazione delle 10 ETS milanesi con i progetti più scalabili e trasparenti.' },
              { q: 'Q2 2026', title: 'Dialogo & Matching', desc: 'Creazione dei primi tavoli di dialogo tra C-Level aziendali e direttori del sociale.' },
              { q: 'Q3 2026', title: 'Produzione Real', desc: 'Sviluppo dei reportage "on-site" per documentare l\'attivazione dei progetti.' },
              { q: 'Q4 2026', title: 'Impatto Certificato', desc: 'Consegna dell\'Impact Report 2026 e apertura delle candidature per il nuovo anno.' }
            ].map((phase, i) => (
              <div key={i} className="main-card" style={{ background: 'var(--bg-main)', border: '1px solid var(--border-subtle)' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div className="pill-number" style={{ background: i === 0 ? 'var(--accent-purple)' : 'var(--text-main)', color: 'var(--bg-main)', width: 'auto', padding: '0 1.5rem' }}>{phase.q}</div>
                    <div style={{ color: 'var(--accent-purple)' }}><Hexagon size={24} /></div>
                 </div>
                 <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>{phase.title}</h3>
                 <p className="text-muted" style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
