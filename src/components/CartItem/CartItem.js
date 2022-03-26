import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import './CartItem.css'
import React from 'react';

const CartItem = ({item}) => {
    const {picture, name} = item;
    return (
        <div className="cart-item">
             <ul>
                    <li className="d-flex">
                        <img src={picture} alt="" />
                        <h6>{name}</h6>
                      <button className=""><FontAwesomeIcon icon = {faTrash}></FontAwesomeIcon></button>
                      
                    </li>
                </ul>
        </div>
    );
};

export default CartItem;