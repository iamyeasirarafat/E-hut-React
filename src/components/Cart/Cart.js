import React from 'react';
import CartItem from '../CartItem/CartItem';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div>
            <h5>Selected Items:</h5>
            <div className="items">

                {
                    cart.map((item) => <CartItem key={item.id} item = {item}></CartItem> )
                }
               
            </div>

            
        </div>
    );
};

export default Cart;