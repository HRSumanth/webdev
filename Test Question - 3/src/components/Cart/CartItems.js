import React, { Fragment,useContext } from "react"
import  ReactDOM from "react-dom";
import CartContext from "../Store/CartContext";
import './CartItems.css'
import CartEach from "./cartEach";

const BackDrop =()=>{
    return (
        <div className="backdrop"></div>
    )
}
const CartList =({onCartRemove})=>{
    const {items,totalAmount}= useContext(CartContext)
    console.log(items,totalAmount)

    return (
        <div className="modal">
                {items.map((item,index)=>
                 <CartEach key={index} item={item}></CartEach>
                )}
            <div className="total">
                <p>Total</p>
                <p>{totalAmount.toFixed(2)}</p>
            </div>
            <div className="total-action">
                <button onClick={onCartRemove}>Close</button>
                <button>Order</button>
            </div>
        </div>
    )
}
const CartItems = ({onCartRemove})=>{
   
    return(
         <Fragment>
            {ReactDOM.createPortal(<BackDrop></BackDrop>,document.getElementById('backdrop-root'))},
            {ReactDOM.createPortal(<CartList onCartRemove={onCartRemove}></CartList>,document.getElementById('cart-items-root'))}
         </Fragment>
            
    )     

}

export default CartItems