import React from 'react'
import { Link } from 'react-router-dom'
import shoppingCart from "../img/cart-shopping-solid.svg"


function Navbar({toggleShowCart}) {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <div onClick={toggleShowCart} className='cart-img-container'><img alt="Shopping cart" className='cart-img' src={shoppingCart}></img></div>
    </div>
  )
}

export default Navbar