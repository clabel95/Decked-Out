import React from 'react';
import Carousel_Container from '../Carousel_Container/index';
import {FLASHCARDS, HOME_DECKS} from '../../utils/queries'
import { useQuery } from '@apollo/client';

function Carousel_Home(){
    const {loading, data} = useQuery(FLASHCARDS);
    const home_decks = data;
    console.log(data);


    return(
        <>
        <h2>carousel home </h2>
        {/* <Carousel_Container decks={home_decks} /> */}
        </>
    );

}


export default Carousel_Home;
