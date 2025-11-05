import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}>
      <img src={product.image} alt={product.name} className={styles.image} />

      <h2 className={styles.name}>{product.name}</h2>

      <p className={styles.price}>${product.price.toFixed(2)}</p>

      <p className={styles.stockStatus}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default ProductCard;
