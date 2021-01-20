import React, { useState, useEffect } from 'react';
import Items from ',/components/Items';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import data from './models/items.json';
import Header from './components/Header';

// SERVICES
import userService from './services/userService';

const App1 = (props) => {

    const [items] = useState(data);

    return<div>
        {items.map(book => <Book key={item.id} item={item} />)}
    </div>
    );
}



/*function App() {
  const [users, setusers] = useState(null);

  useEffect(() => {
    if (!users) {
      getusers();
    }
  });

  const getusers = async () => {
    let res = await userService.getAll();
    setusers(res);
  };

  const renderUser = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>{user.location}</p>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {users && users.length > 0 ? (
          users.map((user) => renderUser(user))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
} */

export default App;
