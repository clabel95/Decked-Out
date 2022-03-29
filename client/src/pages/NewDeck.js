import React from 'react';
import Navbar from '../components/Navbar'
// import Header from "../components/Header_WIP/Header";
// import Footer from "../components/Footer_WIP/Footer";
import DeckCreate from '../components/DeckCreate/index';
import SearchBar from '../components/SearchBar/index';
import { Link } from 'react-router-dom';



const NewDeck = () => {
  const categories = ["Sports", "Pokemon", "Games"];

  return (
    <main>
      <Navbar />
      <div className='container'>
        <div className="flex-row justify-center">
          <div>
            <h2>Decked-Out</h2>

            <DeckCreate categories={categories}/>
            {/* we need to somehow pass through the deck Id that was just created or maybe pass through the deck name and then search for that deck name and retrieve the id from there?
            I am not sure yet what the best way to do it would be but for now I will pass through the deck name and do a query in flashcard create on that deck name. Also I am moving this link to be inside the deck create.*/}
            {/* <Link to='/addFlashCard'>createFlashcard</Link> */}
            
            
          </div>
          
        </div>
       
      </div>
      <SearchBar categories={categories}/>
    </main>
  );
};

export default NewDeck;