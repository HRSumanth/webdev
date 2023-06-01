
import './ProductItem.css'
import CartContext from '../Store/CartContext'
import { useContext,useState,useRef } from 'react'

const ProductItem = ({product})=>{

    const {addItem}= useContext(CartContext)

   const addCartItem=(event)=>{
    event.preventDefault()
    const cartItem={...product,amount:parseInt(1)}
   
   addItem(cartItem)
   }
    return(
        
            <li className='candy'>
                <div className='details'>
                <h3>{product.name}</h3>
                <div className='discription'>{product.discription}</div>
                <div className='price'>{product.price}</div>
                <div className='price'>1</div>
                </div>
                <div>
                <button type='submit' id='1'  onClick={addCartItem} className='buy-button'>Add To Cart </button>  
                </div>
            </li>
   
    )
}

export default ProductItem