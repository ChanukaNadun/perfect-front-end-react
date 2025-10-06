import React, { useState, useEffect } from 'react'
import { TextField } from '../../../components/common/TextField';
import { Dropdown } from '../../../components/common/DropDown';


function ArrayMethods() {
  const[filters, setFilters] = useState([]);
  const [text, setText] = useState([]);
  const [category, setCategory] = useState([]);
  const [min, setMin] = useState([]);
  const [max, setMax] = useState([]);
    
    function filterProducts(products2, { text, category, min, max }) {
      const searchText = String(text).toLowerCase();
      const categoryText = String(category).toLowerCase();
      console.log("search Text", text);
      console.log("search Category", category);

      return products2.filter(
        (p) =>
          (!text || p.name.toLowerCase().includes(searchText)) &&
          (!category || p.category.toLowerCase().includes(categoryText)) &&
          (!min || p.price >= min) &&
          (!max || p.price <= max)
      );
    }

    useEffect(() => {
      let filtersItems = []
      if(text!="" || category!="" || min!="" || max!="") {
        
        filtersItems = filterProducts(products2, {
          text: text,
          category: category,
          min: min,
          max: max,
        });
      } else {
      filtersItems = products2;
      }
      console.log("filtersItems", filtersItems);
      setFilters(filtersItems);
  }, [text, category, min, max]);


  return (
    <div>
      <h1>Array Methods</h1>
      <div>
        <TextField
          type="text"
          placeholder="Search by Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* <TextField
          type="text"
          placeholder="Search by Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        /> */}

        <Dropdown
          options={[
            { label: "None", value: "" },
            { label: "Clothes", value: "Clothes" },
            { label: "Electronics", value: "Electronics" },
          ]}
          value={category}
          onChange={(value) => setCategory(value)}
        />

        <TextField
          type="text"
          placeholder="Min Price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <TextField
          type="text"
          placeholder="Max Price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
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
  { name: "Dress", category: "Clothes", price: 120 },
  { name: "Headphones", category: "Electronics", price: 200 },
  { name: "Jacket", category: "Clothes", price: 180 },
  { name: "Tablet", category: "Electronics", price: 400 },
  { name: "Sweater", category: "Clothes", price: 90 },
  { name: "Smartwatch", category: "Electronics", price: 300 },
  { name: "Skirt", category: "Clothes", price: 70 },
  { name: "Speaker", category: "Electronics", price: 150 },
  { name: "Coat", category: "Clothes", price: 220 },
  { name: "Camera", category: "Electronics", price: 600 },
  { name: "Jeans", category: "Clothes", price: 85 },
  { name: "Gaming Console", category: "Electronics", price: 450 },
  { name: "Blouse", category: "Clothes", price: 65 },
  { name: "Monitor", category: "Electronics", price: 350 },
  { name: "Hoodie", category: "Clothes", price: 75 },
  { name: "Keyboard", category: "Electronics", price: 120 },
  { name: "Socks", category: "Clothes", price: 15 },
  { name: "Mouse", category: "Electronics", price: 80 },
  { name: "Tie", category: "Clothes", price: 40 },
];