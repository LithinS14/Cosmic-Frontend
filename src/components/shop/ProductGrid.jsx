import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import '../../styles/components/shop/product-grid.css';

const ProductGrid = ({ products, filters = {}, sortOptions = [], initialSort = 'newest' }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeSort, setActiveSort] = useState(initialSort);
  const [activeFilters, setActiveFilters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  // Apply filters and sorting
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      let result = [...products];
      
      // Apply category filters
      if (activeFilters.categories && activeFilters.categories.length > 0) {
        result = result.filter(product => 
          activeFilters.categories.includes(product.category)
        );
      }
      
      // Apply price filters
      if (activeFilters.priceRange) {
        const [min, max] = activeFilters.priceRange;
        result = result.filter(product => {
          const price = product.salePrice || product.price;
          return price >= min && price <= max;
        });
      }
      
      // Apply color filters
      if (activeFilters.colors && activeFilters.colors.length > 0) {
        result = result.filter(product => 
          product.colors && product.colors.some(color => 
            activeFilters.colors.includes(color)
          )
        );
      }
      
      // Apply sorting
      switch (activeSort) {
        case 'newest':
          result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
          break;
        case 'price-low-high':
          result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
          break;
        case 'price-high-low':
          result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
          break;
        case 'popularity':
          result.sort((a, b) => b.popularity - a.popularity);
          break;
        default:
          break;
      }
      
      setFilteredProducts(result);
      setIsLoading(false);
    }, 500);
  }, [products, activeFilters, activeSort]);
  
  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      
      if (filterType === 'priceRange') {
        newFilters.priceRange = value;
      } else {
        if (!newFilters[filterType]) {
          newFilters[filterType] = [];
        }
        
        const index = newFilters[filterType].indexOf(value);
        if (index === -1) {
          newFilters[filterType] = [...newFilters[filterType], value];
        } else {
          newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
          if (newFilters[filterType].length === 0) {
            delete newFilters[filterType];
          }
        }
      }
      
      return newFilters;
    });
  };
  
  // Handle sort changes
  const handleSortChange = (e) => {
    setActiveSort(e.target.value);
  };
  
  // Clear all filters
  const clearFilters = () => {
    setActiveFilters({});
  };
  
  // Container variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="product-grid-container">
      {/* Filters Section */}
      {Object.keys(filters).length > 0 && (
        <div className="product-filters">
          <div className="filters-header">
            <h3>Filters</h3>
            {Object.keys(activeFilters).length > 0 && (
              <button className="clear-filters" onClick={clearFilters}>Clear All</button>
            )}
          </div>
          
          {filters.categories && (
            <div className="filter-group">
              <h4>Categories</h4>
              <div className="filter-options">
                {filters.categories.map(category => (
                  <label key={category} className="filter-checkbox">
                    <input 
                      type="checkbox" 
                      checked={activeFilters.categories?.includes(category) || false}
                      onChange={() => handleFilterChange('categories', category)}
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
          
          {filters.priceRanges && (
            <div className="filter-group">
              <h4>Price</h4>
              <div className="filter-options">
                {filters.priceRanges.map((range, index) => (
                  <label key={index} className="filter-checkbox">
                    <input 
                      type="radio" 
                      name="priceRange"
                      checked={JSON.stringify(activeFilters.priceRange) === JSON.stringify(range.value) || false}
                      onChange={() => handleFilterChange('priceRange', range.value)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
          
          {filters.colors && (
            <div className="filter-group">
              <h4>Colors</h4>
              <div className="filter-colors">
                {filters.colors.map(color => (
                  <div 
                    key={color}
                    className={`filter-color-swatch ${activeFilters.colors?.includes(color) ? 'active' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleFilterChange('colors', color)}
                    title={color}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Products Section */}
      <div className="product-grid-wrapper">
        {/* Sort and Results Count */}
        <div className="product-grid-header">
          <div className="results-count">
            {isLoading ? 'Loading products...' : `${filteredProducts.length} products found`}
          </div>
          
          {sortOptions.length > 0 && (
            <div className="sort-options">
              <label htmlFor="sort">Sort by:</label>
              <select 
                id="sort" 
                value={activeSort}
                onChange={handleSortChange}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        
        {/* Product Grid */}
        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
            <button className="btn-reset-filters" onClick={clearFilters}>Reset Filters</button>
          </div>
        ) : (
          <motion.div 
            className="product-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;