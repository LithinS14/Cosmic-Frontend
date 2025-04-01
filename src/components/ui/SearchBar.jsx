import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/ui/search-bar.css';

const SearchBar = ({ 
  placeholder = 'Search for products...', 
  onSearch = null,
  suggestions = [],
  recentSearches = [],
  maxRecentSearches = 5,
  autoFocus = false,
  className = ''
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [recentSearchList, setRecentSearchList] = useState(recentSearches);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();
  
  // Filter suggestions based on query
  useEffect(() => {
    if (query.trim() === '') {
      setFilteredSuggestions([]);
      return;
    }
    
    const filtered = suggestions.filter(suggestion => 
      suggestion.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5); // Limit to 5 suggestions
    
    setFilteredSuggestions(filtered);
    setSelectedSuggestionIndex(-1);
  }, [query, suggestions]);
  
  // Auto focus
  useEffect(() => {
    if (autoFocus && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [autoFocus]);
  
  // Load recent searches from localStorage
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearchList(JSON.parse(savedSearches));
    }
  }, []);
  
  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Handle search submission
  const handleSearch = () => {
    if (query.trim() === '') return;
    
    // Save to recent searches
    const updatedSearches = [
      query,
      ...recentSearchList.filter(search => search !== query)
    ].slice(0, maxRecentSearches);
    
    setRecentSearchList(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    
    // Call onSearch callback or navigate
    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
    
    // Clear input and close suggestions
    setQuery('');
    setIsFocused(false);
  };
  
  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    searchInputRef.current.focus();
    handleSearch();
  };
  
  // Handle recent search click
  const handleRecentSearchClick = (search) => {
    setQuery(search);
    searchInputRef.current.focus();
    handleSearch();
  };
  
  // Clear recent searches
  const clearRecentSearches = (e) => {
    e.stopPropagation();
    setRecentSearchList([]);
    localStorage.removeItem('recentSearches');
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    const suggestions = query.trim() !== '' ? filteredSuggestions : recentSearchList;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : 0);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedSuggestionIndex >= 0 && suggestions[selectedSuggestionIndex]) {
          setQuery(suggestions[selectedSuggestionIndex]);
          handleSearch();
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsFocused(false);
        break;
      default:
        break;
    }
  };
  
  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  return (
    <div 
      ref={searchContainerRef}
      className={`cosmic-search-container ${className}`}
    >
      <div className="cosmic-search-input-wrapper">
        <input
          ref={searchInputRef}
          type="text"
          className="cosmic-search-input"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
        />
        
        <button 
          className="cosmic-search-button"
          onClick={handleSearch}
          aria-label="Search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        
        {query && (
          <button 
            className="cosmic-search-clear"
            onClick={() => setQuery('')}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      
      <AnimatePresence>
        {isFocused && (filteredSuggestions.length > 0 || recentSearchList.length > 0) && (
          <motion.div 
            className="cosmic-search-dropdown"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {query.trim() !== '' && filteredSuggestions.length > 0 && (
              <div className="cosmic-search-suggestions">
                <div className="cosmic-search-dropdown-header">
                  <span>Suggestions</span>
                </div>
                <ul>
                  {filteredSuggestions.map((suggestion, index) => (
                    <li 
                      key={index}
                      className={selectedSuggestionIndex === index ? 'selected' : ''}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {query.trim() === '' && recentSearchList.length > 0 && (
              <div className="cosmic-search-recent">
                <div className="cosmic-search-dropdown-header">
                  <span>Recent Searches</span>
                  <button 
                    className="cosmic-search-clear-recent"
                    onClick={clearRecentSearches}
                  >
                    Clear
                  </button>
                </div>
                <ul>
                  {recentSearchList.map((search, index) => (
                    <li 
                      key={index}
                      className={selectedSuggestionIndex === index ? 'selected' : ''}
                      onClick={() => handleRecentSearchClick(search)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="12 8 12 12 14 14"></polyline>
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                      <span>{search}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;