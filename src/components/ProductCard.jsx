import React from 'react';
import styles from '../styles/ProductCard.module.css';

// Step 3 concept: ProductCard represents the individual product elements
const ProductCard = ({ product, onRemove }) => {
  // Bonus concept: Handle remove product (React equivalent of removeChild)
  const handleRemove = () => {
    onRemove(product.id);
  };

  return (
    // Step 3 concept: productContainer div element
    <div className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}>
      
      {/* Step 3 concept: productImage img element */}
      <img 
        src={product.image} 
        alt={product.name} 
        className={styles.image} 
      />

      {/* Step 3 concept: productTitle h3 element (using h2 for better semantics) */}
      <h2 className={styles.name}>{product.name}</h2>

      {/* Step 3 concept: productPrice p element */}
      <p className={styles.price}>${product.price.toFixed(2)}</p>

      {/* Step 3 concept: productAvailability p element */}
      <p className={`${styles.stockStatus} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      {/* Bonus concept: Remove button (React equivalent of removeChild functionality) */}
      <button 
        onClick={handleRemove}
        className={styles.removeButton}
        aria-label={`Remove ${product.name} from dashboard`}
      >
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
