import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/components/ui/button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  to = null, 
  href = null, 
  onClick = null, 
  disabled = false, 
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  className = '',
  animate = true,
  type = 'button',
  ...props 
}) => {
  // Button variants
  const buttonVariants = {
    hover: animate ? {
      scale: 1.05,
      transition: { duration: 0.2 }
    } : {},
    tap: animate ? {
      scale: 0.95,
      transition: { duration: 0.1 }
    } : {},
    disabled: {
      opacity: 0.6,
      cursor: 'not-allowed'
    }
  };
  
  // Combine classes
  const buttonClasses = `
    cosmic-button 
    ${variant} 
    ${size} 
    ${fullWidth ? 'full-width' : ''} 
    ${disabled ? 'disabled' : ''} 
    ${icon ? `with-icon icon-${iconPosition}` : ''}
    ${className}
  `;
  
  // Render icon
  const renderIcon = () => {
    if (!icon) return null;
    return <span className="button-icon">{icon}</span>;
  };
  
  // Render button content
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && renderIcon()}
      <span className="button-text">{children}</span>
      {icon && iconPosition === 'right' && renderIcon()}
    </>
  );
  
  // If it's a link (internal)
  if (to && !disabled) {
    return (
      <motion.div
        className="button-wrapper"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <Link to={to} className={buttonClasses} {...props}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }
  
  // If it's an external link
  if (href && !disabled) {
    return (
      <motion.div
        className="button-wrapper"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer" {...props}>
          {buttonContent}
        </a>
      </motion.div>
    );
  }
  
  // Regular button
  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? "disabled" : "hover"}
      whileTap={disabled ? "disabled" : "tap"}
      variants={buttonVariants}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;