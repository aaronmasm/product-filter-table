import {Product} from "../types";

type ProductRowProps = {
    product: Product;
};

// Component to render an individual product row in the table
export default function ProductRow({product}: ProductRowProps) {
    // Determine the text color based on stock status
    const nameClasses = `text-sm ${product.stocked ? 'text-gray-900' : 'text-red-500'}`;

    return (
        <tr className="hover:bg-gray-100">
            {/* Table cell for product name */}
            <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">
                <span className={nameClasses}>
                    {product.name} {/* Displays the name of the product */}
                </span>
            </td>
            {/* Table cell for product price */}
            <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                {product.price} {/* Displays the price of the product */}
            </td>
        </tr>
    );
}
