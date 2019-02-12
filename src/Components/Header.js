import React, { Component } from 'react'
import PropTypes from 'prop-types'
// function Header(){
//     return (
//         <div>
//             <h1>Contact Manager</h1>
//         </div>

//     );
// }

const Header =  props => {
    const { branding } = props;
    return (
                 <div>
                     <h1 style={headingStyle}>  {branding} </h1>
                 </div>
        
             );
}

Header.defaultProps = {
    branding: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'green',
    fontSize: '40px'
}

export default Header;