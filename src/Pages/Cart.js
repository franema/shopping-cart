import React, { useEffect, useState } from 'react'

function Cart({ addedProducts }) {

  const [emptyCart, setEmptyCart] = useState(true)

  useEffect(() => {
    setEmptyCart(addedProducts.length === 0)
  }, [addedProducts])

  return (
    <div className='cart'>
      {
        emptyCart ? (
          <h1>The cart is empty</h1>
        ) : (
          <div>
            <h1>Cart</h1>
            {addedProducts.map(product => (<div key={product.id}>{product.name}, {product.quantity}</div>))}
          </div>
        )
      }
    </div>
  )
}

export default Cart