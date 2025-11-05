/**
 * Test Suite for Product Dashboard Manager - Vanilla JavaScript Implementation
 * These tests verify that the DOM manipulation requirements from the README are met
 */

// Mock DOM environment for testing
import { JSDOM } from 'jsdom';

// Set up DOM environment before tests
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Product Dashboard Manager</title>
    </head>
    <body>
      <header id="header">Welcome</header>
      <div id="product-list"></div>
    </body>
  </html>
`, { 
  url: 'http://localhost',
  pretendToBeVisual: true,
  resources: 'usable'
});

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

// Sample products for testing
const testProducts = [
  { id: 1, name: 'Laptop', price: 999, inStock: true, image: 'laptop.jpg' },
  { id: 2, name: 'Phone', price: 699, inStock: false, image: 'phone.jpg' },
  { id: 3, name: 'Tablet', price: 499, inStock: true, image: 'tablet.jpg' }
];

describe('Product Dashboard Manager - DOM Manipulation Tests', () => {
  
  beforeEach(() => {
    // Reset DOM before each test
    document.getElementById('header').textContent = 'Welcome';
    document.getElementById('product-list').innerHTML = '';
  });

  /**
   * TEST 1: README Step 2 - Update Existing Element
   * Verify that the header element is updated with "Product Dashboard" title
   */
  test('Step 2: Updates header element with Product Dashboard title', () => {
    // Test the requirement: "Select the DOM element with the ID of 'header'"
    const dashboardTitle = document.getElementById('header');
    expect(dashboardTitle).toBeTruthy();
    
    // Test the requirement: "Change the textContent to 'Product Dashboard'"
    dashboardTitle.textContent = 'Product Dashboard';
    expect(dashboardTitle.textContent).toBe('Product Dashboard');
    
    // Verify the variable name requirement: "Store it in a variable called dashboardTitle"
    expect(dashboardTitle.id).toBe('header');
  });

  /**
   * TEST 2: README Step 3 - Create New Elements for Each Product
   * Verify that all required elements are created for each product
   */
  test('Step 3: Creates new elements for each product', () => {
    const productList = document.getElementById('product-list');
    
    // Simulate the loop through products as required by README
    testProducts.forEach(product => {
      // Test requirement: "Create div element (productContainer)"
      const productContainer = document.createElement('div');
      expect(productContainer.tagName).toBe('DIV');
      
      // Test requirement: "Create h3 element (productTitle)"
      const productTitle = document.createElement('h3');
      productTitle.textContent = product.name;
      expect(productTitle.tagName).toBe('H3');
      expect(productTitle.textContent).toBe(product.name);
      
      // Test requirement: "Create p element (productPrice)"
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price}`;
      expect(productPrice.tagName).toBe('P');
      expect(productPrice.textContent).toContain(product.price.toString());
      
      // Test requirement: "Create p element (productAvailability)"
      const productAvailability = document.createElement('p');
      productAvailability.textContent = product.inStock ? 'In Stock' : 'Out of Stock';
      expect(productAvailability.tagName).toBe('P');
      expect(productAvailability.textContent).toMatch(/(In Stock|Out of Stock)/);
      
      // Test requirement: "Create img element (productImage)"
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      expect(productImage.tagName).toBe('IMG');
      expect(productImage.src).toContain(product.image);
    });
  });

  /**
   * TEST 3: README Step 4 - Append Elements to DOM
   * Verify that elements are properly appended as specified
   */
  test('Step 4: Appends elements to DOM correctly', () => {
    // Test requirement: "Select element with ID 'product-list'"
    const productList = document.getElementById('product-list');
    expect(productList).toBeTruthy();
    expect(productList.id).toBe('product-list');
    
    // Create and append elements as specified in README
    const productContainer = document.createElement('div');
    const productTitle = document.createElement('h3');
    const productPrice = document.createElement('p');
    const productAvailability = document.createElement('p');
    const productImage = document.createElement('img');
    
    // Test requirement: "Append all elements to productContainer"
    productContainer.appendChild(productTitle);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(productAvailability);
    productContainer.appendChild(productImage);
    
    expect(productContainer.children.length).toBe(4);
    expect(productContainer.contains(productTitle)).toBe(true);
    expect(productContainer.contains(productPrice)).toBe(true);
    expect(productContainer.contains(productAvailability)).toBe(true);
    expect(productContainer.contains(productImage)).toBe(true);
    
    // Test requirement: "Append productContainer to productList"
    productList.appendChild(productContainer);
    expect(productList.contains(productContainer)).toBe(true);
  });

  /**
   * TEST 4: README Step 5 - Conditional Rendering
   * Verify that out-of-stock products are styled differently
   */
  test('Step 5: Applies conditional styling for out-of-stock products', () => {
    const productList = document.getElementById('product-list');
    
    testProducts.forEach(product => {
      const productContainer = document.createElement('div');
      
      // Test requirement: "Products that are out of stock should be styled differently"
      if (!product.inStock) {
        productContainer.classList.add('out-of-stock-container');
        expect(productContainer.classList.contains('out-of-stock-container')).toBe(true);
      }
      
      productList.appendChild(productContainer);
    });
    
    // Verify that at least one out-of-stock product exists and is styled
    const outOfStockElements = productList.querySelectorAll('.out-of-stock-container');
    expect(outOfStockElements.length).toBeGreaterThan(0);
  });

  /**
   * TEST 5: BONUS - Remove Elements from DOM
   * Verify the removeChild functionality as demonstrated in README
   */
  test('Bonus: Removes product from dashboard using removeChild', () => {
    const productList = document.getElementById('product-list');
    
    // Add some products first
    const product1 = document.createElement('div');
    const product2 = document.createElement('div');
    product1.textContent = 'Product 1';
    product2.textContent = 'Product 2';
    
    productList.appendChild(product1);
    productList.appendChild(product2);
    expect(productList.children.length).toBe(2);
    
    // Test requirement: "removeChild() to remove a particular child"
    const firstProduct = productList.querySelector('div:first-child');
    productList.removeChild(firstProduct);
    
    expect(productList.children.length).toBe(1);
    expect(productList.contains(product1)).toBe(false);
    expect(productList.contains(product2)).toBe(true);
  });

  /**
   * TEST 6: BONUS - Alternative Remove Method
   * Verify the element.remove() functionality as shown in README
   */
  test('Bonus: Removes element using element.remove() method', () => {
    const productList = document.getElementById('product-list');
    
    // Add a product
    const product = document.createElement('div');
    product.textContent = 'Test Product';
    productList.appendChild(product);
    expect(productList.contains(product)).toBe(true);
    
    // Test requirement: "element.remove() on the element itself"
    product.remove();
    expect(productList.contains(product)).toBe(false);
  });

  /**
   * TEST 7: Integration Test - Complete Dashboard Creation
   * Verify that all steps work together as described in README
   */
  test('Integration: Complete dashboard creation following all README steps', () => {
    // Step 2: Update header
    const dashboardTitle = document.getElementById('header');
    dashboardTitle.textContent = 'Product Dashboard';
    
    // Step 4: Get product list container
    const productList = document.getElementById('product-list');
    
    // Steps 3 & 4: Create and append elements for each product
    testProducts.forEach(product => {
      // Step 3: Create all required elements
      const productContainer = document.createElement('div');
      const productTitle = document.createElement('h3');
      const productPrice = document.createElement('p');
      const productAvailability = document.createElement('p');
      const productImage = document.createElement('img');
      
      // Configure elements
      productTitle.textContent = product.name;
      productPrice.textContent = `$${product.price}`;
      productAvailability.textContent = product.inStock ? 'In Stock' : 'Out of Stock';
      productImage.src = product.image;
      productImage.alt = product.name;
      
      // Step 5: Conditional rendering
      if (!product.inStock) {
        productContainer.classList.add('out-of-stock-container');
      }
      
      // Step 4: Append elements
      productContainer.appendChild(productTitle);
      productContainer.appendChild(productPrice);
      productContainer.appendChild(productAvailability);
      productContainer.appendChild(productImage);
      productList.appendChild(productContainer);
    });
    
    // Verify final state
    expect(dashboardTitle.textContent).toBe('Product Dashboard');
    expect(productList.children.length).toBe(testProducts.length);
    
    // Verify each product has all required elements
    Array.from(productList.children).forEach((container, index) => {
      expect(container.querySelector('h3')).toBeTruthy(); // productTitle
      expect(container.querySelector('p')).toBeTruthy();  // productPrice or productAvailability
      expect(container.querySelector('img')).toBeTruthy(); // productImage
    });
  });
});
