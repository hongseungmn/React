
export default function SearchBar({
  filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange
}) {
  return (
  <>
    <form>
      <div className="search-input">
        <input 
          type="text" 
          id="input" 
          placeholder="Search..."
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </div>
      <div className="search-check mt-3">
        <input 
          type="checkbox" 
          id="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        <label htmlFor="checkbox" >Only show products in stock</label>
      </div>
    </form>
  </>
  )
}