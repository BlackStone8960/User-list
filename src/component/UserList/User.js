import React from 'react';
import './user.css';

class User extends React.Component {
  render() {
    return (
      <div className="user-container">
        <h1>{this.props.name}</h1>
        <p>{this.props.email}</p>
        <p>{this.props.company.name}</p>
        <div className='buttons-flex'>
          <div
            onClick={() => this.props.editUser(this.props.id)}
            className="button"
          >
            Edit User
          </div>
          <div
            onClick={() => this.props.removeUser(this.props.id)}
            className="button"
          >
            Remove User
          </div>
        </div>
      </div>
    )
  }
};

export default User;