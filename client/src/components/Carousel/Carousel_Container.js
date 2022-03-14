import React from 'react';
import "../Carousel.css";
import "./initalize.js";
import Carousel_Item from './Carousel_Item';




function Carousel_Container(props) {
    //Make a function to parse out all the different Carousel items and then add them to the return statment.
    const carousel_items = [];
    const deck_name = "";
    const deck_description = "";

    for (var i = 0; i < this; i += 1) {//Need to figure out what to replace this with so that we can loop through all the decks 
        carousel_items.push(<Carousel_Item name={props.deck_name} description={props.deck_description} />)
    };

    return (
        <div class="container">
            <div class="carousel">
                {carousel_items}
            </div>
            <script src="./initalize.js"></script>
        </div>


    );
}

export default Carousel_Container;