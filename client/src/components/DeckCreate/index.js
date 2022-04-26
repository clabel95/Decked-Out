import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_DECK } from '../../utils/mutations';
import { HOME_DECKS } from '../../utils/queries';
import { Link } from 'react-router-dom';


function DeckCreate(props) {
    const category_options = [];

    // create html for category options
    for (let i = 0; i < props.categories.length; i++) {
        category_options.push(<option value={props.categories[i]}>{props.categories[i]}</option>);
    }
    const [title, setTitleText] = useState('');
    const [category, setCategoryText] = useState('');
    const [description, setDescritionText] = useState('');

    // const [formState, setFormState] = useState({
    //     title: '',
    //     category: '',
    //     description: '',
    // });sdf

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

    //const [addDeck, { error, data }] = useMutation(ADD_DECK);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(`this is the state of the form ${category}`)
        console.log(title.title)

        try {
            const { data } = await addDeck({
                variables: { title, category, description },
            });
            document.getElementById("Deck").classList.toggle("hide");
            document.getElementById("Flashcard").classList.toggle("hide");
            // return <Link push to='/addFlashCard' state = {{title: title }}></Link>
            // setTitleText('');
            // setCategoryText('');
            // setDescritionText('');
            
        } catch (err) {
            console.log(err);
        
        }
        //clear form values after submit button
        // setFormState({
        //     title: '',
        //     category: '',
        //     description: '',
        // });
        // const newDeckData = data?.decks || {}
        //     console.log(newDeckData)

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(title); 
        console.log(name)
        console.log(value)
        switch (name){
            case "title": setTitleText(value); break; 
            case "category": setCategoryText(value); break;
            case "description": setDescritionText(value); break;
            default: break;
        }
        
        // if (name === 'titleText' && value.length <= 15) {
        //     setTitleText(value)
        //     setCategoryText(value)
        //     setDescritionText(value)
        // }

            // setTitleText(value)
            // setCategoryText(value)
            // setDescriptionText(value)

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
                                        <input id="deck_title" value={title.title} type="text" name="title" className="validate" onChange={handleChange}></input>
                                        <label htmlFor="deck_title">Deck Title</label>
                                    </div>
                                </span>

                                <div className="input-field col s12">
                                    <select value={category} type="text" name='category' onChange={handleChange}>
                                        <option value="" disabled selected>Choose category</option>
                                        {category_options}
                                    </select> 
                                    <label>Category</label>
                                </div>

                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea" value={description} name="description" onChange={handleChange}></textarea>
                                    <label htmlFor="textarea1">Description</label>
                                </div>

                                <button className="btn "id="Deck" type="submit" name="action">Finalize Deck</button>
                                <button className="btn hide"id="Flashcard"><Link push to='/addFlashCard' state = {{title: title }}>Create Cards</Link></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeckCreate;