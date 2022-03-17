import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_DECK } from '../../utils/mutations';
import { HOME_DECKS } from '../../utils/queries';


function DeckCreate(props) {
    const category_options = [];

    // create html for category options
    for (let i = 0; i < props.categories.length; i++) {
        category_options.push(<option value={props.categories[i]}>{props.categories[i]}</option>);
    }
    const [titleText, setTitleText] = useState('');
    const [categoryText, setCategoryText] = useState('');

    // const [formState, setFormState] = useState({
    //     title: '',
    //     category: '',
    //     description: '',
    // });

    const [addDeck, { error }] = useMutation(ADD_DECK, {
        update(cache, { data: { addDeck } }) {
            try {
                const { newDeck } = cache.readQuery({ query: HOME_DECKS });

                cache.writeQuery({
                    query: HOME_DECKS,
                    data: { newDeck: [addDeck, ...newDeck] },
                })
            } catch (e) {
                console.log(e);
            }
        }
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(`this is the state of the form ${categoryText.category}`)

        try {
            const { data } = await addDeck({
                variables: { titleText, categoryText },
            });
            setTitleText('');
            setCategoryText('');
        } catch (err) {
            console.log(err);
        }
        //clear form values after submit button
        // setFormState({
        //     title: '',
        //     category: '',
        //     description: '',
        // });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if( name === 'titleText' && value.length <= 15) {
            setTitleText(value)
            setCategoryText(value)
        }

        // setFormState({
        //     ...formState,
        //     [name]: value,
        // });
    };

    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card white darken-1">
                    <div className="card-content black-text center-align">
                        <div className="row">
                            <form className="col s12" onSubmit={handleFormSubmit}>
                                <span className="card-title">
                                    <div className="input-field col s12">
                                        <input id="deck_title" value={titleText.title} type="text" name="title" className="validate" onChange={handleChange}></input>
                                        <label htmlFor="deck_title">Deck Title</label>
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
                                    <textarea id="textarea1" className="materialize-textarea" value={categoryText.description} name="description" onChange={handleChange}></textarea>
                                    <label htmlFor="textarea1">Description</label>
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

export default DeckCreate;