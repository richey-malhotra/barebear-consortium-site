import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Partners } from './components/Partners';
import { Challenge } from './components/Challenge';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    document.title = "UK Schools AI Consortium";
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Features />
        <Partners />
        <Challenge />
      </main>
      <Footer />
    </div>
  );
}

export default App;
