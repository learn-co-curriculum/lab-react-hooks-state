import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total items: {cart.length}</p>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
