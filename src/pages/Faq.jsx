import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/faq.css';

const faqs = [
  {
    id: 1,
    category: 'Orders & Shipping',
    questions: [
      {
        id: 'q1',
        question: 'How long does shipping take?',
        answer: 'Standard shipping typically takes 3-5 business days within the US and 7-14 business days for international orders. Express shipping options are available at checkout for faster delivery.'
      },
      {
        id: 'q2',
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can see the shipping options available to your country during checkout.'
      },
      {
        id: 'q3',
        question: 'How can I track my order?',
        answer: 'Once your order ships, you will receive a confirmation email with tracking information. You can also track your order by logging into your account or using our order tracking page.'
      }
    ]
  },
  {
    id: 2,
    category: 'Returns & Exchanges',
    questions: [
      {
        id: 'q4',
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for unworn, unwashed items with original tags attached. Returns must be initiated within 30 days of receiving your order.'
      },
      {
        id: 'q5',
        question: 'How do I exchange an item?',
        answer: 'To exchange an item, please initiate a return through your account and place a new order for the desired item. This ensures the fastest processing time and guarantees the item you want is in stock.'
      },
      {
        id: 'q6',
        question: 'Who pays for return shipping?',
        answer: 'Customers are responsible for return shipping costs unless the item received was defective or incorrect. In those cases, we will provide a prepaid return label.'
      }
    ]
  },
  {
    id: 3,
    category: 'Products & Sizing',
    questions: [
      {
        id: 'q7',
        question: 'How do I find the right size?',
        answer: 'Each product page includes a detailed size guide. We recommend measuring yourself and comparing to our size charts for the best fit. If you\'re between sizes, we generally recommend sizing up.'
      },
      {
        id: 'q8',
        question: 'Are your products sustainable?',
        answer: 'We are committed to sustainability and ethical production. Many of our products use organic or recycled materials, and we are continuously working to improve our environmental impact.'
      },
      {
        id: 'q9',
        question: 'How should I care for my cosmic clothing?',
        answer: 'Each item comes with specific care instructions on the tag. Generally, we recommend washing in cold water and hanging to dry to preserve the quality and extend the life of your cosmic garments.'
      }
    ]
  },
  {
    id: 4,
    category: 'Account & Payment',
    questions: [
      {
        id: 'q10',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted.'
      },
      {
        id: 'q11',
        question: 'Do I need an account to place an order?',
        answer: 'No, you can check out as a guest. However, creating an account allows you to track orders, save shipping information, and earn rewards.'
      },
      {
        id: 'q12',
        question: 'Is my payment information secure?',
        answer: 'Yes, we use industry-standard encryption and security measures to protect your payment information. We never store your full credit card details on our servers.'
      }
    ]
  }
];

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [openQuestions, setOpenQuestions] = useState({});
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const toggleQuestion = (questionId) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="faq-page"
    >
      <section className="faq-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find answers to common questions about our cosmic products and services
          </motion.p>
        </div>
      </section>
      
      <section className="faq-content">
        <div className="container">
          <div className="faq-container">
            <motion.div 
              className="faq-categories"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {faqs.map(category => (
                <button 
                  key={category.id}
                  className={activeCategory === category.id ? 'active' : ''}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.category}
                </button>
              ))}
            </motion.div>
            
            <div className="faq-questions">
              {faqs.find(cat => cat.id === activeCategory)?.questions.map((faq, index) => (
                <motion.div 
                  key={faq.id}
                  className={`faq-item ${openQuestions[faq.id] ? 'open' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className="faq-question"
                    onClick={() => toggleQuestion(faq.id)}
                  >
                    <h3>{faq.question}</h3>
                    <span className="toggle-icon">{openQuestions[faq.id] ? '−' : '+'}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="faq-contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Still Have Questions?</h2>
            <p>Our cosmic support team is here to help you with any questions or concerns.</p>
            <div className="contact-options">
              <a href="/contact" className="btn btn-primary">Contact Us</a>
              <a href="mailto:support@cosmic.com" className="btn btn-secondary">Email Support</a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Faq;