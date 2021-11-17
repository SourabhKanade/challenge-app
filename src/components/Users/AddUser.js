import React from 'react'
import Card from '../UI/Card';
import style from './AddUser.module.css';

function AddUser() {
  const addFormHandler = (event) => {
   console.log(event.target.value);
   event.preventDefault();
  };

  return (
    <Card className={style.input}>
    <form onSubmit={addFormHandler}>
    <label htmlFor="username">Name:</label>
    <input id="username" type="text"></input>

    <label htmlFor="age"> Age: </label>
    <input id="age" type="number"></input>

    <button type="submit">Submit</button>
    </form>
   </Card>
  )
}

export default AddUser;