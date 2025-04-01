import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/terms-policy.css';

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="terms-policy-page"
    >
      <section className="terms-policy-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How we collect, use, and protect your information
          </motion.p>
        </div>
      </section>
      
      <section className="terms-policy-content">
        <div className="container">
          <div className="terms-policy-container">
            <div className="last-updated">
              <p>Last Updated: April 1, 2025</p>
            </div>
            
            <div className="terms-policy-section">
              <h2>1. Introduction</h2>
              <p>
                At COSMIC ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, mobile application, and use our services (collectively, the "Services").
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Register for an account</li>
                <li>Place an order</li>
                <li>Sign up for our newsletter</li>
                <li>Contact our customer service</li>
                <li>Participate in promotions or surveys</li>
              </ul>
              <p>
                This information may include your name, email address, postal address, phone number, payment information, and any other information you choose to provide.
              </p>
              
              <h3>Automatically Collected Information</h3>
              <p>
                When you access or use our Services, we may automatically collect certain information, including:
              </p>
              <ul>
                <li>Device information (such as your IP address, browser type, and operating system)</li>
                <li>Usage information (such as pages visited, time spent on pages, and links clicked)</li>
                <li>Location information (if you grant permission)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
            
            <div className="terms-policy-section">
              <h2>3. How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including to:
              </p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Create and manage your account</li>
                <li>Provide customer service and respond to inquiries</li>
                <li>Send transactional emails and order confirmations</li>
                <li>Send marketing communications (if you've opted in)</li>
                <li>Improve our Services and develop new features</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraud and unauthorized transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
            
            <div className="terms-policy-section">
              <h2>4. How We Share Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li>Service providers who perform services on our behalf (such as payment processors, shipping companies, and marketing partners)</li>
                <li>Business partners with whom we jointly offer products or services</li>
                <li>Law enforcement or other governmental authorities in response to a legal request</li>
                <li>Other parties in connection with a merger, acquisition, or sale of all or a portion of our business</li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>5. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities and to improve your experience on our Services. You can manage your cookie preferences through your browser settings.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>6. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing of your personal information</li>
                <li>Data portability</li>
                <li>Objection to processing of your personal information</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>7. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>8. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>9. Children's Privacy</h2>
              <p>
                Our Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>10. International Data Transfers</h2>
              <p>
                Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The most current version will always be posted on our website. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>12. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p>
                Email: privacy@cosmic.com<br />
                Address: 123 Cosmic Street, Universe City, Space 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Policy;