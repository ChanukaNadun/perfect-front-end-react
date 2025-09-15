import { useState, useMemo, useCallback } from "react";

function ProductList({ products }) {
  const [search, setSearch] = useState("");

  // Memoize filtered products
  const filtered = useMemo(() => {
    console.log("Filtering...");
    return products.filter((p) =>
      p.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // Memoize handler
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div>
      <input value={search} onChange={handleSearch} placeholder="Search..." />
      <ul>
        {filtered.map((p) => (
          <li key={p.id}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;