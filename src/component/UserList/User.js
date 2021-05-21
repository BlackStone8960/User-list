import React from 'react';
import './user.css';

class User extends React.Component {
  // EditでUser情報を出したい場合はここにメソッドを定義してIDを引数で渡す

  render() {
    return (
      <div className="user-container">
        <div>{this.props.name}</div>
        <div>{this.props.email}</div>
        <div>{this.props.company.name}</div>
        <div className='buttons-flex'>
          <div
            onClick={this.props.editUser}
            className="button"
          >
            Edit User
          </div>
          <div
            onClick={this.props.removeUser}
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

// ({ name, email, company, editUser, removeUser }) 