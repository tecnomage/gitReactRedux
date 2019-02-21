import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from 'uuid'
import TextInputGroup from '../../layout/TextInputGroup'

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
      name: '',
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
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          
          return (
            <div>
              <div className="card-header">Add Consact</div>
              <div className="card-body">
                <form onSubmit={ (e) => this.onSubmit(dispatch,e)}>
                  <TextInputGroup type='text' name="name" label="Name"
                  placeholder='entre seu nome aqui'  value={name}
                  onChange={this.onChange}
                  />
                  <TextInputGroup type='email' name="email" label="Email"
                  placeholder='entre seu email'  value={email}
                  onChange={this.onChange}
                  />
              
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
