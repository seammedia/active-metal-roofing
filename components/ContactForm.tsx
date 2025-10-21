'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xrbyjqpw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#f5f5f5', padding: '32px', borderRadius: '12px' }}>
      <h3 style={{ fontSize: '1.75rem', marginBottom: '24px', color: '#212121' }}>
        Request a Free Quote
      </h3>

      {status === 'success' && (
        <div style={{ background: '#61CE70', color: '#fff', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px' }}>
          Thank you! We'll be in touch soon.
        </div>
      )}

      {status === 'error' && (
        <div style={{ background: '#f44336', color: '#fff', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px' }}>
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#212121' }}>
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#212121' }}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#212121' }}>
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="service" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#212121' }}>
          Service Required *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
        >
          <option value="">Select a service...</option>
          <option value="Commercial Re-Roofing">Commercial Re-Roofing</option>
          <option value="Commercial Roofing">Commercial Roofing</option>
          <option value="Architectural Cladding">Architectural Cladding</option>
          <option value="Industrial Roofing">Industrial Roofing</option>
          <option value="Roof Inspection">Roof Inspection</option>
          <option value="Colorbond Roofing">Colorbond Roofing</option>
          <option value="Metal Roof Replacement">Metal Roof Replacement</option>
          <option value="Metal Roof Restoration">Metal Roof Restoration</option>
          <option value="Free Quote">Free Quote</option>
        </select>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#212121' }}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          width: '100%',
          padding: '14px',
          background: '#006991',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 700,
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          opacity: status === 'sending' ? 0.7 : 1,
        }}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
