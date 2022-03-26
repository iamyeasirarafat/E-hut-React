
import CartItem from '../CartItem/CartItem';
import Choosed from '../Choosed/Choosed';
import './Cart.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cart = ({cart, clear, chooseBtn, choose}) => {
   
     
    return (
        <div className="cart">
            <h5>Selected Items:</h5>
            <div className="items">

                {
                    cart.map((item) => <CartItem key={item.id} item = {item}></CartItem> )
                }
               <button onClick={() =>{chooseBtn(cart)}} className="btn btn-info">Choose one for me</button>
               <button onClick={clear} className="btn m-3 btn-danger">Clear all </button>
            </div>
            
               <div>
                  <Choosed item = {choose} ></Choosed>
                </div>
            
            
        </div>
    );
};

export default Cart;