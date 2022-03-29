import React, {useEffect, useState } from 'react';
import Navbar from '../../components/Navbar'
//import "./Flashcard_Create.css";
//import SearchBar from '../../components/SearchBar';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_FLASHCARD } from '../../utils/mutations';
import { DECK_ID } from '../../utils/queries';
import { useLocation } from 'react-router-dom'

//still need to add the functionality to the next card and finalize deck buttons in a flashcard.js file. 

//next card would take all the info inputed into the SideA and SideB fields and send that to the database to create a new flashcard in the current deck. 

//after the data has been transfered the input fields will be cleared so the user can add data to the next card they wish to work on.

//once the user has finished inputing data for all of their cards they will click the Finalize button which will check to see if there is any data in the input fields
//if there is data then it will send that data to the database to create a new card. if there is no data or if the data has been transfered then it will just take the user back to the home or user screen. 


function Flashcard_Create() {
    const location = useLocation();
    const deckTitle = location.state.title;
    console.log(deckTitle.toString())
    
    const {loading, data} = useQuery(DECK_ID,{variables: {deckTitle: deckTitle}})
    console.log("checking id")
    

    
    
     

    console.log(loading);
    //console.log(data.deckTitle._id);
    const [addFlashCard, { error }] = useMutation(ADD_FLASHCARD)

    const categories = ["Sports", "Pokemon", "Games"];
    const [formState, setFormState] = useState({
        sideA: '',
        sideB: '',
        deck:  '',
    });
    console.log(formState)
    
    

    const handleChange = (event) => {
        console.log(data.deckTitle._id)
        const { name, value } = event.target;
        setFormState({
            ...formState,
            deck: data.deckTitle._id});
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(`this is the state of the form ${formState.sideA}`)
        console.log(formState)
        const deck =  data.deckTitle._id;
        
        try {
            const { data } = await addFlashCard({
                variables: { ...formState, deck: deck },
            });
            
            setFormState({...formState, sideA: '', sideB: ''})
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <h2>Decked-Out</h2>
            <Navbar />
            <div className="container row flashcard">
                <form onSubmit={handleFormSubmit}>
                    <div className="col s10">
                        <div className="card">
                            <div className="card-content">
                                <div className="SideA left">
                                    <input
                                        id="SideA"
                                        value={formState.sideA}
                                        name="sideA"
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="input side A text here"
                                    />
                                </div>
                                <div className="SideB right">
                                    <input
                                        id="SideB"
                                        value={formState.sideB}
                                        name="sideB"
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="input side B text here"
                                    />
                                </div>

                            </div>
                            <div className="card-tabs">
                                <ul className="tabs tabs-fixed-width">
                                    <li className="tab">Side A</li>
                                    <li className="tab">Side B</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col s2 button_holder ">
                        <button className="btn next_card  #80cbc4 teal lighten-3" id="new_card" type="submit" name="action">Next Card</button>
                        <button className="btn next_card  #ffab91 deep-orange lighten-3" id="finalize_deck" type="submit" name="action">Finalize</button>
                    </div>
                </form>
                
            </div>
            {/* <SearchBar categories={categories}/> */}
        </>


    );
}

export default Flashcard_Create;