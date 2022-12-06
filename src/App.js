
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import ProductPage from "./Pages/ProductPage";
import { products } from "./Products/AllProducts";

function App() {

  const [cartProducts, setCartProducts] = useState([])

  function addProduct(newProduct) {
    newProduct.quantity += 1
    for(let i = 0; i<cartProducts.length; i++) {
      if(cartProducts[i].id === newProduct.id) {
        setCartProducts([...cartProducts])
        return
      } 
    }
    setCartProducts([...cartProducts, newProduct])
  }

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductPage addProduct={addProduct}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart addedProducts={cartProducts} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
