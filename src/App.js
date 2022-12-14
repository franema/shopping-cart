import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import ProductPage from "./Pages/ProductPage";

function App() {

  const [cartProducts, setCartProducts] = useState([])
  const [showCart, setShowCart] = useState(false)

  function addProduct(newProduct, quantity) {
    toggleShowCart()
    for (let i = 0; i < cartProducts.length; i++) {
      if (cartProducts[i].id === newProduct.id) {
        cartProducts[i].quantity = quantity
        setCartProducts([...cartProducts])
        return
      }
    }
    newProduct.quantity = quantity
    setCartProducts([...cartProducts, newProduct])
  }

  function deleteProduct(product) {
    for (let i = 0; i < cartProducts.length; i++) {
      if (cartProducts[i].id === product.id) {
        cartProducts.splice(i, 1)
        setCartProducts([...cartProducts])
      }
    }

  }

  function toggleShowCart(e) {
    if(e && e.target.className === "cart visible") {
      console.log(e.target.className)
      setShowCart(!showCart)
    } else if (e && e.target.className !== "cart-img") {
      console.log(e.target.className)
      return
    } else {
      setShowCart(!showCart)
    }
  }

  return (
    <BrowserRouter>
      <Navbar toggleShowCart={toggleShowCart}></Navbar>
      <Cart addedProducts={cartProducts} deleteProduct={deleteProduct} showCart={showCart} toggleShowCart={toggleShowCart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductPage addProduct={addProduct} cartProducts={cartProducts} />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/cart" element={<Cart addedProducts={cartProducts} deleteProduct={deleteProduct} />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
