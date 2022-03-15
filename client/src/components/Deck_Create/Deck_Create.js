import React from 'react';

function Deck_Create(props) {
    const category_options = [];

    // create html for category options
    for (let i = 0; i < props.categories.length; i++) {
        category_options.push(<option value={props.categories[i]}>{props.categories[i]}</option>);
    }

    return (
        <div class="row">
            <div class="col s12 m6">
            <div class="card white darken-1">
                <div class="card-content black-text center-align">
                <div class="row">
                    <form class="col s12">
                        <span class="card-title">
                            <div class="input-field col s12">
                                <input id="deck_title" type="text" class="validate">
                                <label for="deck_title">Deck Title</label>
                            </div>
                        </span>

                        <div class="input-field col s12">
                            <select>
                            <option value="" disabled selected>Choose category</option>
                            {category_options}
                            </select>
                            <label>Category</label>
                        </div>

                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Description</label>
                        </div>
                        
                        <button class="btn waves-effect waves-light" type="submit" name="action">Create Cards</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Deck_Create;