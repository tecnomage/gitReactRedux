import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from 'uuid'

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch,e) => {
     e.preventDefault();
      console.log(dispatch);
     const {name,email,phone} = this.state;
     const newContact = {
       id:uuid(),
       name,
       email,
       phone
     }

    dispatch({
      type: "ADD_CONTACT",
      payload: newContact
    })
  
    this.setState({
      name: 'nome',
      email: '',
      phone: ''
    })
    
    console.log(this.state)
  
  };

  // static defaultProps = {
  //   name: "Regina",
  //   email: "reg@gmail.com",
  //   phone: "0000-0000"
  // }

  render() {
    const { name, email, phone } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          console.log('o fato ' + dispatch);
          return (
            <div>
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={ (e) => this.onSubmit(dispatch,e)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter name"
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter email..."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Enter telefone"
                      value={phone}
                      onChange={this.onChange}
                    />
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-light btn-block"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
