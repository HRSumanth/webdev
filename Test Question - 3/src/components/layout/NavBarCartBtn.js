import './NavBarCartBtn.css'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../Store/CartContext'

const NavBarCartBtn=({onClickBtn})=>{
    const {items} = useContext(CartContext)
    console.log(items)
    return (
        <button className='button' onClick={onClickBtn}>
            <span className='icon'>
            <CartIcon></CartIcon>
            </span>
            <span>
             Cart
            </span>
            <span className='badge'>
               {items ?items.length:0}
            </span>
        </button>
    )
}

export default NavBarCartBtn