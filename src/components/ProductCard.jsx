import React, { useState } from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onMarkSoldOut }) => {
  const [isUpdating, setIsUpdating] = useState(false)

  const handleMarkSoldOutClick = async () => {
    try {
      setIsUpdating(true)
      await onMarkSoldOut(product.id)
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div
      className={`${styles.card} ${product.soldOut ? styles.outOfStock : ''}`}
    >
      {product.image ? <img src={product.image} alt={product.name} width="180" /> : null}
      <h3>{product.name}</h3>
      <p>Price: ${Number(product.price).toFixed(2)}</p>
      <p>Status: {product.soldOut ? 'Sold Out' : 'Available'}</p>

      <button
        data-testid={'product-' + product.id}
        onClick={handleMarkSoldOutClick}
        disabled={product.soldOut || isUpdating}
      >
        {product.soldOut
          ? 'Sold Out'
          : isUpdating
            ? 'Marking as Sold Out...'
            : 'Mark as Sold Out'}
      </button>
    </div>
  )
}

export default ProductCard
