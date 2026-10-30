# Paradise Nursery Shopping Application

Paradise Nursery is an online shopping web application built using **React** and **Redux Toolkit** that provides plant enthusiasts with a seamless browsing and shopping experience.

## Project Overview
Paradise Nursery offers a curated selection of houseplants designed to bring nature into every home and office space. Users can explore a diverse catalog of plants, view detailed product information (including images, names, descriptions, and pricing), effortlessly add items to their shopping cart, and manage item quantities dynamically.

## Key Features
- **Landing Page**: An attractive welcome landing page featuring background imagery, company branding, a mission statement via an About Us section, and a **Get Started** call-to-action button.
- **Product Catalog**: Organized into distinct categories (Air Purifying, Aromatic Fragrant, Insect Repellent, Medicinal, and Low Maintenance Plants) featuring at least 6 unique houseplants per category.
- **Interactive Shopping Cart**:
  - Dynamically updates the total quantity of items displayed on the navigation bar cart icon badge.
  - "Add to Cart" button automatically disables once an item has been added to prevent duplicate additions.
  - Ability to increase and decrease plant quantities with live subtotal and total calculations.
  - Delete functionality to remove plants from the cart.
  - "Continue Shopping" button to seamlessly return to the catalog.
  - "Checkout" button indicating that checkout functionality is coming soon.
- **State Management**: Built using **Redux Toolkit** (`createSlice`, `configureStore`) for predictable and centralized global cart state.

## Technology Stack
- **React 18** (Vite build tool)
- **Redux Toolkit** (`@reduxjs/toolkit` and `react-redux`)
- **JavaScript (ES6+)**
- **CSS3 / Vanilla CSS**