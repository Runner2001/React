import React, { Component } from 'react';

// class NavBar extends React.Component {
//     render() { 
//         return (
//             <nav className="navbar navbar-light bg-dark">
//                 <a className="navbar-brand text-white ms-5" href="#">
//                     Navbar
//                     <span className="ms-2 badge badge-pill bg-success">
//                         {this.props.totalCount}
//                     </span>
//                 </a> 
//             </nav>
//         );
//     }
// }
 
// export default NavBar;


//Stateless Functional Component
//in parameter you can use {props} or {exact props data} to simply the code like this.props again & again

const NavBar = ({totalCount}) => {
    return ( 
    <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand text-white ms-5" href="#">
            Navbar
            <span className="ms-2 badge badge-pill bg-success">
                {totalCount}
            </span>
        </a> 
    </nav>
     );
}
 
export default NavBar;