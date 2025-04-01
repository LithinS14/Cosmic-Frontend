import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="contact-page"
    >
      <section className="contact-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We're here to help with any questions or concerns
          </motion.p>
        </div>
      </section>
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-container">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Get In Touch</h2>
              <p>
                Have questions about our products, orders, or anything else? Our cosmic support team is ready to assist you.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>Email Us</h3>
                  <p>
                    <a href="mailto:support@cosmic.com">support@cosmic.com</a>
                  </p>
                  <p>We typically respond within 24 hours</p>
                </div>
                
                <div className="contact-method">
                  <h3>Call Us</h3>
                  <p>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </p>
                  <p>Monday-Friday: 9am-6pm EST</p>
                </div>
                
                <div className="contact-method">
                  <h3>Visit Our Store</h3>
                  <p>123 Cosmic Street</p>
                  <p>Universe City, Space 12345</p>
                  <p>Open daily: 10am-8pm</p>
                </div>
                
                <div className="contact-method">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Send Us A Message</h2>
              
              {isSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </motion.div>
          </div>
          
          <motion.div 
            className="faq-link"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Looking for Quick Answers?</h2>
            <p>Check out our frequently asked questions for immediate assistance.</p>
            <a href="/faq" className="btn btn-secondary">View FAQ</a>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Contact;