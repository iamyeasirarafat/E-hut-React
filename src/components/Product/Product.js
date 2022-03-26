import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacteria } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({product, handler}) => {
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
        <button onClick={handler}  className="button "><FontAwesomeIcon icon={faBacteria} /></button>
        </div>
    </div>
    );
};

export default Product;