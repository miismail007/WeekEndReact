import React from 'react'
import ProductItem from './ProductItem'

function Products(props) {
    return (
        <div className="container">
            <div className="row">
                {props.products.map(product =>
                    <ProductItem product = {product}/>
                )}
            </div>
        </div>
    )
}

export default Products
