import React, {useState} from 'react'
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../button/Button';

function AddUser(props) {
const [enteredName, setEnteredName] = useState('');
const [enteredAge, setEnteredAge] = useState('');
const [isValid, setIsValid] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      return;
    }
    if(enteredAge < 1) {
      return;
    }
    
    props.onaddData(enteredName, enteredAge);
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
      <label htmlFor="username" style={{color: !isValid ? 'red' : 'black'}}> Name: </label>
      <input id="username" type="text" value={enteredName} onChange={nameChangeHandler} />

      <label htmlFor="age" style={{color: !isValid ? 'red' : 'black'}}> Age: </label>
      <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

      <Button style={{color: !isValid ? 'black' : 'black'}} type="submit">Submit</Button>
    </form>
   </Card>
  )
}

export default AddUser;