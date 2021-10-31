import React from 'react'

function ProductItem(props) {
    return (
        <div className="card col-md-3">
            <div className="card-body">
            <h4 className="card-title">{props.product.name}</h4>
            <p className="card-text">{props.product.description}</p>
            <p className="card-text">{props.product.price}</p>
            <a href="#" className="btn btn-primary">See Profile</a>
            </div>
        </div>
    )
}

export default ProductItem
