export function Challenge() {
  return (
    <section id="challenge" className="section container">
      <div className="challenge-box relative overflow-hidden">
        <div className="challenge-glow"></div>
        <div className="relative z-10">
          <div className="badge mb-2">Centrepiece Initiative</div>
          <h2 className="mb-1 text-2xl tracking-tight text-primary">UK Schools AI Agent Challenge</h2>
          <p className="text-secondary text-lg max-w-800 mx-auto mb-2">
            An annual national competition for KS4 and KS5 students 
            to build responsible agents solving real-world problems. 
          </p>
          <div className="challenge-grid">
            <div className="challenge-feature">
              <div className="feature-dot"></div>
              <h4 className="text-primary mb-1">Theme Year 1</h4>
              <p className="text-secondary text-sm">Agents for Accessibility. Design responsibly for a real audience.</p>
            </div>
            <div className="challenge-feature">
              <div className="feature-dot"></div>
              <h4 className="text-primary mb-1">The Rules</h4>
              <p className="text-secondary text-sm">Entries must explicitly justify Policy, Budget, and declared side effects.</p>
            </div>
            <div className="challenge-feature">
              <div className="feature-dot"></div>
              <h4 className="text-primary mb-1">Free Entry</h4>
              <p className="text-secondary text-sm">No financial barrier to participation for UK state schools.</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="btn btn-primary glow-btn px-6">
              <span>Register Interest for 2026</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
