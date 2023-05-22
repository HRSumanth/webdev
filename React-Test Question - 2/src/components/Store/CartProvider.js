import React, { useReducer} from "react";
import CartContext from "./CartContext";


const initialState={
    items:[],
    candy:[],
    totalAmount:0
}
const reducer=(state,action)=>{
    let updateItems,addItem;
    if (action.type==='ADDNEW'){
        updateItems=state.items
        if(state.candy){
            addItem=[...state.candy,action.value]
        }
        else {
            addItem=[action.value]
        }
        
        
    }
    if (action.type==='BUY'){
         addItem=state.candy;

        state.totalAmount=state.totalAmount + parseInt(action.value.price)*parseInt(action.value.amount);

        const itemExistidx=state.items.findIndex((val)=>val.id===action.value.id)
        

        const itemExist = state.items[itemExistidx];
         
         
        if (itemExist){
            let updateItem={
                ...itemExist, amount:parseInt(itemExist.amount)+parseInt(action.value.amount)
            }
            updateItems=[...state.items]
            updateItems[itemExistidx]=updateItem;
        }
        else {
            updateItems=[...state.items,action.value]
        }
    }

    if (action.type==='REMOVE'){
        addItem=state.candy;

       state.totalAmount=state.totalAmount - action.value.price;

  
        console.log(action.value,state.totalAmount)
        if (action.value.amount >1){
            const itemindex=state.items.findIndex((val)=>val.id===action.value.id)
        
        console.log(itemindex)
        const itemRemove = state.items[itemindex];
            let updateItem={
                ...itemRemove, amount:parseInt(itemRemove.amount)-1
            }
            updateItems=[...state.items]
            updateItems[itemindex]=updateItem;
            console.log(updateItems)
        }
        else {
            updateItems=state.items.filter((val)=>val.id!==action.value.id)
            console.log(updateItems)
        }
        
    }

    return {
        
        items:updateItems,
        candy:addItem,
        totalAmount:state.totalAmount

    }

}

const CartProvider=(props)=>{
    const [cartState, dispatchItems]=useReducer(reducer,initialState)

    const addNewItemsHandler = ({id,name,price,discription})=>{
        dispatchItems({type:'ADDNEW',value:{id,name,price,discription}})
    }
    const addItemsHandler = (item)=>{
        dispatchItems({type:'BUY',value:item})
    }
    const removeItemsHandler = (item)=>{
        dispatchItems({type:'REMOVE',value:item})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addedItems:cartState.candy,
        addNewItems:addNewItemsHandler,
        addItem: addItemsHandler,
        removeItem: removeItemsHandler,
      };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider;