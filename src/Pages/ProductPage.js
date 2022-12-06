import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Products/AllProducts'

function ProductPage({addProduct}) {

    let linkedProduct = useParams()
    const [selectedProduct, setSelectedProducts] = useState(products[linkedProduct.id])

    useEffect(() => {
        setSelectedProducts(products[linkedProduct.id])
    }, [selectedProduct, linkedProduct])

    return (
        <div className='selected-product-container'>
            <div className='selected-product'>
                <h1>{selectedProduct.name}</h1>
                <p>Price: ${selectedProduct.price}</p>
                <p>{selectedProduct.img}</p>
            </div>
            <div className='add-to-cart'>
                <h1>{selectedProduct.name}</h1>
                <p>{selectedProduct.img}</p>
                <p>{selectedProduct.quantity}</p>
                <button onClick={() => {addProduct(selectedProduct)}}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductPage