import React, { useEffect, useReducer } from "react";
import axios from "axios";
import CartContext from "./CartContext";

const initialState = {
  items: [],
  candy: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  let updateItems, addItem;
  if (action.type === "ADDNEW") {
    updateItems = state.items;
    if (state.candy) {
      addItem = [...state.candy, action.value];
    } else {
      addItem = [action.value];
    }
  }
  if (action.type === "SETITEMS") {
       addItem = action.value
       updateItems=state.items
  }
  if (action.type === "SETCARTITEMS") {
    updateItems = action.value
    addItem=state.candy
   }

  
  if (action.type === "BUY") {
    addItem = state.candy;

    state.totalAmount =
      state.totalAmount +
      parseInt(action.value.price) * parseInt(action.value.amount);

    const itemExistidx = state.items.findIndex((val) => val.id === action.value.id);

    const itemExist = state.items[itemExistidx];

    if (itemExist) {
      let updateItem = {
        ...itemExist,
        amount: parseInt(itemExist.amount) + parseInt(action.value.amount),
      };
      updateItems = [...state.items];
      updateItems[itemExistidx] = updateItem;
    } else {
      updateItems = [...state.items, action.value];
    }
  }

  if (action.type === "REMOVE") {
    addItem = state.candy;

    state.totalAmount = state.totalAmount - action.value.price;

    console.log(action.value, state.totalAmount);
    if (action.value.amount > 1) {
      const itemindex = state.items.findIndex((val) => val.id === action.value.id);

      console.log(itemindex);
      const itemRemove = state.items[itemindex];
      let updateItem = {
        ...itemRemove,
        amount: parseInt(itemRemove.amount) - 1,
      };
      updateItems = [...state.items];
      updateItems[itemindex] = updateItem;
      console.log(updateItems);
    } else {
      updateItems = state.items.filter((val) => val.id !== action.value.id);
      console.log(updateItems);
    }
  }

  return {
    items: updateItems,
    candy: addItem,
    totalAmount: state.totalAmount,
  };
};

const CartProvider = (props) => {
  const [cartState, dispatchItems] = useReducer(reducer, initialState);


  useEffect(()=>{

    async function fetchData() {
        try {
            const response = await axios.get(
              "https://crudcrud.com/api/b6dfddc6155f41b9b72e24e593635892/items",
              
            );
            const newItem = await response.data;

            dispatchItems({ type: "SETITEMS", value: newItem });
            const cartresponse = await axios.get(
                "https://crudcrud.com/api/b6dfddc6155f41b9b72e24e593635892/cartitems",
                
              );
              const cartItem = await cartresponse.data;
            
            dispatchItems({ type: "SETCARTITEMS", value: cartItem });
          } catch (error) {
            console.log("Error adding new item:", error);
          }
      }
      fetchData();
    
  },[])

  const addNewItemsHandler = async ({ id, name, price, discription }) => {
    
    try {
      const response = await axios.post(
        "https://crudcrud.com/api/b6dfddc6155f41b9b72e24e593635892/items",
        {
          id,
          name,
          price,
          discription,
        }
      );
      const newItem = response.data;
      dispatchItems({ type: "ADDNEW", value: newItem });
    } catch (error) {
      console.log("Error adding new item:", error);
    }
  };

  const addItemsHandler = async (item) => {
    const {
        id,
        name,
        price,
        description,
      }= item
    try {
        const response = await axios.post(
            "https://crudcrud.com/api/b6dfddc6155f41b9b72e24e593635892/cartitems",
            {
                id,
                name,
                price,
                description,
              }
          );
          const newItem = response.data;
          console.log(response)
      dispatchItems({ type: "BUY", value: newItem });
    } catch (error) {
      console.log("Error adding item to cart:", error);
    }
  };

  const removeItemsHandler = async (item) => {
    try {
      await axios.delete(
        `https://crudcrud.com/api/b6dfddc6155f41b9b72e24e593635892/cartitems/${item._id}`
      );
      dispatchItems({ type: "REMOVE", value: item });
    } catch (error) {
      console.log("Error removing item from cart:", error);
    }
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addedItems: cartState.candy,
    addNewItems: addNewItemsHandler,
    addItem: addItemsHandler,
    removeItem: removeItemsHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
