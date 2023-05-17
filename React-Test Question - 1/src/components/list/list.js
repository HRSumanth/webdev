import React from "react";

import './list.css'
import ListItem from "./listItem";

const List =({orders,onDelete})=>{

    
  return(
    <section className="list" >
        <div id="orders" style={{ fontWeight: "bold" }}>
          <p>Products</p>
          {orders.map((order, index) => (
            <div>
            <ul>
                <p>Electronic Items</p>
                {order.category==='Electronic Items' &&<ListItem order={order} onDelete={onDelete}></ListItem>}
            </ul>
            <ul>
                <p>Food Items</p>
                {order.category==='Food Items' &&<ListItem order={order} onDelete={onDelete}></ListItem>}
            </ul>
            <ul> 
                <p>Skincare Items</p>
                {order.category==='Skincare Items' &&<ListItem order={order} onDelete={onDelete}></ListItem>}
            </ul>
            </div>
          ))}
        </div>
      </section>
  )
}

export default List;