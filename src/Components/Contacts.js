import React, { Component } from "react";
import Contact from "./Contact";

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

deleteContact = (id) => {
  const {contacts} = this.state;
  console.log('sdsdsd');
  const newContacts = contacts.filter(contact => 
    contact.id !== id);
  
  this.setState({
    contacts: newContacts

  })  
}



  render() {
    const { contacts } = this.state;
   
    return (
      <React.Fragment>
        {contacts.map(contact => (
           <Contact id={contact.id} contact={contact} 
           deleteClickHandler={() => this.deleteContact(contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
