
import './CandyItem.css'
import CartContext from '../Store/CartContext'
import { useContext,useState,useRef } from 'react'

const MealsItem = ({Candy})=>{

    const {addItem}= useContext(CartContext)



   const addCartItem=(event)=>{
    event.preventDefault()
    console.log(event.target.id)
    const cartItem={...Candy,amount:parseInt(event.target.id)}
   
   addItem(cartItem)
   }
    return(
        
            <li className='candy'>
                <div className='details'>
                <h3>{Candy.name}</h3>
                <div className='discription'>{Candy.discription}</div>
                <div className='price'>{Candy.price}</div>
                </div>
                <div>
                <button type='submit' id='1'  onClick={addCartItem} className='buy-button'>Buy One  </button>
                <button type='submit' id='2' onClick={addCartItem} className='buy-button'>Buy Two  </button>
                <button type='submit' id='3' onClick={addCartItem} className='buy-button'>Buy Three</button>  
                </div>
                
            </li>
   
    )
}

export default MealsItem