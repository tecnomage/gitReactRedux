import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
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

  onDeleteClick = async (dispatch, id) => {
    try {
      console.log("entrou");

      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (e) {}

    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state.showContactInfo;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              {/*  <div key={id}/> -->*/}
              <h4>
                {name}{" "}
                <i
                  key={id}
                  onClick={e => this.onShowClick(e)}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  onClick={() => this.onDeleteClick(dispatch, id)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: '1rem'
                    }}
                  />
                </Link>
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
