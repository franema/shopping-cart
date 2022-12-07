import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
          <div className='cart-product-container'>
            <h1>Cart</h1>
            {addedProducts.map(product => (
              <div className='cart-product' key={product.id}>
                <p>{product.name}</p>
                <Link to={`/shop/${product.id}`}><img className='cart-product-img' src={product.img} alt={product.name}></img> </Link>
                <p>Quantity: {product.quantity}</p>
                <p className='price'>Subtotal ${product.quantity * product.price}</p>
                <button>Delete</button>
              </div>))}
            {addedProducts.length > 1 ? (
              <p>Total: ${addedProducts.reduce((acc, obj) => acc + (obj.quantity * obj.price), 0
              )}</p>
            ) : (
              <p>Total: ${addedProducts[0].quantity * addedProducts[0].price}</p>
            )
            }
          </div>
        )
      }
    </div>
  )
}

export default Cart