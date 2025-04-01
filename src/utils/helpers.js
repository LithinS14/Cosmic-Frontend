/**
 * Helper utility functions for the application
 */

// Format price with currency symbol
export const formatPrice = (price, currency = '$') => {
    return `${currency}${parseFloat(price).toFixed(2)}`;
  };
  
  // Calculate discount percentage
  export const calculateDiscount = (originalPrice, salePrice) => {
    if (!originalPrice || !salePrice || originalPrice <= salePrice) return 0;
    return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
  };
  
  // Truncate text with ellipsis
  export const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  
  // Generate a random ID
  export const generateId = (prefix = 'id') => {
    return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
  };
  
  // Debounce function for search inputs, etc.
  export const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
      const context = this;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };
  
  // Throttle function for scroll events, etc.
  export const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };
  
  // Get viewport dimensions
  export const getViewportDimensions = () => {
    return {
      width: window.innerWidth || document.documentElement.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight
    };
  };
  
  // Check if element is in viewport
  export const isInViewport = (element, offset = 0) => {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
      rect.top >= -offset &&
      rect.left >= 0 &&
      rect.bottom <= viewportHeight + offset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  // Get random item from array
  export const getRandomItem = (array) => {
    if (!array || !array.length) return null;
    return array[Math.floor(Math.random() * array.length)];
  };
  
  // Shuffle array (Fisher-Yates algorithm)
  export const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  
  // Format date
  export const formatDate = (date, options = {}) => {
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    const dateObj = date instanceof Date ? date : new Date(date);
    return dateObj.toLocaleDateString(undefined, { ...defaultOptions, ...options });
  };
  
  // Get time ago string (e.g. "2 hours ago")
  export const getTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + ' years ago';
    
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' months ago';
    
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' days ago';
    
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' hours ago';
    
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minutes ago';
    
    return Math.floor(seconds) + ' seconds ago';
  };
  
  // Parse URL query parameters
  export const parseQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    
    for (const [key, value] of params.entries()) {
      result[key] = value;
    }
    
    return result;
  };
  
  // Build URL with query parameters
  export const buildUrl = (baseUrl, params = {}) => {
    const url = new URL(baseUrl, window.location.origin);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.append(key, value);
      }
    });
    
    return url.toString();
  };
  
  // Local storage helpers
  export const storage = {
    get: (key, defaultValue = null) => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.error('Error getting item from localStorage:', error);
        return defaultValue;
      }
    },
    
    set: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.error('Error setting item in localStorage:', error);
        return false;
      }
    },
    
    remove: (key) => {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (error) {
        console.error('Error removing item from localStorage:', error);
        return false;
      }
    },
    
    clear: () => {
      try {
        localStorage.clear();
        return true;
      } catch (error) {
        console.error('Error clearing localStorage:', error);
        return false;
      }
    }
  };
  
  // Cookie helpers
  export const cookies = {
    get: (name) => {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    
    set: (name, value, days = 30) => {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + date.toUTCString() + ';path=/';
    },
    
    remove: (name) => {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
  };
  
  // Validate email format
  export const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  // Validate password strength
  export const isStrongPassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(password);
  };
  
  // Get device type
  export const getDeviceType = () => {
    const width = window.innerWidth;
    if (width < 576) return 'mobile';
    if (width < 992) return 'tablet';
    return 'desktop';
  };
  
  // Check if device is touch-enabled
  export const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };
  
  // Convert hex color to RGB
  export const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  
  // Convert RGB to hex color
  export const rgbToHex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };