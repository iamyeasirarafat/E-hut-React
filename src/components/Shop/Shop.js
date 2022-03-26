import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect( () => {
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[]);
    const cartHandler =() => {
        console.log('button clicked');
    }
    return (
        <div className="shop container">
            <h2 className="text-center mb-5 mt-5">Choose your Watch</h2>
           <div className="row">
             <div className="col-lg-9 col-md-8 col-6">
                 <div className="row">
                     {
                         products.map(product =><Product handler={cartHandler} key={product.id} product={product}></Product>)
                     }
                 </div>
                 </div>  
             <div className="col-lg-3 col-md-4 col-6 cart">
                 <Cart></Cart>
             </div>
               </div> 
            
        </div>
    );
};

export default Shop;