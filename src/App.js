import React from 'react';
import AddUser from './components/Users/AddUser';
// import Card from '../src/components/UI/Card';
import UserList from './components/Users/UserList';

function App() {

  // const onaddData = (list) => {
  //   const data = {
  //     ...list,
  //     id: Math.random().toString()
  //   };
  //  console.log(data);
  // }

  return (
    <>
    <AddUser />
    <UserList />
    </>
  );
}

export default App;