import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// function Header(){
//     return (
//         <div>
//             <h1>Contact Manager</h1>
//         </div>

//     );
// }

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fas-plus">HOME</i> 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus">ADD CONTACT</i> 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
               <i className="fa fa-question">ABOUT</i> 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: PropTypes.string.isRequired
};

// const headingStyle = {
//     color: 'green',
//     fontSize: '40px'
// }

export default Header;
