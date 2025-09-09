'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-black text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
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
          className="w-full p-3 border border-black text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-3 border border-black text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Type your message here..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-black text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-3 uppercase font-bold text-sm hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        Submit
      </button>
    </form>
  );
}
