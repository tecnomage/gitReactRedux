import React, { Component } from "react";
import PropTypes from "prop-types";
//import './contact.css';

class Contact extends Component {
  constructor() {
    super();
  }

  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  render() {
    const { contact } = this.props.contact;
    return (
      <div className="card card-body mb-3" >
        <h4>{this.props.contact.name}</h4>
        <ul className="list-group">
          <li className="list-group-item">{this.props.contact.email}</li>
          <li className="list-group-item">{this.props.contact.phone}</li>
        </ul>
      </div>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;
