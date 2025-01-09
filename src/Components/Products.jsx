import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    ...new Set(allProducts.map((product) => product.category)),
  ];
  useEffect(() => {
    if (selectedCategory) {
      const filtered = allProducts.filter(
        (product) => product.category === selectedCategory
      );
      setAllProducts(filtered);
    }
  }, [selectedCategory]);
  return (
    <div className="grid md:grid-cols-4 gap-2 ">
      <div className="flex flex-col md:col-span-1 ">
        {categories.map((category) => (
          <button
            onClick={() => setSelectedCategory(category)}
            className="btn btn-outline"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 md:col-span-3 ">
       
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
       
      </div>
    </div>
  );
};

export default Products;
