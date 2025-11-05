// Product Dashboard Manager - Vanilla JavaScript Implementation
// This file implements all the requirements from the README using DOM manipulation

// Sample product dataset - array of products as mentioned in README step 3
const products = [
  {
    id: 1,
    name: 'Laptop Pro',
    price: 1299.99,
    inStock: true,
    image: 'https://via.placeholder.com/200x150/007bff/ffffff?text=Laptop+Pro'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 199.99,
    inStock: false,
    image: 'https://via.placeholder.com/200x150/dc3545/ffffff?text=Headphones'
  },
  {
    id: 3,
    name: 'Smart Phone',
    price: 899.99,
    inStock: true,
    image: 'https://via.placeholder.com/200x150/28a745/ffffff?text=Smart+Phone'
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 79.99,
    inStock: false,
    image: 'https://via.placeholder.com/200x150/ffc107/000000?text=Gaming+Mouse'
  }
];

// ==========================================
// STEP 2: UPDATE EXISTING ELEMENT
// ==========================================
function updateHeaderTitle() {
  // Select the DOM element with the ID of 'header' as required by README
  const dashboardTitle = document.getElementById('header');
  
  // Change the textContent to "Product Dashboard" as specified in README
  dashboardTitle.textContent = 'Product Dashboard';
  
  console.log('✅ Step 2 Complete: Header title updated to "Product Dashboard"');
}

// ==========================================
// STEP 3 & 4: CREATE AND APPEND ELEMENTS
// ==========================================
function createProductElements() {
  // Select the element with ID 'product-list' and store in variable as required by README step 4
  const productList = document.getElementById('product-list');
  
  // Loop through every product in the dataset as required by README step 3
  products.forEach((product, index) => {
    console.log(`🔄 Processing product ${index + 1}: ${product.name}`);
    
    // Create new elements for each product as specified in README step 3:
    
    // 1. Create div element (productContainer) to hold product details
    const productContainer = document.createElement('div');
    productContainer.className = 'product-container';
    productContainer.setAttribute('data-product-id', product.id);
    
    // 2. Create h3 element (productTitle) to display the product name
    const productTitle = document.createElement('h3');
    productTitle.textContent = product.name;
    productTitle.className = 'product-title';
    
    // 3. Create p element (productPrice) to show the product's price
    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productPrice.className = 'product-price';
    
    // 4. Create p element (productAvailability) to indicate stock status
    const productAvailability = document.createElement('p');
    productAvailability.textContent = product.inStock ? 'In Stock' : 'Out of Stock';
    productAvailability.className = product.inStock ? 'in-stock' : 'out-of-stock';
    
    // 5. Create img element (productImage) to display the product image
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.className = 'product-image';
    
    // STEP 5: IMPLEMENT CONDITIONAL RENDERING
    // Apply different styling for out-of-stock products as required by README step 5
    if (!product.inStock) {
      productContainer.classList.add('out-of-stock-container');
      console.log(`   📦 Product "${product.name}" is out of stock - applying special styling`);
    }
    
    // BONUS CHALLENGE: ADD REMOVE BUTTON
    // Create remove button for delete functionality as mentioned in bonus challenge
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-button';
    removeButton.addEventListener('click', () => removeProduct(productContainer, product.name));
    
    // STEP 4: APPEND ELEMENTS TO THE DOM
    // Append all elements to productContainer as specified in README step 4
    productContainer.appendChild(productImage);     // Add image first
    productContainer.appendChild(productTitle);     // Add title
    productContainer.appendChild(productPrice);     // Add price
    productContainer.appendChild(productAvailability); // Add availability
    productContainer.appendChild(removeButton);     // Add remove button (bonus)
    
    // Append productContainer to productList as required by README step 4
    productList.appendChild(productContainer);
    
    console.log(`   ✅ Product "${product.name}" added to dashboard`);
  });
  
  console.log('✅ Step 3 & 4 Complete: All product elements created and appended to DOM');
}

// ==========================================
// BONUS: REMOVE ELEMENTS FROM DOM
// ==========================================
function removeProduct(productElement, productName) {
  // Implementation of removeChild() as demonstrated in README bonus section
  const productList = document.getElementById('product-list');
  
  // Remove the product element from the DOM using removeChild method
  productList.removeChild(productElement);
  
  console.log(`🗑️ Removed product: ${productName} from dashboard`);
  
  // Alternative method using element.remove() as shown in README bonus section
  // productElement.remove();
}

// ==========================================
// INITIALIZE APPLICATION
// ==========================================
function initializeApp() {
  console.log('🚀 Initializing Product Dashboard Manager...');
  
  // Execute all the steps as outlined in the README
  updateHeaderTitle();      // Step 2: Update existing element
  createProductElements();  // Steps 3 & 4: Create and append new elements
  
  console.log('✅ Product Dashboard Manager initialized successfully!');
  console.log(`📊 Total products loaded: ${products.length}`);
}

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', initializeApp);

// Export functions for potential testing (optional)
window.ProductDashboard = {
  updateHeaderTitle,
  createProductElements,
  removeProduct,
  products
};
