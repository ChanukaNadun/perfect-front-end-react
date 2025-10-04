import React, { useState, useEffect } from 'react'

function ArrayMethods() {
  const[filters, setFilters] = useState([])
    
    function filterProducts(products2, { text, category, min, max }) {
      return products2.filter(
        (p) =>
          (!text || p.name.toLowerCase().includes(text.toLowerCase())) &&
          (!category || p.category === category) &&
          (!min || p.price >= min) &&
          (!max || p.price <= max)
      );
    }

    useEffect(() => {
      const filters = filterProducts(products2, { text: "t", category: "Clothes", min: 100, max: 200
    })
      setFilters(filters);
  }, []);


  return (
    <div>
      {filters &&
        filters.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <h6>
              {item.category} - ${item.price}
            </h6>
          </div>
        ))}
    </div>
  );
}

export default ArrayMethods;

const products2 = [
  { name: "Shirt", category: "Clothes", price: 80 },
  { name: "TV", category: "Electronics", price: 500 },
  { name: "Trouser", category: "Clothes", price: 150 },
  { name: "Phone", category: "Electronics", price: 650 },
  { name: "Short", category: "Clothes", price: 110 },
  { name: "Laptop", category: "Electronics", price: 950 },
];