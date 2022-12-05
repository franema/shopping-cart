import React from 'react'
import Navbar from '../Components/Navbar'
import { products } from '../Products/AllProducts'

function Shop( { addProduct } ) {


  return (
    <div>
      <Navbar></Navbar>
      <div className='shop-container'>
        {products.map(product => (<div key={product} onClick={(e) => addProduct(e.target)} className='product'> {product} </div> ))}
      </div>
    </div>
  )
}

export default Shop