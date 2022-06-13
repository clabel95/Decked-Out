import React from 'react';
import Carousel_Container from '../Carousel_Container_User/index';
import {USER_DECKS} from '../../utils/queries'
import { useQuery } from '@apollo/client';

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};



function Carousel_User(props){
    //use this to get the current users _id
    //console.log(parseJwt(localStorage.getItem("id_token")).data._id);
    const author = parseJwt(localStorage.getItem("id_token")).data._id.toString();

    const {loading, data} = useQuery(USER_DECKS,{variables: {author: author}});
    const user_decks = data;
    //console.log(user_decks);
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


export default Carousel_User;