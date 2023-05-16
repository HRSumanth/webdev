import React, { useState } from "react";

import UsersList from "./components/Users/UsersList/UsersList";
import UsersInput from "./components/Users/UserInput/UserInput";

import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserhandler = (username, age,college) => {
    console.log(username, age);
    setUsers((prevUser) => {
      const updatedUser = [...prevUser];
      updatedUser.unshift({
        username: username,
        id: Math.random().toString(),
        age: age,
        college:college
      });
      return updatedUser;
    });
  };

  return (
    <div>
      <section id="user-form">
        <UsersInput onAddUser={addUserhandler} />
      </section>
      <section id="users">
        <UsersList items={users} />
      </section>
    </div>
  );
};

export default App;
