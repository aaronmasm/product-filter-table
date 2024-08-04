import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import {Product} from "../types";
import {useState} from "react";

// Define the props expected by the FilterableProductTable component
type FilterableProductTableProps = {
    products: Product[];
};

// The FilterableProductTable component manages the state for filtering products
export default function FilterableProductTable({products}: FilterableProductTableProps) {
    // State for the search filter text
    const [filterText, setFilterText] = useState<string>('');

    // State for whether to show only products in stock
    const [inStockOnly, setInStockOnly] = useState<boolean>(false);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
            {/* SearchBar component for filtering products */}
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            {/* ProductTable component for displaying the filtered list of products */}
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}
