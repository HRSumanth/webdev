import './cartEach.css'
import { useContext } from 'react'
import CartContext from '../Store/CartContext'

const CartEach =({item})=>{
    const { addItem,removeItem} = useContext(CartContext)

    const removeItemHandler=()=>{
         removeItem(item)
    }
    const addItemHandler =()=>{
         addItem({...item,amount:parseInt(1)})
    }

    return(
        <li className='cart-item'>
            <div>
            <h2>{item.name}</h2>
             <div className='cart-summary'>
                <span className='cart-price'>Price : {item.price}</span>
                <span className='cart-amount'>Qty : 1</span>
            </div>
            </div>
            <div className='cart-actions'>
                <button onClick={removeItemHandler}>Remove</button>
            </div>
            <br></br>
        </li>
    )

}

export default CartEach