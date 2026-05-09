import React from 'react';
import { motion } from 'framer-motion';
import { Play, MapPin, Users, Globe, Video, BarChart3, Database, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const Impact = () => {
  const cameraImg = "/assets/camera.png";
  const globeImg = "/assets/globe.png";

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* ETS FOCUS - SLIDE 8 & 14 */}
      <section>
        <div className="content-box">
          <h1 className="text-huge" style={{ marginBottom: '4rem' }}>Impatto Reale.<br /><span className="text-muted">Dati, non promesse.</span></h1>
          
          <div className="main-card bg-grid" style={{ padding: '0' }}>
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div style={{ padding: '4rem' }}>
                <div className="feature-pill" style={{ marginBottom: '2rem' }}><ShieldCheck size={14} /> Terzo Settore Validato</div>
                <h2 style={{ fontSize: '3.5rem', fontWeight: 950, marginBottom: '2.5rem', lineHeight: 1 }}>Protagonisti del <br />cambiamento.</h2>
                <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.6 }}>
                  Gli Enti del Terzo Settore (ETS) di Milano sono la linfa vitale del nostro territorio. ImpactBridges non è solo uno strumento per le aziende, ma un acceleratore di visibilità e risorse per chi opera ogni giorno nel sociale. Aiutiamo le ETS a passare dal "bisogno" al "progetto", rendendo il loro impatto leggibile per il mercato corporate.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                   <div className="main-card" style={{ padding: '2rem', background: 'var(--bg-main)' }}>
                      <Database className="accent-text" size={32} style={{ marginBottom: '1rem' }} />
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Accesso Risorse</h4>
                      <p className="text-muted" style={{ fontSize: '0.85rem' }}>Connettiamo i tuoi progetti con le strategie CSR delle grandi imprese milanesi.</p>
                   </div>
                   <div className="main-card" style={{ padding: '2rem', background: '#f9f9f9' }}>
                      <HeartHandshake className="accent-text" size={32} style={{ marginBottom: '1rem' }} />
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Dialogue Table</h4>
                      <p className="text-muted" style={{ fontSize: '0.85rem' }}>Entra in tavoli di co-progettazione dove il tuo valore viene riconosciuto e amplificato.</p>
                   </div>
                </div>
              </div>
              <div style={{ textAlign: 'center', background: 'var(--bg-main)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <img 
                   src={cameraImg} 
                   alt="Impact Camera" 
                   style={{ width: '85%', filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.15))' }}
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE 10 EPISODES - SLIDE 11 */}
      <section style={{ background: 'var(--bg-main)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="content-box">
          <div className="flex-between" style={{ marginBottom: '5rem' }}>
            <div>
               <h2 className="text-huge" style={{ fontSize: '5rem' }}>Le 10 Puntate.</h2>
               <p className="text-muted" style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Un viaggio narrativo attraverso 10 storie di eccellenza sociale a Milano.</p>
            </div>
            <div className="feature-pill" style={{ background: '#000', color: '#fff' }}>STAGIONE 2026</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
            {[
              { t: 'Ambiente Urbano', d: 'Riqualificazione verde nelle periferie milanesi.' },
              { t: 'Inclusione Digitale', d: 'Abbattimento del gap tecnologico per la terza età.' },
              { t: 'Economia Circolare', d: 'Recupero e riuso creativo nel settore tessile.' },
              { t: 'Giovani & Futuro', d: 'Mentorship per il primo inserimento lavorativo.' },
              { t: 'Salute & Comunità', d: 'Presidi di prossimità per le fasce fragili.' },
              { t: 'Cultura Diffusa', d: 'Arte e teatro come strumenti di coesione sociale.' }
            ].map((item, i) => (
              <div key={i} className="main-card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--border-subtle)', background: 'var(--bg-card)' }}>
                <div style={{ height: '200px', background: i % 3 === 0 ? 'var(--accent-purple)' : i % 3 === 1 ? '#000' : 'var(--accent-green)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '0.4rem 1.2rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 800 }}>EPISODIO 0{i+1}</div>
                   <Video color="#fff" size={40} style={{ opacity: 0.2 }} />
                </div>
                <div style={{ padding: '2.5rem' }}>
                   <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.2rem', color: 'var(--accent-purple)' }}>
                      <MapPin size={14} /> <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Milano Core</span>
                   </div>
                   <h4 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.2 }}>{item.t}</h4>
                   <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                     {item.d} Un racconto video di 15 minuti che documenta la sinergia reale tra azienda e ETS.
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MAP - SLIDE 7 & 15 */}
      <section>
        <div className="content-box">
          <div className="main-card" style={{ background: '#000', color: '#fff', padding: '8rem 4rem', borderRadius: '4rem', overflow: 'hidden', position: 'relative' }}>
             <div className="grid-2" style={{ alignItems: 'center', position: 'relative', zIndex: 2 }}>
                <div>
                   <h2 style={{ fontSize: '4.5rem', fontWeight: 950, marginBottom: '2.5rem', lineHeight: 1 }}>La Mappa <br />dell'Impatto.</h2>
                   <p style={{ fontSize: '1.4rem', opacity: 0.6, maxWidth: '550px', marginBottom: '3.5rem', lineHeight: 1.6 }}>
                     Abbiamo mappato meticolosamente le prime 10 ETS a Milano pronte per l'attivazione di partnership strategiche. Ogni punto sulla mappa rappresenta un'opportunità di valore per il territorio e per la tua azienda.
                   </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                       <Link to="/services" className="nav-btn" style={{ background: 'var(--text-main)', color: 'var(--bg-main)', padding: '1.5rem 3.5rem', fontWeight: 800, textDecoration: 'none' }}>Esplora Ecosistema</Link>
                       <Link to="/contacts" className="nav-btn" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '1.5rem 3.5rem', textDecoration: 'none' }}>Criteri di Selezione</Link>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                   <img 
                     src={globeImg} 
                     alt="Globe 3D Stylized" 
                     style={{ width: '90%', filter: 'drop-shadow(0 0 100px rgba(93, 95, 239, 0.3))' }}
                   />
                </div>
             </div>
             {/* Background branding */}
             <div style={{ position: 'absolute', bottom: '-5rem', right: '-5rem', fontSize: '20rem', fontWeight: 950, opacity: 0.05, pointerEvents: 'none' }}>MAP</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
