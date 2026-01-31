import React from 'react';
import './index.css';
// @ts-ignore
import { apps } from './appsData';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <span className="logo">NTN.LAB</span>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <h2>Inovação & Simplicidade</h2>
          <p>Laboratório de aplicações focado em utilidade e transparência.</p>
        </div>
      </section>

      <main className="container">
        <div className="apps-grid">
          {apps.map((app: any) => (
            <div key={app.id} className="app-card">
              <h3>{app.name}</h3>
              <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem'}}>
                {app.description}
              </p>
              <div className="btn">Google Play (Em breve)</div>
              <a href={app.privacyLink} className="link-privacy">
                Política de Privacidade
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer style={{textAlign: 'center', padding: '40px', color: '#94a3b8'}}>
        <p>© 2026 NTN.LAB</p>
      </footer>
    </div>
  );
}

export default App;