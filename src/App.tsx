// Import the main component for the product filter table and sample product data
import FilterableProductTable from "./components/FilterableProductTable";
import {PRODUCTS} from "./data/products";

function App() {
    return (
        // Main container for the application
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            {/* Render the FilterableProductTable component with products passed as a prop */}
            <FilterableProductTable products={PRODUCTS}/>
        </div>
    );
}

export default App;
