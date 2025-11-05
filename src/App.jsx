import { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  // Step 2 concept: Define dashboard title (React equivalent of updating header element)
  const dashboardTitle = "Product Dashboard";
  
  // Step 3 concept: Product data array (equivalent to looping through dataset)
  const initialProducts = [
    {
      id: 1,
      name: 'Laptop Pro',
      price: 1299.99,
      inStock: true,
      image: 'https://via.placeholder.com/200x150/007bff/ffffff?text=Laptop+Pro',
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 199.99,
      inStock: false,
      image: 'https://via.placeholder.com/200x150/dc3545/ffffff?text=Headphones',
    },
    {
      id: 3,
      name: 'Smart Phone',
      price: 899.99,
      inStock: true,
      image: 'https://via.placeholder.com/200x150/28a745/ffffff?text=Smart+Phone',
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      price: 79.99,
      inStock: false,
      image: 'https://via.placeholder.com/200x150/ffc107/000000?text=Gaming+Mouse',
    },
  ];

  // State management for products and filtering
  const [products, setProducts] = useState(initialProducts);
  const [showInStock, setShowInStock] = useState(false); // Show all by default
  
  // Filter products based on availability (Step 5 concept: conditional rendering)
  const filteredProducts = showInStock 
    ? products.filter(product => product.inStock)
    : products;

  // Bonus concept: Remove product functionality (React equivalent of removeChild)
  const removeProduct = (productId) => {
    setProducts(prevProducts => 
      prevProducts.filter(product => product.id !== productId)
    );
    console.log(`🗑️ Removed product with ID: ${productId}`);
  };

  return (
    <div className="app">
      {/* Step 2 concept: Header element displaying dashboard title */}
      <header className="dashboard-header">
        <h1>{dashboardTitle}</h1>
      </header>

      {/* Filter controls */}
      <div className="filter-controls">
        <button 
          onClick={() => setShowInStock(false)}
          className={!showInStock ? 'active' : ''}
        >
          Show All Products ({initialProducts.length})
        </button>
        <button 
          onClick={() => setShowInStock(true)}
          className={showInStock ? 'active' : ''}
        >
          Show In Stock Only ({initialProducts.filter(p => p.inStock).length})
        </button>
      </div>

      {/* Step 4 concept: Product list container (React equivalent of product-list div) */}
      <ProductList 
        products={filteredProducts} 
        onRemoveProduct={removeProduct}
      />
      
      {/* Show message when no products match filter */}
      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No products match the current filter.</p>
        </div>
      )}
    </div>
  );
};

export default App;

