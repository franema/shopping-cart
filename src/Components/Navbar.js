import React from 'react'
import { Link } from 'react-router-dom'
import shoppingCart from "../img/cart-shopping-solid.svg"


function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/cart" className='cart-container'><img alt="Shopping cart" src={shoppingCart}></img></Link>
    </div>
  )
}

export default Navbar