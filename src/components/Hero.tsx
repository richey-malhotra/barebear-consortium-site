export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="https://raw.githubusercontent.com/richey-malhotra/barebear/v0.4.1/assets/demo.gif" alt="Background Demo" />
      </div>
      <div className="hero-glow"></div>
      <div className="container relative z-10">
        <div className="hero-content animate-in">
          <div className="badge mb-2 mx-auto">Open Source Pedagogy</div>
          <h1 className="hero-title tracking-tight text-primary">
            A UK schools resource on <br/>
            <span className="text-gradient">responsible AI agents.</span>
          </h1>
          <p className="hero-subtitle text-secondary max-w-800 mx-auto mb-3 delay-1">
            An open coalition to build, assess, and scale the curriculum for KS4–KS5 Computer Science. 
            Free for classrooms, backed by industry and education leaders.
          </p>
          <div className="flex-center-gap delay-2">
            <a href="#curriculum" className="btn btn-primary glow-btn">
              <span>View the Curriculum</span>
            </a>
            <a href="#partners" className="btn btn-secondary glass-btn">
              <span>Join the Consortium</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
