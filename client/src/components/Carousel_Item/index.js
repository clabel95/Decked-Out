
import React from 'react';
import "./carousel_item.css";
import { Link } from 'react-router-dom';


function Carousel_Item(props) {
    console.log(props.name)
    // Need to somehow link the buttons to the deck that is currently on that deck.
    // If we want the notes for the deck we need to get the text area on line 27 to display data that was previously stored. !!!!
    // !!! This will involve creating a new model that refrences the current user, the deck id, and then the text that the user inputs. !!!
    //console.log(props.name)
    return (
        <div className="carousel-item row">
            {/* ben change index below */}
            <div className="index card hoverable">
                {/* <div className="card hoverable"> */}
                
                    <div className=" header card-content white-text">
                        <span className="card-title">{props.name.title}</span>
                        <p>{props.name.description}</p>
                        
                    </div>
                    
                    <div className="card-action">
                        <a className="moveIcon btn-floating btn waves-effect waves-light light-blue "><Link to='Study'><i className="material-icons">menu_book</i></Link></a>
                        <div class="divider"/>
                        <a className="btn-floating btn- waves-effect waves-light red"><i className="material-icons">delete_forever</i></a>
                        <div class="divider"/>
                        <a className="activator btn-floating btn- waves-effect waves-light green"><i className="material-icons">note_add</i></a>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Notes<i className="material-icons right">check</i></span>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Carousel_Item;
