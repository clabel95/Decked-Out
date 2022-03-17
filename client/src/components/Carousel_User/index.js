import React from 'react';
import Carousel_Container from '../Carousel_Container/index';
import {USER_DECKS} from '../../utils/queries'
import { useQuery } from '@apollo/client';

function Carousel_Home(props){
    const {loading, data} = useQuery(USER_DECKS);
    const user_decks = data;
    console.log(user_decks);


    return(
       <Carousel_Container decks={user_decks} />
    );

}


export default Carousel_Home;