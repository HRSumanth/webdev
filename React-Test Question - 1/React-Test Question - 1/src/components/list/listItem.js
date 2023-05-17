import React from "react";

import './listItem.css'

const ListItem =({order,onDelete})=>{

    const deleteOrderHandler = ()=>{
        onDelete(order.id)
    }
    
  return (
              <li className="listItem" key={order.id}>
                {order.id} - {order.name} -{order.price}- {order.category}      
                <button
                  className="button"
                  onClick={deleteOrderHandler}
                >
                 Delete-Order
                </button>
              </li>
          
  )
}

export default ListItem