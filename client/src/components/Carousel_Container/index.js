import React, { Component } from 'react';
// import { M } from 'materialize-css/dist/js/materialize.min.js';
// import "./Carousel.css";
import Carousel_Item from '../Carousel_Item/index';


import M from "materialize-css";

class Carousel extends Component {
    componentDidMount() {
        const options = {
            numVisible: 5,
            // padding: 0,
            // dist:0,
            // duration: 200,
        };
        M.Carousel.init(this.Carousel, options);
        //Make a function to parse out all the different Carousel items and then add them to the return statment.
        // const decks = this.props.decks;
        // const carousel_items = Object.keys(decks).map(({ title, description }) =>
        //     <Carousel_Item name={title} description={description} />
        // );

        // const carousel_items = [];
        // for (var i = 0; i < this.props.decks.decks.length; i += 1) {//Need to figure out what to replace this with so that we can loop through all the decks 
        //      carousel_items.push(<Carousel_Item name={this.props.decks.decks[i].title} description={this.props.decks.decks[i].description} />)

        // };

        // console.log(carousel_items[1])
    }
    render() {
        return (
            <div className="container">
                <div ref={Carousel => { this.Carousel = Carousel; }} className="carousel row">
                    {(this.props.decks.decks).map((title, description, _id) => (
                            <Carousel_Item key={_id} name={title} description={description} />     
                    ))}
                    
                </div>
            </div>


        );
    }
}

export default Carousel;
//{this.carousel_items}this.props.decks[0].descriptionthis.props.decks[0].title