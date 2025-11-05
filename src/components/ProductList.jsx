import React from 'react';
import ProductCard from './ProductCard';

// Step 4 concept: ProductList component (React equivalent of product-list container)
const ProductList = ({ products, onRemoveProduct }) => {
  // Step 3 concept: Loop through products array (React equivalent of forEach loop)
  return (
    <div className="product-list" id="product-list">
      {products.map((product) => (
        // Step 3 & 4 concept: Create and render product elements for each product
        <ProductCard 
          key={product.id} 
          product={product} 
          onRemove={onRemoveProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
