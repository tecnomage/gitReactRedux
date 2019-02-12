import React, { Component } from 'react'

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
                     <h1>{branding} </h1>
                 </div>
        
             );
}

Header.defaultProps = {
    branding: 'My App Toperson'
}

export default Header;