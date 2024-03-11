import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function FilterableProductTable({products}) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  
  return (
    <>
    <div className="filterable-product-table-div">
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable 
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}  
      />
    </div>
    </>
  )
}