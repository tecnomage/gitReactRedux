import React, { Component } from "react";
import PropTypes from "prop-types";
//import './contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      pago: false,
      showContactInfo: false
    };
  }

  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  onShowClick = e => {
    this.setState({
      ...this.state,
      showContactInfo: !this.state.showContactInfo
    });

    console.log(this.state);
  };

  onDeleteClick = e => {
    this.props.onDeleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state.showContactInfo;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={e => this.onShowClick(e)}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            onClick={e => this.onDeleteClick()}
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
          />
        </h4>
        {this.state.showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
