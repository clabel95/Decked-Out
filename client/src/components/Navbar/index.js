import React from 'react';
import './Navbar.css';
import navhome from '../Assets/navhome.png'
import navprofile from '../Assets/navprofile.png'
import navplus from '../Assets/navplus.png'
import { Link } from 'react-router-dom';
import Home from "../../pages/Home";
import User from "../../pages/User";
import CreateDeck from "../../pages/NewDeck";

class Navbar extends React.Component {
    render() {
      return (
        <div className="navbarMain">
            <ul>
              <li className="marker">
                <Link to='/home'>
                  <img src = {navhome} nav-item = 'true'></img>
                </Link>
              </li>
              <li className="marker">
                <Link to="user">
                  <img src = {navprofile} nav-item = 'true'></img>
                </Link>
              </li>
              <li className="marker">
                <Link to='deck_create'>
                  <img src = {navplus} nav-item = 'true'>
                    </img>
                </Link>
              </li>
            </ul>
        </div>
      );
    }
  }
  

export default Navbar;