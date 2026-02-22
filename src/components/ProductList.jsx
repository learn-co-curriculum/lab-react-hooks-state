import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = []

const ProductList = ({ plants, onMarkSoldOut }) => {
  return (
    <div>
      <h2>All Plants</h2>

      {plants.length === 0 ? (
        <p>No plants match your search.</p>
      ) : (
        plants.map((plant) => (
          <ProductCard
            key={plant.id}
            product={plant}
            onMarkSoldOut={onMarkSoldOut}
          />
        ))
      )}
    </div>
  )
}

export default ProductList
