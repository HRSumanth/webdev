import React from 'react';
import './UsersList.css'

const UsersList = props => {
  
  console.log(props)
  return (
    <div className="users">
      <ul >
      {props.items.map(user => (
        <li
          key={user.id}
          id={user.id}
        > 
        {user.username} ({user.age} years old) {user.college}
        </li>
      ))}
      </ul> 
    </div>
  );
};

export default UsersList;
