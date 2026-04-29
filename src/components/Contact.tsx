import { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section container">
      <div className="challenge-box relative overflow-hidden" style={{ marginTop: 0 }}>
        <div className="relative z-10 max-w-600 mx-auto">
          <h2 className="mb-1 text-2xl tracking-tight text-primary">Get in Touch</h2>
          <p className="text-secondary text-lg mb-3">
            Interested in joining the consortium or partnering on the curriculum? Let's talk.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group text-left mb-2">
              <label htmlFor="name" className="text-sm font-bold text-secondary mb-1 block">Name</label>
              <input type="text" id="name" name="name" required className="form-input" placeholder="Your name" />
            </div>
            
            <div className="form-group text-left mb-2">
              <label htmlFor="email" className="text-sm font-bold text-secondary mb-1 block">Email</label>
              <input type="email" id="email" name="email" required className="form-input" placeholder="you@organization.com" />
            </div>
            
            <div className="form-group text-left mb-3">
              <label htmlFor="message" className="text-sm font-bold text-secondary mb-1 block">Message</label>
              <textarea id="message" name="message" required rows={4} className="form-input" placeholder="How can we collaborate?"></textarea>
            </div>

            <button type="submit" className="btn btn-primary glow-btn w-full" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="mt-2 text-sm text-green-400">Message sent successfully! We'll be in touch.</p>
            )}
            {status === 'error' && (
              <p className="mt-2 text-sm text-red-400">Failed to send message. Please try again later.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
