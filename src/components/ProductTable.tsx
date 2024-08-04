import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import {Product} from "../types";
import React from "react";

type ProductTableProps = {
    products: Product[];
    filterText: string;
    inStockOnly: boolean;
};

// Component to render the table of products
export default function ProductTable({products, filterText, inStockOnly}: ProductTableProps) {
    // Track the last category to group products by category
    let lastCategory: string | null = null;

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    {/* Table header for product name */}
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    {/* Table header for product price */}
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {products
                    .filter(product => {
                        // Filter products based on search text and stock status
                        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                            return false;
                        }
                        return !(inStockOnly && !product.stocked);
                    })
                    .map((product) => {
                        // Render category row only when the category changes
                        const categoryRow = product.category !== lastCategory && (
                            <ProductCategoryRow
                                category={product.category}
                                key={product.category}
                            />
                        );
                        lastCategory = product.category;

                        return (
                            <React.Fragment key={product.name}>
                                {categoryRow}
                                <ProductRow product={product}/>
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
