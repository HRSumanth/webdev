import React, { useState, useEffect } from "react";

import './App.css';
import Input from './components/Input/Input';
import List from './components/list/list';

const useLocalStorage = (key, initialValue) => {
  
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const App = () => {
  const [orders, setOrders] = useLocalStorage("orders", []);

  const addItems = (id,price,name,category) => {
    const order = { id,price,name,category };
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const handleDeleteOrder = (id) => {
    setOrders((prevOrders) =>
     prevOrders.filter((order) => order.id !== id)
    )
  };

  return (
    <div>
      <header className="navbar">
        <h1>Restaurant App</h1>
      </header>
      <Input onAddItems={addItems}></Input>
      <List orders={orders} onDelete={handleDeleteOrder}></List>
    </div>
  );
};
export default App;
