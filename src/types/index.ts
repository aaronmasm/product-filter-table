// Define the shape of a Product object
export type Product = {
    // The category to which the product belongs (e.g., "Electronics", "Books")
    category: string;

    // The price of the product, formatted as a string (e.g., "$19.99")
    price: string;

    // Indicates whether the product is currently in stock (true) or out of stock (false)
    stocked: boolean;

    // The name of the product (e.g., "Laptop", "Novel")
    name: string;
};
