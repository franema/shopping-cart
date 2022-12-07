import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Cart({ addedProducts, deleteProduct }) {



  useEffect(() => {
    checkQuantity()
  })

  function checkQuantity () {
    for(let i = 0; i<addedProducts.length; i++) {
      if(addedProducts[i].quantity === 0) {
        deleteProduct(addedProducts[i])
      }
    }
  }

  return (
    <div className='cart'>
      {
        addedProducts.length === 0 ? (
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
                <button onClick={(e) => deleteProduct(e.target)} id={product.id}>Delete</button>
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