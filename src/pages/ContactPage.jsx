import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.fullName && form.email && form.message) {
      setStatus('Thank you for contacting VSV.Shop! We will get back to you shortly.');
      setForm({ fullName: '', email: '', phone: '', message: '' });
    } else {
      setStatus('Please fill in all required fields.');
    }
  };

  return (
    <div className="mt-10 bg-white px-6 py-15 max-w-6xl mx-auto">
      <h1 className="text-3xl  text-purple-700 mb-10 text-center">
        Contact VSV.Shop
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div className="bg-purple-50 rounded-xl p-5 shadow-md border border-purple-200">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6">Contact Information</h2>

          <div className="mb-3">
            <h3 className="font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-900 mt-1">+855 12 345 678</p>
            <p className="text-gray-900">+855 70 558 037</p>
          </div>

          <div className="mb-3">
            <h3 className="font-semibold text-gray-700">Email</h3>
            <p className="text-gray-900 mt-1">support@vsvshop.com.kh</p>
          </div>

          <div className="mb-3">
            <h3 className="font-semibold text-gray-700">Location</h3>
            <p className="text-gray-900 mt-1">
              No. 46, Street 218, Sangkat Teuk lak3,  
              <br />
              Khan Toul Kork, Phnom Penh, Cambodia
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <Link
                to="https://web.facebook.com/VVst128"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-purple-700 hover:text-purple-900 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M22 12.07c0-5.5-4.48-10-10-10S2 6.57 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.88h2.76l-.44 2.89h-2.32v6.99C18.34 21.19 22 17.06 22 12.07z" />
                </svg>
              </Link>
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-purple-700 hover:text-purple-900 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M9.74 16.92l.06 3.69a.39.39 0 0 0 .6.32l2.88-2.1 5.99 4.4a.52.52 0 0 0 .89-.52L23.22 4.9a.6.6 0 0 0-.86-.64L1.51 10.44a.54.54 0 0 0 .02.99l5.02 1.56 11.67-7.36-8.46 9.39z" />
                </svg>
              </Link>
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-purple-700 hover:text-purple-900 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-4.74-4.74 4 4 0 0 1 4.74 4.74z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-purple-50 border border-purple-200 rounded-xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">Send us a message</h2>

            <div className="mb-5">
              <label htmlFor="fullName" className="block font-semibold text-purple-700 mb-2">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-lg border border-purple-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block font-semibold text-purple-700 mb-2">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full rounded-lg border border-purple-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="phone" className="block font-semibold text-purple-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+855 12 345 678"
                className="w-full rounded-lg border border-purple-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block font-semibold text-purple-700 mb-2">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                
                className="w-full rounded-lg border border-purple-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                required
              />
            </div>

            {status && (
              <p
                className={`mb-6 text-center font-semibold ${
                  status.includes('Thank') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {status}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 rounded-lg transition-shadow shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
