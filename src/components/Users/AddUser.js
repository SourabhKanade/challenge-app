import React, {useState} from 'react'
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../button/Button';

function AddUser(props) {
const [enteredName, setEnteredName] = useState('');
const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if(enteredAge < 1) {
      return;
    }
    const FetchedData = {
      Name: enteredName,
      Age: enteredAge
    }
    props.addDataHandler(FetchedData);
    // console.log(FetchedData);
    setEnteredName('');
    setEnteredAge('');
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    //  console.log('name button is clicked');
  }
  
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    // console.log('age button is clicked');
  }

  return (
    <Card className={style.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username"> Name: </label>
      <input id="username" type="text" value={enteredName} onChange={nameChangeHandler} />

      <label htmlFor="age"> Age: </label>
      <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

      <Button type="submit">Submit</Button>
    </form>
   </Card>
  )
}

export default AddUser;