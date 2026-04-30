interface ChallengeProps {
  onRegisterInterest: () => void;
}

export function Challenge({ onRegisterInterest }: ChallengeProps) {
  return (
    <section id="challenge" className="section container">
      <div className="challenge-box relative overflow-hidden">
        <div className="challenge-glow"></div>
        <div className="challenge-inner relative z-10">
          {/* Left: Headline + CTA */}
          <div className="challenge-left">
            <div className="badge mb-2">Centrepiece Initiative</div>
            <h2 className="mb-2 text-2xl tracking-tight text-primary">
              UK Schools AI<br />Agent Challenge
            </h2>
            <p className="text-secondary text-lg mb-3">
              An annual national competition for KS4 and KS5 students to build 
              responsible agents solving real-world problems.
            </p>
            <button className="btn btn-primary glow-btn px-6" onClick={onRegisterInterest}>
              Register Interest for 2026
            </button>
          </div>

          {/* Right: Stat cards */}
          <div className="challenge-right">
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
        </div>
      </div>
    </section>
  );
}
