import React from 'react';
import "./Flashcard_Create.css";
import { useMutation } from '@apollo/client';
import { ADD_FLASHCARD, LOGIN_USER } from '../../utils/mutations';

//still need to add the functionality to the next card and finalize deck buttons in a flashcard.js file. 

//next card would take all the info inputed into the SideA and SideB fields and send that to the database to create a new flashcard in the current deck. 

//after the data has been transfered the input fields will be cleared so the user can add data to the next card they wish to work on.

//once the user has finished inputing data for all of their cards they will click the Finalize button which will check to see if there is any data in the input fields
//if there is data then it will send that data to the database to create a new card. if there is no data or if the data has been transfered then it will just take the user back to the home or user screen. 


function Flashcard_Create() {
    [formState, setFormState] = useState({
        sideA: '',
        sideB: '',
    });
    const [addFlashCard, { error, data }] = useMutation(ADD_FLASHCARD)

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(`this is the state of the form ${formState.sideA}`)
        try {
            const { data } = await addFlashCard({
                variables: { ...formState },
            });
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }
        return (
            <div class="container row flashcard">
                <form onSubmit={handleFormSubmit}>
                    <div class="col s10">
                        <div class="card">
                            <div class="card-content">
                                <div class="SideA left">
                                    <label>SideA</label>
                                    <input 
                                    id="SideA"
                                    value= {formState.sideA} 
                                    name="sideA"
                                    onChange={handleChange}
                                    type="text" 
                                    placeholder="input side A text here" 
                                    />
                                </div>
                                <div class="SideB right">
                                    <input 
                                    id="SideB"
                                    value= {formState.sideB} 
                                    name="sideB"
                                    onChange={handleChange}
                                    type="text" 
                                    placeholder="input side B text here" 
                                    />
                                </div>

                            </div>
                            <div class="card-tabs">
                                <ul class="tabs tabs-fixed-width">
                                    <li class="tab">Side A</li>
                                    <li class="tab">Side B</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col s2 button_holder ">
                        <button class="btn next_card waves-effect waves-light #80cbc4 teal lighten-3" id="new_card" type="submit" name="action">Next Card</button>
                        <button class="btn next_card waves-effect waves-light #ffab91 deep-orange lighten-3" id="finalize_deck" type="submit" name="action">Finalize</button>
                    </div>
                </form>
            </div>


        );
    }

    export default Flashcard_Create;