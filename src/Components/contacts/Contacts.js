import React, { Component } from "react";
import {Consumer } from "../../context";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          return (
            <React.Fragment>
              {contacts.map(contact => 
               (
                 <Contact key={contact.id} contact={contact} />
               )
              //console.log(contact)
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
