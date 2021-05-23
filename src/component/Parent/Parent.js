import './App.css';
import React from "react";
import EditUser from "../EditUser/EditUser";
import UserList from "../UserList/UserList";

class Parent extends React.Component {
  state = {
    users: [],
    edit:false
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(res => {
      if(res.status!==200) {
        console.log(`This is a error ${res.status}`);
      }})

      res.json().then(data => {
        this.setState({users:data})
      }).catch(error => {
        console.log(`Error${error}`)
      })
  }

  removeUser = (id) => {
    let currentListUsers = this.state.users;
    let newListUsers = currentListUsers.filter(user => user.id!==id);
    this.setState({
      users:newListUsers
    })
  }

  editUser = () => {
    this.setState ({
      edit: true
    });
  }

  render() {
    return (
      <>
      <EditUser edit={this.state.edit ? "ture" : "false"}/> 
      <UserList users={this.state.users} deleteUser={this.removeUser} editUser={this.editUser}/>
      </>
    );
  }
}
export default Parent;