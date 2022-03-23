import React, { useState } from 'react';
import "./Flashcard_Study.css";


function FlashcardStudy(props) {
    // let card_index = 0;
    const [card_index, changeCardIndex] = useState(0)
    console.log(props.flashcards)
    function FlipCard() {
        document.getElementById("SideB").classList.toggle("hide");
        document.getElementById("SideA").classList.toggle("hide");
    }


    //decrements the card index value which will change the contents of the displayed flashcard.
    function Prev_Card() {
        if (card_index > 0) {
            // card_index -= 1;
            let index = card_index
            changeCardIndex( index-=1 )
        } else {
            // card_index = total_cards -1;
            changeCardIndex(props.flashcards.length -1)
        }
        console.log(card_index)
        console.log(props.flashcards[card_index])
    }

    //increments the card index value which will change the contents of the displayed flashcard.
    function Next_Card() {
        // THIS NEEDS TO BE THE CARD_INDEX.LENGTH
        if (card_index < 43) {
            // card_index += 1;
            let index = card_index
            changeCardIndex( index+=1 )
        } else {
            // card_index = 0;
            changeCardIndex(0)
        }
        console.log(card_index)
        console.log(props.flashcards[card_index])
    }
    //index that will let us loop through all the cards.

    //need to figure out what exactly is passed into this function so that we can properly set up the props calls.
    // as of right now I am using the card index let to loop through all of the cards in the deck. 

    return (
        <div class="container row flashcard_study valign-wrapper">
            <div class="col s2 button_holder right-align">
                {/* CURRENTLY THIS IS NOT RERENDERING THE COMPONENT */}
                <a class="btn flow-text valign-wrapper" onClick={() => Prev_Card()}><i class="material-icons">arrow_back</i></a>
            </div>
            <div class="col s8">
                <div class="card">
                    <div class="card-content">
                        <div class="Study center-align" id="SideA">
                            <div>{props.flashcards[card_index].sideA}</div>
                            <a class="btn flow-text" id="SideA_btn" onClick={() => FlipCard()}><i class="material-icons">autorenew</i></a>

                        </div>
                        <div class="Study center-align hide" id="SideB">
                            <div>{props.flashcards[card_index].sideB}</div>
                            <a class="btn flow-text" id="SideB_btn" onClick={() => FlipCard()}><i class="material-icons ">autorenew</i></a>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col s2 button_holder">
                <a class="waves-effect waves-light btn flow-text valign-wrapper" onClick={() => Next_Card()}><i class="material-icons">arrow_forward</i></a>
            </div>
        </div>
    )
}
export default FlashcardStudy;