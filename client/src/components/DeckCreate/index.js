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
    // const [titleText, setTitleText] = useState('');
    // const [categoryText, setCategoryText] = useState('');
    // const [descriptionText, setDescriptionText] = useState('')

    const [formState, setFormState] = useState({
        title: '',
        category: '',
        description: '',
    });

    const [addDeck, { error, data }] = useMutation(ADD_DECK);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(`this is the state of the form ${formState.title} ${formState.category} ${formState.description}`)

        try {
            const { data } = await addDeck({
                variables: { ...formState },
            });
            

            // setTitleText('');
            // setCategoryText('');
            // setDescriptionText('');
        } catch (err) {
            console.log(err);
        }
        //clear form values after submit button
        setFormState({
            title: '',
            category: '',
            description: '',
        });
        const newDeckData = data?.decks || {}
            console.log(newDeckData)

    };

    const handleChange = (event) => {
        const { name, value } = event.target;


            // setTitleText(value)
            // setCategoryText(value)
            // setDescriptionText(value)

        setFormState({
            ...formState,
            [name]: value,
        });
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
                                        <textarea id="deck_title" value={formState.title} type="text" name="title" className="materialize-textarea" onChange={handleChange}></textarea>
                                        <label htmlFor="deck_title">Deck Title</label>
                                    </div>
                                </span>

                                <div className="input-field col s12">
                                    <textarea className='materialize-textarea' value={formState.category} name="category" onChange={handleChange}></textarea>
                                    {/* <select>
                                        <option value="" disabled selected>Choose category</option>
                                        {category_options}
                                    </select> */}
                                    <label>Category</label>
                                </div>

                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea" value={formState.description} name="description" onChange={handleChange}></textarea>
                                    <label htmlFor="textarea1">Description</label>
                                </div>

                                <button className="btn " type="submit" name="action">Create Cards</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeckCreate;