import {ChangeEvent} from "react";

type SearchBarProps = {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: (text: string) => void;
    onInStockOnlyChange: (inStockOnly: boolean) => void;
};

// Component to render the search bar and stock filter checkbox
export default function SearchBar({
                                      filterText,
                                      inStockOnly,
                                      onFilterTextChange,
                                      onInStockOnlyChange
                                  }: SearchBarProps) {

    // Handles changes in the search input field
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFilterTextChange(e.target.value);
    };

    // Handles changes in the stock filter checkbox
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        onInStockOnlyChange(e.target.checked);
    };

    return (
        <form className="flex flex-col items-center space-y-4 mb-6">
            {/* Input field for search text */}
            <input
                type="text"
                value={filterText}
                placeholder="Buscar..."
                onChange={handleTextChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
            />
            {/* Checkbox for filtering products in stock */}
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span>Show only products in stock</span>
            </label>
        </form>
    );
}
