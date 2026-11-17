import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <li>
      <span>{product.name}</span>{" "}
      <span className="category">{product.category}</span>{" "}
      <button
        data-testid={`product-${product.id}`}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;