'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8">
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#212121' }}>
        Get Your Free Quote
      </h3>
      <p className="text-gray-600 mb-6">
        Fill out the form and we'll get back to you within 24 hours
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900"
            placeholder="0400 000 000"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900"
          >
            <option value="">Select a service...</option>
            <option value="commercial-re-roofing">Commercial Re-Roofing</option>
            <option value="commercial-roofing">Commercial Roofing</option>
            <option value="architectural-cladding">Architectural Cladding</option>
            <option value="industrial-roofing">Industrial Roofing</option>
            <option value="roof-inspections">Roof Inspections</option>
            <option value="colorbond-replacement">Colorbond Roof Replacement</option>
            <option value="metal-replacement">Metal Roof Replacement</option>
            <option value="metal-restoration">Metal Roof Restoration</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900"
            placeholder="Tell us about your project..."
          />
        </div>

        {status === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 font-medium">Thank you! We'll be in touch soon.</p>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800 font-medium">Something went wrong. Please try again or call us.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 px-6 text-lg font-semibold text-white rounded-md transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#61CE70' }}
        >
          {status === 'loading' ? 'Sending...' : 'Get Free Quote'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Your information is never shared.
        </p>
      </form>
    </div>
  );
}
