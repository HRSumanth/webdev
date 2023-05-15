import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./UserInput.css";
import ErrorModule from "../../UI/ErrorModule/ErrorModule";

const UsersInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const userNameInputHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (enteredAge < 1 && enteredAge === isNaN) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    event.target[0].value="";
    event.target[1].value="";
    
  };

  function errorhandler (){
    setError(null)
  }

  return (
    <div>
      { error && <ErrorModule title={error.title} message={error.message} onConfirm={errorhandler}/>}
      <form onSubmit={formSubmitHandler}>
        <div className="input">
          <label>Username</label>
          <input type="text" onChange={userNameInputHandler} />
          <label>Age (Year) </label>
          <input type="number" min="1" onChange={ageInputHandler} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default UsersInput;
