import React, { Component } from "react";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
      ]
    };
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <h1>{contact.name}</h1>
        ))}
      </div>
    );
  }
}
export default Contacts;
