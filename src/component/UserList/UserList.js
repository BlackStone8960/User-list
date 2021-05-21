import React from 'react';
import User from './user';

const UserList = ({ users, editUser, removeUser }) => {
  return (
    users.length === 0 ? (
      <div>
        <span>No users</span>
      </div>
    ) :
    users.map((user) => (
      <User key={user.id} {...user} editUSer={editUser} removeUser={removeUser} />
    ))
  )
};

export default UserList;