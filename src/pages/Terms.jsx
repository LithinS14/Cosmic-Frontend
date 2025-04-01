import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/terms-policy.css';

const Terms = () => {
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
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Please read these terms carefully before using our services
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
                Welcome to COSMIC ("we," "our," or "us"). These Terms and Conditions govern your use of our website, mobile application, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Services.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>2. Account Registration</h2>
              <p>
                To access certain features of our Services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>3. Products and Orders</h2>
              <p>
                All product descriptions, including pricing and availability, are subject to change without notice. We reserve the right to limit quantities of any products.
              </p>
              <p>
                When you place an order, you are making an offer to purchase the products. We reserve the right to accept or decline your order for any reason.
              </p>
              <p>
                Colors of products may vary slightly from their appearance on our website due to differences in computer displays and lighting conditions.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>4. Shipping and Delivery</h2>
              <p>
                Shipping times are estimates and are not guaranteed. We are not responsible for delays caused by shipping carriers, customs, or other factors outside our control.
              </p>
              <p>
                Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>5. Returns and Refunds</h2>
              <p>
                Please refer to our Return Policy for information on returns, exchanges, and refunds.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>6. Intellectual Property</h2>
              <p>
                All content on our Services, including text, graphics, logos, images, and software, is the property of COSMIC or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>7. User Content</h2>
              <p>
                By posting, uploading, or otherwise making available any content on our Services, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
              </p>
              <p>
                You represent and warrant that you own or control all rights in and to the content you post and that such content does not violate these Terms and Conditions.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>8. Prohibited Activities</h2>
              <p>
                You agree not to:
              </p>
              <ul>
                <li>Use our Services for any illegal purpose or in violation of any local, state, national, or international law</li>
                <li>Violate or encourage others to violate the rights of third parties, including intellectual property rights</li>
                <li>Post or transmit any content that is unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable</li>
                <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running our Services</li>
                <li>Use any robot, spider, crawler, scraper, or other automated means to access our Services</li>
                <li>Impersonate another person or entity or misrepresent your affiliation with a person or entity</li>
              </ul>
            </div>
            
            <div className="terms-policy-section">
              <h2>9. Disclaimer of Warranties</h2>
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT OUR SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>10. Limitation of Liability</h2>
              <p>
                IN NO EVENT WILL COSMIC, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, OUR SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>11. Changes to Terms and Conditions</h2>
              <p>
                We may revise these Terms and Conditions from time to time. The most current version will always be posted on our website. By continuing to use our Services after revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
            
            <div className="terms-policy-section">
              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p>
                Email: legal@cosmic.com<br />
                Address: 123 Cosmic Street, Universe City, Space 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Terms;