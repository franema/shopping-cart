import React from 'react'
import { products } from '../Products/AllProducts'
import { Link } from 'react-router-dom'

function Shop() {


  return (
    <div>
      <div className='shop-container'>
        {products.map(product => (
          <Link to={`/shop/${product.id}`} key={product.id} className='product'>

            <p>{product.name}</p>
            <p>${product.price}</p>
            <img className='product-image' alt={product.name} src={product.img}></img>

          </Link>))}
      </div>
    </div>
  )
}

export default Shop