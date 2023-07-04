import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';


const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">List of Users</h1>
      <ul className="user-list">
        {listOfUsers.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
            <br />
            Phone: {user.phone}
            <br />
            Address: {user.address.street}, {user.address.city}, {user.address.zipcode}
          </li>
        ))}
      </ul>
    </div>
  );
  
  
}

export default UserList;
