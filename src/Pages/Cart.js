import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

function Cart( {addedProducts} ) {

  return (
    <div>
        <Navbar></Navbar>
        <h1>Cart</h1>
        {addedProducts.map(product => (<div key={product}>{product.innerText}</div>))}
    </div>
  )
}

export default Cart