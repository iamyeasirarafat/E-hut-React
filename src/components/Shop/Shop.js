import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [choose, setChoose] = useState([])
   
    
   useEffect( () => {
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[]);
    const cartHandler =(product) => {
        const newCart =[...cart, product]
        if(cart.length === 4){
            alert('Cant add more then 4 item')
        }else{
           setCart(newCart)
        }
        
    }

    // clear all button handler
    const clear = [];
    const clearBtnHandler =() => {
        setCart(clear)
        setChoose(clear)
    }
    // choose on for me button Handler
    
    const chooseBtn = (items) => {
        console.log(items);
        const number = Math.floor(Math.random() * items.length);
        console.log(number);
        const choosed =  items[number];
        console.log(choosed);
        setChoose(choosed);
        
         
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
                 <Cart choose = {choose} chooseBtn = {chooseBtn}  clear={clearBtnHandler} cart={cart}></Cart>
             </div>
               </div> 
            
        </div>
    );
};

export default Shop;