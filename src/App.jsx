import { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const initialProducts = [
    {
      id: 1,
      name: 'Product A',
      price: 29.99,
      inStock: true,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product B',
      price: 49.99,
      inStock: false,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product C',
      price: 19.99,
      inStock: true,
      image: 'https://via.placeholder.com/150',
    },
  ];
  // TODO: Implement state to manage filtering
  const [showInStock, setShowInStock] = useState(true);
  const filteredProducts = initialProducts.filter(product => 
    showInStock ? product.inStock : true
  );
  // TODO: Implement logic to filter products based on availability

  return (
    <div>
      <h1>Product Dashboard</h1>

      <div>
        <button onClick={() => setShowInStock(true)}>Show In Stock</button>
        <button onClick={() => setShowInStock(false)}>Show All</button>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;

