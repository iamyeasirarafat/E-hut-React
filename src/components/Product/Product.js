import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({product, handler}) => {
    
    const {name, price, picture} = product;
    return (
        <div className="col-lg-4 gx-5 col-md-6 col-12">
        <div className="product ">
        <img src={picture} alt="" />
        <div className="product-info">
            <h5>{name}</h5>
            <h6>price: ${price}</h6>
            
        </div>
        <button onClick={()=>{handler(product)}}  className="button ">Add to cart<FontAwesomeIcon className="ms-2" icon={faShoppingCart} /></button>
        </div>
    </div>
    );
};

export default Product;