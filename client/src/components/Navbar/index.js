import React from 'react';
import './Navbar.css';
import navhome from '../Assets/navhome.png'
import navprofile from '../Assets/navprofile.png'
import navplus from '../Assets/navplus.png'
import { Link } from 'react-router-dom';
// import Home from "../../pages/Home";
// import User from "../../pages/User";
// import CreateDeck from "../../pages/NewDeck";

class Navbar extends React.Component {
    render() {
      return (
        <div className="navbarMain">
            <ul>
              <li className="marker">
                <Link to='/home'>
                  <img src = {navhome} alt="Link to home" nav-item = 'true'></img>
                </Link>
              </li>
              <li className="marker">
                <Link to="/home/user">
                  <img src = {navprofile} alt="Link to user" nav-item = 'true'></img>
                </Link>
              </li>
              <li className="marker">
                <Link to='/home/deck_create'>
                  <img src = {navplus} alt="Link to create deck" nav-item = 'true'>
                    </img>
                </Link>
              </li>
            </ul>
        </div>
      );
    }
  }
  

export default Navbar;