import React, { useState } from 'react'
import { products } from '../Products/AllProducts'
import { Link } from 'react-router-dom'
import Loader from '../Components/Loader'


function Shop() {

  const [loaderStyle, setloaderStyle] = useState({
    visibility: "visible",
  })

  function removeLoader () {
    setloaderStyle ({visibility: "hidden"})
  }

  return (
    <div>
      <Loader loaderStyle={loaderStyle}></Loader>
      <div className='shop-container' onLoad={removeLoader}>
        {products.map(product => (
          <Link to={`/shop/${product.id}`} key={product.id} className='product'>

            <p>{product.name}</p>
            <p>${product.price}</p>
            <img className='product-image' alt={product.name} src={product.img} ></img>

          </Link>))}
      </div>
    </div>
  )
}

export default Shop