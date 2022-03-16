import React from 'react';
import Carousel_Container from '../Carousel_Container/index';
import {FLASHCARDS, HOME_DECKS} from '../../utils/queries'
import { useQuery } from '@apollo/client';

function Carousel_Home(){
    const {loading, data} = useQuery(FLASHCARDS);
    const home_decks = data;
    console.log(data);


    return(
        <div>

        {/* {loading ? (<div>Loading...</div>) : (
                <h2>{data.decks[0].category}</h2>
                )} */}
                
        {/* <Carousel_Container decks={home_decks} /> */}
        </div>
    );

}


export default Carousel_Home;
