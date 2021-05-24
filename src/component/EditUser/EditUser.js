import React from 'react';

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name ? props.name : "",
      email: props.email ? props.email : "",
      company: props.company ? props.company : {}
    }
  }

  onNameChanged = (e) => {
    const name = e.target.value;
    this.setState({ name });
  }
  onEmailChanged = (e) => {
    const email = e.target.value;
    this.setState({ email });
  }
  onCompanyChanged = (e) => {
    const company = { name: e.target.value };
    this.setState({ company });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSave({
      id: this.props.id,
      name: this.state.name,
      email: this.state.email,
      company: this.state.company
    })
  }

  render() {
    return (
      <div className="editContainer">
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input value={this.state.name} onChange={this.onNameChanged} id="name"></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input value={this.state.email} onChange={this.onEmailChanged} id="email"></input>
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input value={this.state.company.name} onChange={this.onCompanyChanged} id="company"></input>
          </div>
          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default EditUser;