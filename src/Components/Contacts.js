import React, { Component } from "react";
import Contact from './Contact'

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
    console.log(contacts)
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            id={contact.id}
            contact={contact}
          />  
          ))}
      </div>
    );
  }
}
export default Contacts;
