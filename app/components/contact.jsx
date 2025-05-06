"use client"
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the email body with line breaks
    const emailBody = `${formData.message}`;

    // Create the mailto link with the form data
    const mailtoLink = `mailto:shohaibm99@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="px-8 py-6">
      <h2 className="text-2xl font-bold mb-4 text-[#fed9bc]">Contact</h2>

      <div className="lg:px-[10%]">
        <p className="mb-4 text-[#ece3dc]">
          Feel free to reach out to me with any questions or opportunities. Fill out the form below and it will open your default email client.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#ece3dc] mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#ece3dc] mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-[#ef9c82] text-black font-medium rounded-md shadow-sm hover:shadow-lg hover:shadow-[#ef9c82]/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ef9c82] transition-colors duration-200 hover:cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>


      </div>
    </div>
  );
}

export default Contact;
