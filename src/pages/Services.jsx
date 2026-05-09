import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, BarChart3, Globe, Zap, Search, MessageSquare, Video, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div style={{ paddingTop: '8rem', position: 'relative' }}>
      <div className="bg-glow" style={{ bottom: '0', left: '0', opacity: 0.06 }} />
      {/* TECHNOLOGY OF DIALOGUE - SLIDE 5 & 6 */}
      <section>
        <div className="content-box">
          <div className="flex-between" style={{ marginBottom: '4rem', alignItems: 'flex-end' }}>
            <h1 className="text-huge">Tecnologia<br /><span className="accent-text glow-text">del Dialogo.</span></h1>
            <p className="text-muted" style={{ maxWidth: '400px', fontSize: '1.1rem', textAlign: 'right' }}>
               Il nostro metodo proprietario per costruire ponti indistruttibili tra Profit e Non-Profit.
            </p>
          </div>
          
          <div className="grid-4">
            {[
              { num: '01', icon: <Search />, title: 'Scopri', desc: 'Identifichiamo gli Enti del Terzo Settore (ETS) milanesi che operano con trasparenza e impatto reale. Niente brochure: solo progetti verificati.' },
              { num: '02', icon: <Zap />, title: 'Seleziona', desc: 'Costruiamo una shortlist su misura per l\'azienda, allineando i valori del brand con le necessità urgenti del territorio.' },
              { num: '03', icon: <MessageSquare />, title: 'Connetti', desc: 'Attiviamo i Dialogue Tables: workshop facilitati dove i leader aziendali e i direttori sociali co-progettano l\'impatto.' },
              { num: '04', icon: <Video />, title: 'Racconta', desc: 'Produciamo contenuti video-narrativi che documentano l\'esperienza reale, rendendo l\'impatto visibile e condivisibile.' }
            ].map((step, i) => (
              <div key={i} className="main-card bg-grid" style={{ padding: '3rem 2rem', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                   <div className="pill-number" style={{ background: 'var(--text-main)', color: 'var(--bg-main)' }}>{step.num}</div>
                   <div className="accent-text">{step.icon}</div>
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem' }}>{step.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES - SLIDE 10, 12, 13 */}
      <section style={{ background: 'var(--bg-main)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="content-box">
          <div className="grid-2" style={{ gap: '6rem' }}>
            <div>
              <h2 style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '2.5rem', lineHeight: 1 }}>Output di Valore.</h2>
              <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '4rem', lineHeight: 1.6 }}>
                Non ci limitiamo a connettere. Produciamo asset concreti che l'azienda può utilizzare per la sua comunicazione strategica e il suo bilancio di sostenibilità.
              </p>
              
              <div className="pill-list" style={{ gap: '2rem' }}>
                <div className="pill-item" style={{ background: 'var(--bg-card)', padding: '2rem' }}>
                   <div className="pill-number" style={{ background: 'var(--accent-purple)', color: 'var(--bg-main)' }}><Play size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>Video-Reportage</h4>
                    <p className="text-muted" style={{ fontSize: '0.95rem' }}>Produzione cinematografica HD che documenta l'incontro tra azienda e progetto sociale. Un racconto autentico senza filtri pubblicitari.</p>
                  </div>
                </div>
                <div className="pill-item" style={{ background: 'var(--bg-card)', padding: '2rem' }}>
                   <div className="pill-number" style={{ background: 'var(--text-main)', color: 'var(--bg-main)' }}><BarChart3 size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>Narrative Impact Report</h4>
                    <p className="text-muted" style={{ fontSize: '0.95rem' }}>Un documento che intreccia dati di impatto granulari con storie umane, perfetto per integrare il bilancio di sostenibilità (ESG).</p>
                  </div>
                </div>
                <div className="pill-item" style={{ background: 'var(--bg-card)', padding: '2rem' }}>
                   <div className="pill-number" style={{ background: 'var(--accent-green)', color: 'var(--bg-main)' }}><Users size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>Dialogue Table Format</h4>
                    <p className="text-muted" style={{ fontSize: '0.95rem' }}>Workshop di facilitazione che garantiscono che la partnership non sia solo economica, ma generi un reale scambio di competenze.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="main-card" style={{ padding: '4rem', background: 'var(--text-main)', color: 'var(--bg-main)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
               <h3 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.1 }}>Perché Funziona.</h3>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                  {[
                    { t: 'Trasparenza Totale', d: 'Monitoraggio costante dei fondi e delle attività sociali.' },
                    { t: 'Efficienza ESG', d: 'Risultati pronti per essere inseriti nei report non-finanziari.' },
                    { t: 'Autenticità', d: 'Una narrazione che rompe gli schemi del marketing tradizionale.' }
                  ].map((item, i) => (
                    <div key={i} style={{ borderLeft: '3px solid var(--accent-purple)', paddingLeft: '2rem' }}>
                       <h5 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.t}</h5>
                       <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{item.d}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET CONTEXT - SLIDE 9 */}
      <section>
        <div className="content-box">
          <div className="main-card bg-grid" style={{ background: 'var(--bg-card)', color: 'var(--text-main)', textAlign: 'center', padding: '8rem 4rem' }}>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 950, marginBottom: '3rem', lineHeight: 1 }}>Il Mercato ESG a Milano.</h2>
            <p className="text-muted" style={{ fontSize: '1.4rem', opacity: 0.8, maxWidth: '900px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
              Milano è l'epicentro della trasformazione sostenibile in Italia. Le aziende che sanno connettersi oggi con il territorio attraverso partnership sincere saranno i leader di domani nella creazione di valore condiviso. ImpactBridges è la chiave per entrare in questa nuova era.
            </p>
            <Link to="/contacts" className="nav-btn dark" style={{ padding: '1.5rem 4rem', textDecoration: 'none' }}>Richiedi la Brochure Completa</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
