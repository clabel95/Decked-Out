import React from 'react';
import Carousel_Container from '../Carousel_Container/index';
import {USER_DECKS} from '../../utils/queries'
import { useQuery } from '@apollo/client';

function Carousel_Home(props){
    const {loading, data} = useQuery(USER_DECKS);
    const user_decks = data;
    console.log(user_decks);
    //NOT ABLE TO GET DECKS FROM USER!!


    return(
        <div>

        {loading ? (
            <div>Loading...</div>
            ) : (
       <Carousel_Container decks={user_decks} />
       )}
       </div>
    );

}


export default Carousel_Home;