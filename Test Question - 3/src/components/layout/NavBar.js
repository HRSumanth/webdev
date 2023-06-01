import React, { useState } from "react";


import './NavBar.css'
import NavBarCartBtn from "./NavBarCartBtn";
import CartItems from "../Cart/CartItems";
import Input from "./Input/Input";

const NavBar =()=>{
     const [cart, setCart]=useState(false)

    const cartShowHandler=()=>{
        setCart(true)
    }
    const cartRemoveHandler=()=>{
        setCart(false)
    }

    return(
        <nav>
            {cart && <CartItems onCartRemove={cartRemoveHandler}></CartItems>}
            <header className="header" >
                <h2>Store</h2>
                <NavBarCartBtn onClickBtn={cartShowHandler}></NavBarCartBtn>
            </header>
            <Input></Input>
        </nav>
    )

}

export default NavBar