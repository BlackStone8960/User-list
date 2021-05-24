import './App.css';
import React from "react";
import EditUser from "../EditUser/EditUser";
import UserList from "../UserList/UserList";

const defaultSelectedUser = {
  name: '',
  email: '',
  company: {
    name: ''
  }
};

class Parent extends React.Component {
  state = {
    users: [],
    selectedUser: defaultSelectedUser,
    edit:false
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(res => {
      if(res.status!==200) {
        console.log(`This is a error ${res.status}`);
      }

      res.json().then(data => {
        this.setState({users:data})
      }).catch(error => {
        console.log(`Error${error}`)
      })
    })
  }

  removeUser = (id) => {
    let currentListUsers = this.state.users;
    let newListUsers = currentListUsers.filter(user => user.id!==id);
    this.setState({
      users:newListUsers
    })
  }

  editUser = (id) => {
    const matchedUser = this.state.users.find((user) => user.id === id);
    this.setState ({
      selectedUser: matchedUser,
      edit: true
    });
  }

  onSave = (savedUser) => {
    this.setState((prevState) => { 
      const newUsers = prevState.users.map((user) => {
        if (user.id === savedUser.id) {
          return {
            ...user,
            ...savedUser
          };
        } else {
          return user
        }
      });
      return {
        users: newUsers,
        edit: false
      }
    });
  }

  render() {
    return (
      <>
        {this.state.edit ? (
          <EditUser {...this.state.selectedUser} onSave={this.onSave} /> 
        ) : (
          <div className="main">
          <UserList
            users={this.state.users}
            removeUser={this.removeUser}
            editUser={this.editUser}
          />
          </div>
        )}
      </>
    );
  }
}
export default Parent;