import React from "react";

import './listItem.css'

const ListItem =({order,onDelete})=>{

    const deleteOrderHandler = ()=>{
        onDelete(order.id)
    }
    console.log('kjsja')
  return (
        
              <li className="listItem" key={order.id}>
                <p>Electronic Items</p>
                {order.id} - {order.name} -{order.price}- {order.category}
                <button
                  className="Delete"
                  onClick={deleteOrderHandler}
                >
                  Delete-Order
                </button>
              </li>
          
  )
}

export default ListItem