import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

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
  };

  onDeleteClick = (dispatch,id) => {
    console.log(dispatch)
    dispatch({
      type: 'DELETE_CONTACT',
      payload:id
    })
    console.log(id)
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state.showContactInfo;
    
    return (
      <Consumer>
        {value => {
          const {dispatch}= value;
            return (
              <div className="card card-body mb-3">
             {/*  <div key={id}/> -->*/}
              <h4>
                {name}{" "}
                <i
                  onClick={e => this.onShowClick(e)}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  onClick={ () => this.onDeleteClick(dispatch,id)}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
