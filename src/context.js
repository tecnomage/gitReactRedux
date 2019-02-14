import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Francie",
        email: "franfran@auaua.com",
        phone: "12321312"
      },
      {
        id: 2,
        name: "Johsn Doe",
        email: "dasda@adada.com",
        phone: "555555"
      },
      {
        id: 3,
        name: "Mariana",
        email: "dasda@adada.com",
        phone: "555555"
      }
    ],
    dispatch: (action) => {
        this.setState(state => reducer(state,action))
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
