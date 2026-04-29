import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    document.title = "UK Schools AI Consortium";
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-content">
          <div className="logo text-gradient">barebear // consortium</div>
          <div className="nav-links">
            <a href="#curriculum">Curriculum</a>
            <a href="#partners">Partners</a>
            <a href="#challenge">Challenge</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero container">
          <div className="animate-in">
            <h1>A UK schools resource on <span className="text-gradient">responsible AI agents</span></h1>
            <p className="delay-1 text-secondary max-w-800 mx-auto mb-3">
              An open coalition to build, assess, and scale the curriculum for KS4–KS5 Computer Science. 
              Free for classrooms, backed by industry and education leaders.
            </p>
            <div className="delay-2 flex-center-gap">
              <a href="#curriculum" className="btn btn-primary">View the Curriculum</a>
              <a href="#partners" className="btn btn-secondary">Join the Consortium</a>
            </div>
          </div>
        </section>

        <section id="curriculum" className="section container">
          <div className="text-center mb-3">
            <h2>The Gap in KS4–KS5</h2>
            <p className="text-secondary max-w-600 mx-auto mt-1">
              A spec-mapped, exam-board aligned resource on teaching AI agents safely does not exist yet.
            </p>
          </div>
          
          <div className="grid-features">
            <div className="card">
              <h3 className="mb-1">Free Core Curriculum</h3>
              <p className="text-secondary">
                12 lessons, open-source and MIT-licensed. Built to run in browsers with zero setup. 
                Already piloted in UK schools to teach state, policy, side-effects, and honest uncertainty.
              </p>
            </div>
            <div className="card">
              <h3 className="mb-1">Spec-Mapped Assessment</h3>
              <p className="text-secondary">
                Creating the resources schools actually buy: topic tests, mark schemes, 
                and knowledge organisers aligned with the latest AQA, OCR, and BTEC specifications.
              </p>
            </div>
            <div className="card">
              <h3 className="mb-1">Teacher CPD Pathway</h3>
              <p className="text-secondary">
                80% of A-level CS teachers are non-specialists. We are building the specific training 
                needed to confidently deliver complex agentic AI concepts to 16-18 year olds.
              </p>
            </div>
          </div>
        </section>

        <section id="partners" className="section container">
          <div className="text-center">
            <h2>Consortium Partners</h2>
            <p className="text-secondary max-w-600 mx-auto mt-1">
              We are building a coalition of learned societies, non-profits, and AI labs. No single organisation owns the ecosystem.
            </p>
          </div>
          
          <div className="grid-logos">
            <div className="logo-placeholder" style={{ border: 'none', background: 'transparent' }}>BCS Academy</div>
            <div className="logo-placeholder" style={{ border: 'none', background: 'transparent' }}>Computing at School</div>
            <img src="https://cdn.simpleicons.org/raspberrypi/white" alt="Raspberry Pi Fdn" height="40" />
            <img src="https://cdn.simpleicons.org/microbit/white" alt="Micro:bit Fdn" height="40" />
            <img src="https://cdn.simpleicons.org/anthropic/white" alt="Anthropic" height="40" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" style={{ filter: 'invert(1)' }} alt="OpenAI" height="40" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" style={{ filter: 'invert(1) grayscale(100%) brightness(200%)' }} alt="Google (Gemini)" height="35" />
          </div>
        </section>

        <section id="challenge" className="section container">
          <div className="challenge-box">
            <h2 className="mb-1 text-2xl">UK Schools AI Agent Challenge</h2>
            <p className="text-secondary text-lg max-w-800 mx-auto mb-2">
              An annual national competition for KS4 and KS5 students 
              to build responsible agents solving real-world problems. 
            </p>
            <div className="challenge-grid">
              <div>
                <h4 className="text-primary mb-1">Theme Year 1</h4>
                <p className="text-secondary">Agents for Accessibility. Design responsibly for a real audience.</p>
              </div>
              <div>
                <h4 className="text-primary mb-1">The Rules</h4>
                <p className="text-secondary">Entries must explicitly justify Policy, Budget, and declared side effects.</p>
              </div>
              <div>
                <h4 className="text-primary mb-1">Free Entry</h4>
                <p className="text-secondary">No financial barrier to participation for UK state schools.</p>
              </div>
            </div>
            <button className="btn btn-primary mt-3">Register Interest for 2026</button>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p className="text-secondary">&copy; 2026 barebear curriculum project. Open source pedagogy for a complex world.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
