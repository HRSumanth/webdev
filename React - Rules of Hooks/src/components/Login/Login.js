import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../Input/Input";

const emailReducer = (state, actions) => {
  if (actions.type == "INPUT-EMAIL") {
    return { value: actions.val, isValid: actions.val.includes("@") };
  }
  if (actions.type == "INPUT-EMAIL-BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: "" };
};
const passwordReducer = (state, actions) => {
  if (actions.type == "INPUT-PASSWORD") {
    return { value: actions.val, isValid: actions.val.trim().length > 6 };
  }
  if (actions.type == "INPUT-PASSWORD-BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: "" };
};

const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState("");
  //const [emailIsValid, setEmailIsValid] = useState();
  const [enteredCollegeName, setEnteredCollegeName] = useState("");
  const [collegeNameValid, setCollegeNameValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState("");
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: "",
  });
  const [PasswordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: "",
  });

  /* useEffect(() => {
   const identifier = setTimeout(()=>{
    console.log("uhxsha")
      setFormIsValid(
        enteredEmail.includes("@") &&
          enteredPassword.trim().length > 6 &&
          enteredCollegeName.trim().length > 0
      );
    },500)
    return ()=>{
      console.log("clean")
      clearTimeout(identifier)
    }
  }, [enteredEmail, enteredCollegeName, enteredPassword]);*/

  const emailChangeHandler = (event) => {
    setFormIsValid(
      event.target.value.includes("@") &&
        PasswordState.value.trim().length > 6 &&
        enteredCollegeName.trim().length > 0
    );
    dispatchEmail({ type: "INPUT-EMAIL", val: event.target.value });
    //setEnteredEmail(event.target.value);
  };

  const collegeNameChangeHandler = (event) => {
    setFormIsValid(
      emailState.value.includes("@") &&
        PasswordState.value.trim().length > 6 &&
        event.target.value.trim().length > 0
    );
    setEnteredCollegeName(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setFormIsValid(
      emailState.value.includes("@") &&
        event.target.value.trim().length > 6 &&
        PasswordState.value.trim().length > 0
    );
    dispatchPassword({ type: "INPUT-PASSWORD", val: event.target.value });
    //setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT-EMAIL-BLUR" });
    //setEmailIsValid(emailState.value.includes("@"));
  };

  const validateCollegeNamedHandler = () => {
    setCollegeNameValid(enteredCollegeName.trim().length > 6);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT-PASSWORD-BLUR" });
    //setPasswordIsValid(PasswordState.value.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, PasswordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          htmlFor="email"
          type="text"
          id="text"
          State={emailState}
          ChangeHandler={emailChangeHandler}
          validateHandler={validateEmailHandler}
        ></Input>
        
        <div
          className={`${classes.control} ${
            collegeNameValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="text">College Name</label>
          <input
            type="text"
            id="text"
            value={enteredCollegeName}
            onChange={collegeNameChangeHandler}
            onBlur={validateCollegeNamedHandler}
          />
        </div>
        <Input
          htmlFor="password"
          type="tepasswordxt"
          id="tepasswordxtt"
          State={PasswordState}
          ChangeHandler={passwordChangeHandler}
          validateHandler={validatePasswordHandler}
        ></Input>
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
