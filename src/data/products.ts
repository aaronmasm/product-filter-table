import {Product} from "../types";

// Sample data for the products
// Each product has a category, price, stock status, and name
export const PRODUCTS: Product[] = [
    {
        // Category to which the product belongs
        category: "Fruits",

        // Price of the product in string format
        price: "$1",

        // Stock status of the product
        stocked: true,

        // Name of the product
        name: "Apple"
    },
    {
        category: "Fruits",
        price: "$1",
        stocked: true,
        name: "Dragon Fruit"
    },
    {
        category: "Fruits",
        price: "$2",
        stocked: false,
        name: "Passion Fruit"
    },
    {
        category: "Vegetables",
        price: "$2",
        stocked: true,
        name: "Spinach"
    },
    {
        category: "Vegetables",
        price: "$4",
        stocked: false,
        name: "Squash"
    },
    {
        category: "Vegetables",
        price: "$1",
        stocked: true,
        name: "Peas"
    }
];
