import React from "react";
import "./list.css";
import ListItem from "./listItem";

const List = ({ orders, onDelete }) => {
  return (
    <section className="list">
      <div id="orders">
        <p>Products</p>
        <div className="list-cat">
          <p>Electronic Items</p>
          {orders.map((order) => {
            if (order.category === "Electronic Items") {
              return (
                <div key={order.id}>
                  <ul>
                    <ListItem order={order} onDelete={onDelete} />
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="list-cat">
          <p>Food Items</p>
          {orders.map((order) => {
            if (order.category === "Food Items") {
              return (
                <div key={order.id}>
                  <ul>
                    <ListItem order={order} onDelete={onDelete} />
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="list-cat">
          <p>Skincare Items</p>
          {orders.map((order) => {
            if (order.category === "Skincare Items") {
              return (
                <div key={order.id}>
                  <ul>
                    <ListItem order={order} onDelete={onDelete} />
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default List;
