import React, { Component } from 'react';
import "./initalize.js";

import M from "materialize-css";
import "./sideNav.css"

class SearchBar extends Component {
    componentDidMount() {
        const opt = {
            edge: "right"
        };
        //M.SearchBar.init(this.SearchBar, opt);
        M.AutoInit();
    }
    
    render() {
        const options = []
        for (var i = 0; i < this.props.categories.length; i +=1){
            options.push(<option value={this.props.categories[i]}>{this.props.categories[i]}</option>)
        }
        return (
            <div>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="row">
    
                            {/* <i className="col s2 material-icons" style="font-size:45px">search</i> */}
                            <div className="input-field col s10 ">
                                <input placeholder="Search" type="text" className="validate" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="input-field col s12">
                                <select>
                                    <option value="" disabled selected>Categories</option>
                                    {options}
                                </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <button className="sideSearch btn waves-effect waves-light col s8 offset-s2" type="submit" name="action">Search
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger right"><i className="side material-icons">search</i></a>
                <script src="./initalize.js"></script>
            </div>
        );
    }
    
}

export default SearchBar;