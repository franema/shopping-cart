import React from 'react'

function Cart( {addedProducts} ) {

  return (
    <div>
        <h1>Cart</h1>
        {addedProducts.map(product => (<div key={product.id}>{product.name}, {product.quantity}</div>))}
    </div>
  )
}

export default Cart