import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const appTitle = import.meta.env.VITE_APP_TITLE || 'Acme Metrics';

function App() {
  return (
    <main className="shell">
      <section className="card">
        <p className="eyebrow">Analytics Dashboard</p>
        <h1>{appTitle}</h1>
        <p className="lede">
          Monitor product usage, conversion, and retention from one clean
          workspace built for fast weekly reviews.
        </p>
        <div className="status-grid">
          <div>
            <span>Visitors</span>
            <strong>42,830</strong>
          </div>
          <div>
            <span>Conversion</span>
            <strong>8.4%</strong>
          </div>
          <div>
            <span>Retention</span>
            <strong>71%</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
