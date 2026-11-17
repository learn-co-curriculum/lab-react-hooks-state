import React from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Banana", category: "Fruits" },
  { id: 3, name: "Milk", category: "Dairy" },
  { id: 4, name: "Cheese", category: "Dairy" },
  { id: 5, name: "Carrot", category: "Vegetables" },
  { id: 6, name: "Bread", category: "Bakery" },
];

function ProductList({ category, onAddToCart }) {
  const visibleProducts = sampleProducts.filter(
    (product) => category === "All" || product.category === category
  );

  if (visibleProducts.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <ul className="Items">
      {visibleProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </ul>
  );
}

export default ProductList;