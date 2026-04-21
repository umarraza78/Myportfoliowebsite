import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent!");
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span className="text-accent">Me</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        </div>
        <textarea name="message" cols="30" rows="10" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit" className="btn submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;