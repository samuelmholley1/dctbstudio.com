'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-md mx-auto px-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Name"
              className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Email"
              className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              aria-label="Message"
              className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm resize-none focus:outline-none focus:border-black transition-colors"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-4 h-10 bg-black text-white text-sm font-medium hover:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
