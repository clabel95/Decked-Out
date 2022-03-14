
import React from 'react';
import "../carousel_item.css";

function Carousel_Item(props) {
    // Need to somehow link the buttons to the deck that is currently on that deck.
    // If we want the notes for the deck we need to get the text area on line 27 to display data that was previously stored. !!!!
    // !!! This will involve creating a new model that refrences the current user, the deck id, and then the text that the user inputs. !!!
    return (
        <div class="carousel-item row">
            <div class="col s12">
                <div class="card hoverable blue-grey black-text">
                    <div class="card-content white-text">
                        <span class="card-title">{props.name}</span>
                        <p>{props.description}</p>
                    </div>
                    <div class="card-action">
                        <a class="btn-floating btn-medium waves-effect waves-light light-blue "><i class="material-icons">edit</i></a>
                        <a class="btn-floating btn-medium waves-effect waves-light red"><i class="material-icons">delete_forever</i></a>
                        <a class="activator btn-floating btn-medium waves-effect waves-light green"><i class="material-icons">note_add</i></a>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Notes<i class="material-icons right">check</i></span>
                        <div class="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <textarea id="textarea1" class="materialize-textarea"></textarea>
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
