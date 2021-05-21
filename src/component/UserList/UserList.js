import React from 'react';
import User from './User';

const UserList = ({ users, editUser, removeUser }) => {
  return (
    users.length === 0 ? (
      <div>
        <span>No users</span>
      </div>
    ) :
    users.map((user) => (
      <User key={user.id} {...user} editUser={editUser} removeUser={removeUser} />
    ))
  )
};

export default UserList;