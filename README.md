# Product Filter Table

A React application to filter and display products based on search text and stock status. This project demonstrates the
use of React components, state management, and conditional rendering.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [License](#license)

## Project Overview

The Product Filter Table application allows users to filter and search through a list of products. Users can enter text
to search for specific products and filter to show only products that are in stock. The products are grouped by category
and displayed in a responsive table format.

## Features

- **Search Functionality:** Filter products by name.
- **Stock Filter:** Show only products that are in stock.
- **Category Grouping:** Display products grouped by their category.
- **Responsive Design:** Adaptable to various screen sizes.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Superset of JavaScript with static types.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Vite:** Next-generation frontend tool for faster development.

## Installation

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aaronmasm/product-filter-table.git

2. **Navigate to the project directory:**

   ```bash
    cd product-filter-table

3. **Install the dependencies:**

   ```bash
   npm install

4. **Start the development server:**
   ```bash
   npm run dev

## Usage

- **Search Bar:** Use the search bar at the top of the page to filter products by name. As you type, the list of
  products updates in real-time to show only those that match the search query.

- **Stock Filter:** Check the "Show only products in stock" checkbox to filter out products that are not in stock. This
  will hide any products that are currently unavailable.

- **Product Table:** The table displays products organized by category. Each product row includes:

    - **Name:** The name of the product, with text color indicating stock status (gray if in stock, red if out of
      stock).
    - **Price:** The price of the product.

  Products are grouped by category, with category headers shown above each group. This helps to easily identify which
  products belong to which category.

## Project Structure

The project structure is organized as follows:

- `src/`
    - `components/` - Contains React components used in the application.
        - `FilterableProductTable.tsx` - Main component that manages state and renders other components.
        - `SearchBar.tsx` - Component for the search bar and stock filter checkbox.
        - `ProductTable.tsx` - Component for rendering the product table.
        - `ProductCategoryRow.tsx` - Component for displaying product category headers.
        - `ProductRow.tsx` - Component for displaying individual product rows.
    - `data/` - Contains sample product data.
        - `products.ts` - Product data used in the application.
    - `types/` - TypeScript type definitions.
        - `index.ts` - Defines types for the application.

## Components

- **FilterableProductTable**: Manages the state for search and stock filter, and renders `SearchBar` and `ProductTable`.
- **SearchBar**: Provides input fields for search and stock filtering.
- **ProductTable**: Displays the list of products in a table, grouped by category.
- **ProductCategoryRow**: Renders a category header in the table.
- **ProductRow**: Renders individual product rows in the table.

## Styling

The application uses Tailwind CSS for styling. The utility-first approach allows for rapid development and responsive
design.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

© 2024 Aarón Más Murro
