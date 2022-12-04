import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AdUser.module.css";

const AddUser = (props) => {
  
  const [enteredUserName , setEnteredUserName] = useState('');
  const [enteredAge , setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
      reset()
      return;
    }
    if(+enteredAge < 1) {
      reset()
      return;
    }
    console.log(enteredUserName, enteredAge);
    reset()
  }

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const reset = () => {
    setEnteredUserName('');
    setEnteredAge('');
  }


  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input value={enteredUserName} id="username" type="text" onChange={usernameChangeHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input value={enteredAge} id="age" type="number" onChange={ageChangeHandler} ></input>
        <Button type="submit" >Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
