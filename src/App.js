import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
 const [userdata, setUserData] = useState([])

  const addDataHandler = (uName, uAge) => {
       setUserData((list) => {
      return [
        ...list, {name: uName, age: uAge, id: Math.random().toString()}
      ]
    })};
  // console.log(setUserData);

  return (
    <>
    <AddUser onaddData={addDataHandler}/>
    <UserList users={userdata} />
    </>
  );
}

export default App;