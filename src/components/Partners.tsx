import { SiAnthropic, SiOpenai, SiGoogle, SiRaspberrypi } from 'react-icons/si';
import bcsLogo from '../assets/bcs-logo.svg';
import casLogo from '../assets/cas-logo.png';
import turingLogo from '../assets/turing-logo.svg';
import ncscLogo from '../assets/ncsc-logo.svg';
import oakLogo from '../assets/oak-logo.svg';

export function Partners() {
  const logos = [
    { type: 'img', src: turingLogo, alt: "The Alan Turing Institute", height: '56px', noInvert: true },
    { type: 'img', src: ncscLogo, alt: "National Cyber Security Centre", height: '40px' },
    { type: 'img', src: oakLogo, alt: "Oak National Academy", height: '40px' },
    { type: 'img', src: bcsLogo, alt: "BCS Academy", height: '40px', noInvert: true },
    { type: 'img', src: casLogo, alt: "Computing at School", height: '50px' },
    { type: 'icon', component: <SiRaspberrypi size={40} />, alt: "Raspberry Pi Foundation" },
    { type: 'text', text: "Micro:bit", alt: "Micro:bit Foundation" },
    { type: 'icon', component: <SiAnthropic size={40} />, alt: "Anthropic" },
    { type: 'icon', component: <SiGoogle size={40} />, alt: "Google (Gemini)" },
    { type: 'icon', component: <SiOpenai size={40} />, alt: "OpenAI" },
  ];

  const renderLogo = (logo: any, index: number) => {
    let filter = 'brightness(0) invert(1)'; // default: make dark assets white
    if (logo.noInvert) filter = 'none';      // already white (e.g. Turing SVG text)
    return (
      <div key={index} className={`logo-item tooltip ${logo.type === 'text' ? 'text-logo' : logo.type === 'icon' ? 'icon-logo' : ''}`} data-tooltip={logo.alt}>
        {logo.type === 'img' && <img src={logo.src} alt={logo.alt} style={{ filter, height: logo.height, objectFit: 'contain' }} />}
        {logo.type === 'icon' && logo.component}
        {logo.type === 'text' && logo.text}
      </div>
    );
  };

  return (
    <section id="partners" className="section container">
      <div className="text-center">
        <h2 className="section-title tracking-tight">Target Consortium Ecosystem</h2>
        <p className="text-secondary max-w-600 mx-auto mt-1 text-lg">
          We are building a coalition of learned societies, non-profits, and AI labs. The following institutions represent the standard of excellence we aim to integrate.
        </p>
      </div>
      
      <div className="logo-scroller">
        <div className="logo-track">
          {logos.map((logo, index) => renderLogo(logo, index))}
          {logos.map((logo, index) => renderLogo(logo, index + logos.length))}
        </div>
      </div>
    </section>
  );
}
