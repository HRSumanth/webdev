import React  from "react"

const CartContext =React.createContext({
    items:[],
    addedItems:[],
    addNewItem:(item)=>{},
    addItem:(item)=>{},
    removeItem:(item)=>{},
    totalAmount:0

})

export default CartContext;