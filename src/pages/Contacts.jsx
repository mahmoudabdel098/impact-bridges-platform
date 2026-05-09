import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contacts = () => {
  return (
    <div style={{ paddingTop: '8rem' }}>
      <section>
        <div className="content-box">
          <h1 className="text-huge" style={{ marginBottom: '4rem' }}>Contatti.<br /><span className="text-muted">Iniziamo a costruire.</span></h1>
          
          <div className="grid-2">
            <div>
              <div className="main-card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Partecipa come Azienda</h2>
                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                  Stagione ESG 2026. Selezioniamo 10 aziende lungimiranti per costruire progetti di impatto reale a Milano.
                </p>
                <div className="pill-list">
                  <div className="pill-item">
                     <div className="pill-number">01</div>
                     <p style={{ fontWeight: 600 }}>Shortlist personalizzata di 3 progetti</p>
                  </div>
                  <div className="pill-item">
                     <div className="pill-number">02</div>
                     <p style={{ fontWeight: 600 }}>Tavoli di dialogo con ETS selezionate</p>
                  </div>
                  <div className="pill-item">
                     <div className="pill-number">03</div>
                     <p style={{ fontWeight: 600 }}>Produzione reportage cinematografico</p>
                  </div>
                </div>
              </div>
              
              <div style={{ padding: '2rem' }}>
                 <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
                    <div className="pill-number"><Mail size={20} /></div>
                    <div>
                       <h4 style={{ fontWeight: 700 }}>Email</h4>
                       <p className="text-muted">info@impactbridges.it</p>
                    </div>
                 </div>
                 <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div className="pill-number"><MapPin size={20} /></div>
                    <div>
                       <h4 style={{ fontWeight: 700 }}>Headquarters</h4>
                       <p className="text-muted">Milano, Italia</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="main-card">
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Richiedi una shortlist</h3>
              <p className="text-muted" style={{ marginBottom: '3rem', fontSize: '0.9rem' }}>
                Compila il form in 60 secondi. Riceverai entro breve una proposta personalizzata in base ai tuoi obiettivi ESG/CSR.
              </p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.5 }}>Nome e Azienda</label>
                  <input type="text" placeholder="Es: Mario Rossi, Brand Co." style={{ 
                    padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '1rem' 
                  }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.5 }}>Ruolo</label>
                  <input type="text" placeholder="ESG / CSR / HR / Comunicazione" style={{ 
                    padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '1rem' 
                  }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.5 }}>Tema Prioritario</label>
                  <select style={{ 
                    padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-subtle)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '1rem' 
                  }}>
                    <option>Seleziona un tema...</option>
                    <option>Inclusione Sociale</option>
                    <option>Sostenibilità Ambientale</option>
                    <option>Supporto ai Giovani</option>
                    <option>Altro</option>
                  </select>
                </div>
                <button className="nav-btn dark" style={{ width: '100%', padding: '1.5rem', fontSize: '1.1rem', marginTop: '1rem', border: 'none', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  Invia e ricevi la shortlist <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
