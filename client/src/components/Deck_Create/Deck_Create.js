import React from 'react';

function Deck_Create(props) {
    const category_options = [];

    // create html for category options
    for (let i = 0; i < props.categories.length; i++) {
        category_options.push(<option value={props.categories[i]}>{props.categories[i]}</option>);
    }

    return (
        <div className="row">
            <div className="col s12 m6">
            <div className="card white darken-1">
                <div className="card-content black-text center-align">
                <div className="row">
                    <form className="col s12">
                        <span className="card-title">
                            <div className="input-field col s12">
                                <input id="deck_title" type="text" className="validate"></input>
                                <label for="deck_title">Deck Title</label>
                            </div>
                        </span>

                        <div className="input-field col s12">
                            <select>
                            <option value="" disabled selected>Choose category</option>
                            {category_options}
                            </select>
                            <label>Category</label>
                        </div>

                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label for="textarea1">Description</label>
                        </div>
                        
                        <button className="btn waves-effect waves-light" type="submit" name="action">Create Cards</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Deck_Create;