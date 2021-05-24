import React from 'react';

class EditUser extends React.Component {
  render() {
    return (
      <div className="editContainer">
      <form onSubmit={this.props.onSave}>
        <div>
          <label htmlFor={this.props.name}>Name</label>
          <input value={this.props.name} name={this.props.name}></input>
        </div>
        <div>
          <label htmlFor={this.props.email}>Email</label>
          <input value={this.props.email} name={this.props.email}></input>
        </div>
        <div>
          <label htmlFor={this.props.company}>Company</label>
          <input value={this.props.company} name={this.props.company}></input>
        </div>
        <button>Save</button>
      </form>
      </div>
    )
  }
}

export default EditUser;