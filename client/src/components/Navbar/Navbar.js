import React from 'react';
import './Navbar.css';
import navhome from '../Assets/navhome.png'
import navprofile from '../Assets/navprofile.png'
import navplus from '../Assets/navplus.png'

class Navbar extends React.Component {
    render() {
      return (
        <div className="navbarMain">
            <ul>
              <li className="marker"><a href="#"><img src = {navhome} nav-item = 'true'></img></a></li>
              <li className="marker"><a href="#"><img src = {navprofile} nav-item = 'true'></img></a></li>
              <li className="marker"><a href="#"><img src = {navplus} nav-item = 'true'></img></a></li>
            </ul>
        </div>
      );
    }
  }
  

export default Navbar;