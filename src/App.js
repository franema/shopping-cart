
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

function App() {

  const [product, setProduct] = useState([])

  function addProduct (newProduct) {
    setProduct([...product, newProduct])
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addProduct={addProduct}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart addedProducts={product}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
