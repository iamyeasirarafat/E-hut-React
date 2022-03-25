import React from 'react';
import './Product.css'
const Product = ({product}) => {
    console.log(product);
    const {name, price, picture} = product;
    return (
        <div className="col-lg-4 gx-5 col-md-6 col-12">
        <div className="product ">
        <img src={picture} alt="" />
        <div className="product-info">
            <h5>{name}</h5>
            <h6>price: ${price}</h6>
            
        </div>
        <button  className="btn ">Add to Cart</button>
        </div>
    </div>
    );
};

export default Product;