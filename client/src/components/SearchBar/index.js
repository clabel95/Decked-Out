import React, { Component } from 'react';
import M from "materialize-css";


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { edge: "right" });
});
class Search_Bar extends Component {
    componentDidMount() {
        const opt = {
            edge: "right"
        };
        M.Search_Bar.init(this.Search_Bar, opt);
    }
    // not sure how we want to set this up.
    // are we going to have set categories and just hard code the values into the options below?
    // or are we going to dynamicly add options to the drop down menu?
    render(){
    return (
        <div>
            <ul id="slide-out" class="sidenav">
                <li>
                    <div class="row">

                        <i class="col s2 material-icons" style="font-size:45px">search</i>
                        <div class="input-field col s10 ">
                            <input placeholder="Search" type="text" class="validate" />
                        </div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="input-field col s12">
                            <select>
                                <option value="" disabled selected>Categories</option>
                                <option value="1">Sports</option>
                                <option value="2">Pokemon</option>
                                <option value="3">Games</option>
                            </select>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <button class="btn waves-effect waves-light col s8 offset-s2" type="submit" name="action">Search
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </li>
            </ul>
            <a href="#" data-target="slide-out" class="sidenav-trigger right"><i class="material-icons">search</i></a>
            <script src="./initalize.js"></script>
        </div>
    );
}
}
export default Search_Bar;