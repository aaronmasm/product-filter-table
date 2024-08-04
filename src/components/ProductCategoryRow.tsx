type ProductCategoryRowProps = {
    category: string;
};

// Component to render a category header in the product table
export default function ProductCategoryRow({category}: ProductCategoryRowProps) {
    return (
        <tr>
            <th
                colSpan={2} // Spans across two columns in the table
                className="px-6 py-4 text-center text-xl font-bold text-gray-800 bg-gray-100"
            >
                {category} {/* Displays the category name */}
            </th>
        </tr>
    );
}
