import React, { useState ,useRef} from "react";

import Button from "../../UI/Button/Button";
import "./UserInput.css";
import ErrorModule from "../../UI/ErrorModule/ErrorModule";

const UsersInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputref = useRef();

  const [error, setError] = useState();



  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollege = collegeInputref.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollege.trim().length ===0) {
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
    props.onAddUser(enteredName, enteredAge,enteredCollege );
    nameInputRef.current.value="";
    ageInputRef.current.value="";
    collegeInputref.current.value="";
    
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
          <input type="text" ref={nameInputRef} />
          <label>College</label>
          <input type="text" ref={collegeInputref} />
          <label>Age (Year) </label>
          <input type="number" min="1" ref={ageInputRef} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default UsersInput;
