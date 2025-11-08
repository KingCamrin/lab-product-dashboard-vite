import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

test('renders product dashboard title', () => {
  render(<App />)
  expect(screen.getByText(/Product Dashboard/i)).toBeInTheDocument()
})

test('displays all products initially', () => {
  render(<App />)

  // Test that actual products from App component are displayed
  expect(screen.getByText(/Laptop Pro/i)).toBeInTheDocument()
  expect(screen.getByText(/Wireless Headphones/i)).toBeInTheDocument()
  expect(screen.getByText(/Smart Phone/i)).toBeInTheDocument()
  expect(screen.getByText(/Gaming Mouse/i)).toBeInTheDocument()
})

test('applies conditional styling for out-of-stock products', () => {
  render(<App />)
  const outOfStockProduct = screen.getByText(/Wireless Headphones/i) // Match actual product name
  expect(outOfStockProduct.closest('div')).toHaveClass('outOfStock')
})

test('removes product from the dashboard when "Remove" button is clicked', () => {
  render(<App />)
  const removeButtons = screen.queryAllByText(/Remove/i)

  expect(removeButtons.length).toBeGreaterThan(0) // Ensure buttons exist

  if (removeButtons.length > 0) {
    fireEvent.click(removeButtons[0])
    expect(removeButtons[0]).not.toBeInTheDocument() // Expect removal to work
  }
})
