import { SiAnthropic, SiOpenai, SiGoogle, SiRaspberrypi } from 'react-icons/si';

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
        <div className="logo-item text-logo">BCS Academy</div>
        <div className="logo-item text-logo">Computing at School</div>
        
        <div className="logo-item icon-logo tooltip" data-tooltip="Raspberry Pi Foundation">
          <SiRaspberrypi size={40} />
        </div>
        
        {/* Micro:bit doesn't have an official icon in simpleicons, using text for reliability */}
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
