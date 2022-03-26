import React from 'react';
import CartItem from '../CartItem/CartItem';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cart = ({cart, clear}) => {
    
    return (
        <div>
            <h5>Selected Items:</h5>
            <div className="items">

                {
                    cart.map((item) => <CartItem key={item.id} item = {item}></CartItem> )
                }
               <button className="btn btn-info">Choose one for me</button>
               <button onClick={clear} className="btn m-3 btn-danger">Clear all </button>
            </div>

            
        </div>
    );
};

export default Cart;