import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/track-order.css';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate order tracking
    setIsSubmitted(true);
    
    // Mock order data
    setOrderStatus({
      number: orderNumber,
      date: 'March 28, 2025',
      status: 'In Transit',
      items: [
        { name: 'Cosmic Hoodie', quantity: 1, price: 89.99 },
        { name: 'Nebula T-Shirt', quantity: 2, price: 49.99 }
      ],
      shipping: {
        method: 'Express Shipping',
        address: '123 Cosmic Street, Universe City, Space 12345',
        tracking: 'COSM1234567890',
        estimatedDelivery: 'April 5, 2025'
      },
      timeline: [
        { date: 'March 28, 2025', status: 'Order Placed', description: 'Your order has been received and is being processed.' },
        { date: 'March 30, 2025', status: 'Order Processed', description: 'Your order has been processed and is ready for shipping.' },
        { date: 'April 1, 2025', status: 'Shipped', description: 'Your order has been shipped and is on its way to you.' },
        { date: 'April 5, 2025', status: 'Estimated Delivery', description: 'Expected delivery date.' }
      ]
    });
  };
  
  const resetForm = () => {
    setIsSubmitted(false);
    setOrderStatus(null);
    setOrderNumber('');
    setEmail('');
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="track-order-page"
    >
      <section className="track-order-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Track Your Order
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Enter your order details to check the status of your cosmic delivery
          </motion.p>
        </div>
      </section>
      
      <section className="track-order-content">
        <div className="container">
          {!isSubmitted ? (
            <motion.div 
              className="track-order-form-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form className="track-order-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="orderNumber">Order Number</label>
                  <input 
                    type="text" 
                    id="orderNumber" 
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="Enter your order number"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter the email used for the order"
                    required
                  />
                </div>
                
                <button type="submit" className="btn btn-primary">Track Order</button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              className="order-status-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="order-status-header">
                <h2>Order #{orderStatus.number}</h2>
                <p className="order-date">Placed on {orderStatus.date}</p>
                <div className={`status-badge ${orderStatus.status.toLowerCase().replace(' ', '-')}`}>
                  {orderStatus.status}
                </div>
              </div>
              
              <div className="order-timeline">
                <h3>Order Timeline</h3>
                <div className="timeline">
                  {orderStatus.timeline.map((event, index) => (
                    <motion.div 
                      key={index}
                      className={`timeline-item ${index <= 2 ? 'completed' : ''}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="timeline-point"></div>
                      <div className="timeline-content">
                        <h4>{event.status}</h4>
                        <p className="timeline-date">{event.date}</p>
                        <p className="timeline-description">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="order-details">
                <div className="order-items">
                  <h3>Order Items</h3>
                  <div className="items-list">
                    {orderStatus.items.map((item, index) => (
                      <div key={index} className="item">
                        <div className="item-info">
                          <h4>{item.name}</h4>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                        <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="shipping-info">
                  <h3>Shipping Information</h3>
                  <p><strong>Method:</strong> {orderStatus.shipping.method}</p>
                  <p><strong>Address:</strong> {orderStatus.shipping.address}</p>
                  <p><strong>Tracking Number:</strong> {orderStatus.shipping.tracking}</p>
                  <p><strong>Estimated Delivery:</strong> {orderStatus.shipping.estimatedDelivery}</p>
                </div>
              </div>
              
              <div className="order-actions">
                <button className="btn btn-secondary" onClick={resetForm}>Track Another Order</button>
                <a href="/contact" className="btn btn-primary">Need Help?</a>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </motion.main>
  );
};

export default TrackOrder;