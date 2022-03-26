import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cart = () => {
    return (
        <div>
            <h5>Selected Items:</h5>
            <div className="items">
                <ul>
                    <li className="d-flex">
                        <img src="" alt="" />
                        <h6>this is item</h6>
                      <button className="btn btn-info"><FontAwesomeIcon icon="fa-solid fa-bacteria"/></button>
                      
                    </li>
                </ul>
            </div>

            
        </div>
    );
};

export default Cart;