import React from 'react'

const Product = ({ product }) => {
    return (
        <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="product-card">
                <img src={product.img} alt={product.title} />
                <div className="card-body">
                    <span className="category-badge">{product.category}</span>
                    <h5>{product.title}</h5>
                    <p className="description">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="price">${product.price}</span>
                    </div>
                    <button className="btn-order">اطلب الآن</button>
                </div>
            </div>
        </div>
    )
}

export default Product