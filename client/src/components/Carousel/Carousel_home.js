import React from 'react';
import Carousel_Container from './Carousel_Container';
import {Deck, Flashcard, User} from '../../../../server/models';
import {HOME_DECKS} from '../../utils/queries'
import { useQuery } from '@apollo/client';

function Carousel_Home(props){
    const {loading, data} = useQuery(HOME_DECKS);
    const home_decks = data;
    console.log(home_decks);
    const deck_desc_array = [];
    const deck_name_array = [];


    return(
        <Carousel_Container decks={decks_array} deck_name={deck_name_array} deck_description={deck_desc_array}  />
    );

}


export default Carousel_Home;
