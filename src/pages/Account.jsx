import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/pages/account.css';

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="account-page"
    >
      <section className="account-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Account
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {isLoggedIn ? 'Manage your cosmic journey' : 'Sign in to access your account'}
          </motion.p>
        </div>
      </section>
      
      <section className="account-content">
        <div className="container">
          {!isLoggedIn ? (
            <motion.div 
              className="auth-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="auth-tabs">
                <button 
                  className={activeTab === 'login' ? 'active' : ''}
                  onClick={() => setActiveTab('login')}
                >
                  Login
                </button>
                <button 
                  className={activeTab === 'register' ? 'active' : ''}
                  onClick={() => setActiveTab('register')}
                >
                  Register
                </button>
              </div>
              
              <div className="auth-content">
                {activeTab === 'login' ? (
                  <form className="auth-form" onSubmit={handleLogin}>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    
                    <div className="form-options">
                      <label className="checkbox-label">
                        <input type="checkbox" /> Remember me
                      </label>
                      <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Login</button>
                  </form>
                ) : (
                  <form className="auth-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="register-email">Email Address</label>
                      <input 
                        type="email" 
                        id="register-email" 
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="register-password">Password</label>
                      <input 
                        type="password" 
                        id="register-password" 
                        placeholder="Create a password"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="confirm-password">Confirm Password</label>
                      <input 
                        type="password" 
                        id="confirm-password" 
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                    
                    <div className="form-options">
                      <label className="checkbox-label">
                        <input type="checkbox" required /> I agree to the <a href="/terms">Terms & Conditions</a>
                      </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Register</button>
                  </form>
                )}
              </div>
            </motion.div>
          ) : (
            <div className="account-dashboard">
              <div className="dashboard-sidebar">
                <div className="user-info">
                  <div className="user-avatar">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop" alt="User Avatar" />
                  </div>
                  <h3>Cosmic Explorer</h3>
                  <p>cosmic.explorer@example.com</p>
                </div>
                
                <nav className="dashboard-nav">
                  <button 
                    className={activeTab === 'dashboard' ? 'active' : ''}
                    onClick={() => setActiveTab('dashboard')}
                  >
                    Dashboard
                  </button>
                  <button 
                    className={activeTab === 'orders' ? 'active' : ''}
                    onClick={() => setActiveTab('orders')}
                  >
                    Orders
                  </button>
                  <button 
                    className={activeTab === 'wishlist' ? 'active' : ''}
                    onClick={() => setActiveTab('wishlist')}
                  >
                    Wishlist
                  </button>
                  <button 
                    className={activeTab === 'addresses' ? 'active' : ''}
                    onClick={() => setActiveTab('addresses')}
                  >
                    Addresses
                  </button>
                  <button 
                    className={activeTab === 'settings' ? 'active' : ''}
                    onClick={() => setActiveTab('settings')}
                  >
                    Account Settings
                  </button>
                  <button onClick={handleLogout}>Logout</button>
                </nav>
              </div>
              
              <div className="dashboard-content">
                {activeTab === 'dashboard' && (
                  <div className="dashboard-section">
                    <h2>Dashboard</h2>
                    <p>Welcome back, Cosmic Explorer!</p>
                    
                    <div className="dashboard-summary">
                      <div className="summary-card">
                        <h3>2</h3>
                        <p>Orders</p>
                      </div>
                      <div className="summary-card">
                        <h3>5</h3>
                        <p>Wishlist Items</p>
                      </div>
                      <div className="summary-card">
                        <h3>1</h3>
                        <p>Reviews</p>
                      </div>
                    </div>
                    
                    <div className="recent-orders">
                      <h3>Recent Orders</h3>
                      <div className="order-item">
                        <div className="order-info">
                          <p><strong>Order #COSM12345</strong></p>
                          <p>March 28, 2025</p>
                        </div>
                        <div className="order-status">
                          <span className="status-badge in-transit">In Transit</span>
                        </div>
                        <div className="order-actions">
                          <Link to="/track-order" className="btn btn-secondary btn-sm">Track</Link>
                        </div>
                      </div>
                      <div className="order-item">
                        <div className="order-info">
                          <p><strong>Order #COSM12344</strong></p>
                          <p>February 15, 2025</p>
                        </div>
                        <div className="order-status">
                          <span className="status-badge delivered">Delivered</span>
                        </div>
                        <div className="order-actions">
                          <button className="btn btn-secondary btn-sm">View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'orders' && (
                  <div className="dashboard-section">
                    <h2>My Orders</h2>
                    <p>View and track your orders</p>
                    
                    <div className="orders-list">
                      <div className="order-item">
                        <div className="order-info">
                          <p><strong>Order #COSM12345</strong></p>
                          <p>March 28, 2025</p>
                          <p>Total: $189.97</p>
                        </div>
                        <div className="order-status">
                          <span className="status-badge in-transit">In Transit</span>
                        </div>
                        <div className="order-actions">
                          <Link to="/track-order" className="btn btn-secondary btn-sm">Track</Link>
                          <button className="btn btn-primary btn-sm">Details</button>
                        </div>
                      </div>
                      <div className="order-item">
                        <div className="order-info">
                          <p><strong>Order #COSM12344</strong></p>
                          <p>February 15, 2025</p>
                          <p>Total: $79.99</p>
                        </div>
                        <div className="order-status">
                          <span className="status-badge delivered">Delivered</span>
                        </div>
                        <div className="order-actions">
                          <button className="btn btn-secondary btn-sm">Review</button>
                          <button className="btn btn-primary btn-sm">Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'wishlist' && (
                  <div className="dashboard-section">
                    <h2>My Wishlist</h2>
                    <p>Items you've saved for later</p>
                    
                    <div className="wishlist-grid">
                      <div className="wishlist-item">
                        <button className="remove-wishlist">×</button>
                        <div className="wishlist-image">
                          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" alt="Cosmic Hoodie" />
                        </div>
                        <div className="wishlist-info">
                          <h4>Cosmic Hoodie</h4>
                          <p className="wishlist-price">$89.99</p>
                          <button className="btn btn-primary btn-sm">Add to Cart</button>
                        </div>
                      </div>
                      <div className="wishlist-item">
                        <button className="remove-wishlist">×</button>
                        <div className="wishlist-image">
                          <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop" alt="Nebula T-Shirt" />
                        </div>
                        <div className="wishlist-info">
                          <h4>Nebula T-Shirt</h4>
                          <p className="wishlist-price">$49.99</p>
                          <button className="btn btn-primary btn-sm">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'addresses' && (
                  <div className="dashboard-section">
                    <h2>My Addresses</h2>
                    <p>Manage your shipping addresses</p>
                    
                    <div className="addresses-grid">
                      <div className="address-card">
                        <div className="address-header">
                          <h4>Home</h4>
                          <span className="default-badge">Default</span>
                        </div>
                        <div className="address-content">
                          <p>Cosmic Explorer</p>
                          <p>123 Cosmic Street</p>
                          <p>Universe City, Space 12345</p>
                          <p>United States</p>
                          <p>Phone: (555) 123-4567</p>
                        </div>
                        <div className="address-actions">
                          <button className="btn btn-secondary btn-sm">Edit</button>
                          <button className="btn btn-primary btn-sm">Delete</button>
                        </div>
                      </div>
                      <div className="address-card add-address">
                        <div className="add-address-content">
                          <span className="add-icon">+</span>
                          <p>Add New Address</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'settings' && (
                  <div className="dashboard-section">
                    <h2>Account Settings</h2>
                    <p>Manage your account information</p>
                    
                    <form className="settings-form">
                      <div className="form-group">
                        <label htmlFor="profile-name">Full Name</label>
                        <input 
                          type="text" 
                          id="profile-name" 
                          defaultValue="Cosmic Explorer"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="profile-email">Email Address</label>
                        <input 
                          type="email" 
                          id="profile-email" 
                          defaultValue="cosmic.explorer@example.com"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="profile-phone">Phone Number</label>
                        <input 
                          type="tel" 
                          id="profile-phone" 
                          defaultValue="(555) 123-4567"
                        />
                      </div>
                      
                      <h3>Change Password</h3>
                      
                      <div className="form-group">
                        <label htmlFor="current-password">Current Password</label>
                        <input 
                          type="password" 
                          id="current-password" 
                          placeholder="Enter your current password"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="new-password">New Password</label>
                        <input 
                          type="password" 
                          id="new-password" 
                          placeholder="Enter your new password"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="confirm-new-password">Confirm New Password</label>
                        <input 
                          type="password" 
                          id="confirm-new-password" 
                          placeholder="Confirm your new password"
                        />
                      </div>
                      
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.main>
  );
};

export default Account;