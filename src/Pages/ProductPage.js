import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Products/AllProducts'

function ProductPage({ addProduct, cartProducts }) {

    let linkedProduct = useParams()
    const [selectedProduct, setSelectedProducts] = useState(0)
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        setSelectedProducts(products[linkedProduct.id])
    }, [selectedProduct, linkedProduct])

    useEffect (() => {
        cartProducts.map(product => {
            if(product.id === selectedProduct.id) {
                setQuantity(product.quantity)
            }
        })
    }, [cartProducts, selectedProduct])

    function increaseQuantity () {
        setQuantity(quantity + 1)
    }

    function decreaseQuantity () {
        setQuantity(quantity - 1)
    }

    return (
        <div className='selected-product-container'>
            <div className='selected-product'>
                <img src={selectedProduct.img} alt={selectedProduct.name}></img>
            </div>
            <div className='add-to-cart'>
                <h1>{selectedProduct.name}</h1>
                <div>
                    <button onClick={decreaseQuantity}>-</button>
                    <input type="number" disabled={true} value={quantity}></input>
                    <button onClick={increaseQuantity}>+</button>
                </div>
                <button onClick={() => addProduct(selectedProduct, quantity)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductPage