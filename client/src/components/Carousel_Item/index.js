
import React from 'react';
// import "../carousel_item.css";

function Carousel_Item(props) {
    console.log(props.name)
    // Need to somehow link the buttons to the deck that is currently on that deck.
    // If we want the notes for the deck we need to get the text area on line 27 to display data that was previously stored. !!!!
    // !!! This will involve creating a new model that refrences the current user, the deck id, and then the text that the user inputs. !!!
    //console.log(props.name)
    return (
        <div className="carousel-item row">
            <div className="col s12">
                <div className="card hoverable blue-grey black-text">
                    <div className="card-content white-text">
                        <span className="card-title">{props.name.title}</span>
                        <p>{props.name.description}</p>
                    </div>
                    <div className="card-action">
                        <a className="btn-floating btn-medium waves-effect waves-light light-blue "><i className="material-icons">edit</i></a>
                        <a className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons">delete_forever</i></a>
                        <a className="activator btn-floating btn-medium waves-effect waves-light green"><i className="material-icons">note_add</i></a>
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
                </div>
            </div>
        </div>
    );
}

export default Carousel_Item;
