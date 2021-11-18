import React from "react";
import styles from "./UserList.module.css";
import Card from '../UI/Card'; 

const UserList = (props) => {

  const onaddData = (list) => {
    const data = {
      ...list,
      id: Math.random().toString()
    };
   console.log(data);
  };

    return (
      <Card className={styles.user}>
        <ul>
          {onaddData.map((list) => {
              <li>
                ({list.usename} is ({list.age} Years old))
              </li>
              return;
            })};
        </ul>
      </Card>
    );
  };

export default UserList;
