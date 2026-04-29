import { FiBookOpen, FiEdit, FiAward } from 'react-icons/fi';

export function Features() {
  return (
    <section id="curriculum" className="section container">
      <div className="text-center mb-3">
        <h2 className="section-title tracking-tight">The Gap in KS4–KS5</h2>
        <p className="text-secondary max-w-600 mx-auto mt-1 text-lg">
          A spec-mapped, exam-board aligned resource on teaching AI agents safely does not exist yet.
        </p>
      </div>
      
      <div className="bento-grid">
        <div className="bento-card hover-glow">
          <div className="card-icon"><FiBookOpen /></div>
          <h3 className="mb-1 text-primary tracking-tight">Free Core Curriculum</h3>
          <p className="text-secondary">
            12 lessons, open-source and MIT-licensed. Built to run in browsers with zero setup. 
            Already piloted in UK schools to teach state, policy, side-effects, and honest uncertainty.
          </p>
        </div>
        
        <div className="bento-card hover-glow">
          <div className="card-icon"><FiEdit /></div>
          <h3 className="mb-1 text-primary tracking-tight">Spec-Mapped Assessment</h3>
          <p className="text-secondary">
            Creating the resources schools actually buy: topic tests, mark schemes, 
            and knowledge organisers aligned with the latest AQA, OCR, and BTEC specifications.
          </p>
        </div>
        
        <div className="bento-card hover-glow bento-span-full">
          <div className="card-icon"><FiAward /></div>
          <h3 className="mb-1 text-primary tracking-tight">Teacher CPD Pathway</h3>
          <p className="text-secondary max-w-800">
            80% of A-level CS teachers are non-specialists. We are building the specific training 
            needed to confidently deliver complex agentic AI concepts to 16-18 year olds, translating 
            advanced topics into robust pedagogy.
          </p>
        </div>
      </div>
    </section>
  );
}
