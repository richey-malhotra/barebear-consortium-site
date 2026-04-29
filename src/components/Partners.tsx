import { SiAnthropic, SiOpenai, SiGoogle, SiRaspberrypi } from 'react-icons/si';
import bcsLogo from '../assets/bcs-logo.svg';
import casLogo from '../assets/cas-logo.png';

export function Partners() {
  return (
    <section id="partners" className="section container">
      <div className="text-center">
        <h2 className="section-title tracking-tight">Consortium Partners</h2>
        <p className="text-secondary max-w-600 mx-auto mt-1 text-lg">
          We are building a coalition of learned societies, non-profits, and AI labs. No single organisation owns the ecosystem.
        </p>
      </div>
      
      <div className="grid-logos">
        {/* Strategic Government/Institutional Partners */}
        <div className="logo-item text-logo tooltip" data-tooltip="The Alan Turing Institute">
          The Alan Turing Institute
        </div>
        <div className="logo-item text-logo tooltip" data-tooltip="National Cyber Security Centre">
          NCSC
        </div>
        <div className="logo-item text-logo tooltip" data-tooltip="Oak National Academy">
          Oak National Academy
        </div>

        {/* Existing Partners */}
        <div className="logo-item tooltip" data-tooltip="BCS Academy">
          <img src={bcsLogo} alt="BCS Academy" style={{ filter: 'brightness(0) invert(1)', height: '40px', objectFit: 'contain' }} />
        </div>
        <div className="logo-item tooltip" data-tooltip="Computing at School">
          <img src={casLogo} alt="Computing at School" style={{ filter: 'brightness(0) invert(1)', height: '50px', objectFit: 'contain' }} />
        </div>
        
        <div className="logo-item icon-logo tooltip" data-tooltip="Raspberry Pi Foundation">
          <SiRaspberrypi size={40} />
        </div>
        
        <div className="logo-item text-logo">Micro:bit</div>
        
        <div className="logo-item icon-logo tooltip" data-tooltip="Anthropic">
          <SiAnthropic size={40} />
        </div>
        
        <div className="logo-item icon-logo tooltip" data-tooltip="OpenAI">
          <SiOpenai size={40} />
        </div>
        
        <div className="logo-item icon-logo tooltip" data-tooltip="Google (Gemini)">
          <SiGoogle size={40} />
        </div>
      </div>
    </section>
  );
}
