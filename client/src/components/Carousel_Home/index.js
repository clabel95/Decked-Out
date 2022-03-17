import React from 'react';
import Carousel_Container from '../Carousel_Container/index';
import {FLASHCARDS, HOME_DECKS} from '../../utils/queries'
import { useQuery } from '@apollo/client';

function Carousel_Home(){
    const {loading, data} = useQuery(HOME_DECKS);
    const home_decks = data;
    //console.log(data);



    return(
        <div>
            {loading ? (
            <div>Loading...</div>
          ) : (
            <Carousel_Container decks={home_decks} />
          )}
        
        {/* <Carousel_Container decks={home_decks} /> */}
        </div>
    );

}


export default Carousel_Home;
