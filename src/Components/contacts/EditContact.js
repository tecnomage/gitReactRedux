import React, { Component } from "react";
import { Consumer } from "../../context";
//import uuid from "uuid";
import TextInputGroup from "../../layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  


  onChange = e => {
    //console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  //name: 'name is required', email: 'email is required',
  //phone: 'phone is required'
  onSubmit =  async (dispatch, e) => {
    e.preventDefault();
    console.log(e.target.name);
    const { name, email, phone, errors } = this.state;

    //validations
    if (name === "") {
      this.setState({ errors: { name: "name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: "email is required" });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
      errors: {}
    };

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users{:id}`, newContact);

    dispatch({
      type: "ADD_CONTACT",
      payload: res.data
    })

    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {}
    });

    this.props.history.push("/");

    console.log(this.state);
  };

  // static defaultProps = {
  //   name: "Regina",
  //   email: "reg@gmail.com",
  //   phone: "0000-0000"
  // }

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div>
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={e => this.onSubmit(dispatch, e)}>
                  <div className="form-group">
                    <TextInputGroup
                      name="name"
                      label="Name"
                      placeholder="entre seu nome aqui"
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="entre seu email"
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                    />

                    <TextInputGroup
                      label="Phone"
                      name="phone"
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Enter telefone"
                      value={phone}
                      onChange={this.onChange}
                      error={errors.phone}
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

export default EditContact;
