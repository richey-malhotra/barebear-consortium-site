import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Partners } from './components/Partners';
import { Challenge } from './components/Challenge';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  const [contactPrefill, setContactPrefill] = useState('');

  useEffect(() => {
    document.title = "UK Schools AI Consortium";
  }, []);

  const handleRegisterInterest = () => {
    setContactPrefill("I'd like to register interest in the UK Schools AI Agent Challenge 2026 and learn more about how to get involved.");
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Features />
        <Partners />
        <Challenge onRegisterInterest={handleRegisterInterest} />
        <Contact prefillMessage={contactPrefill} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
