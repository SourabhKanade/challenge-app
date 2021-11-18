import React from "react";
import styles from "./UserList.module.css";
import Card from '../UI/Card'; 

const UserList = (props) => {

    return (
      <Card className={styles.user}>
        <ul>
          {props.users.map((list) => (
              <li key={list.id}>
                {list.name} is {list.age} Years old! 
              </li> 
          ))}
        </ul>
      </Card>
    );
};

export default UserList;
