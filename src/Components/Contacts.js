import React, { Component } from "react";
import { Provider, Consumer } from "../context";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Consumer>
        {value=> {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact id={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
