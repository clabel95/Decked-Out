import React from 'react';
import Navbar from '../components/Navbar'
// import Header from "../components/Header_WIP/Header";
// import Footer from "../components/Footer_WIP/Footer";
import DeckCreate from '../components/DeckCreate/index';
import SearchBar from '../components/SearchBar/index';



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
            
          </div>
          
        </div>
       
      </div>
      <SearchBar categories={categories}/>
    </main>
  );
};

export default NewDeck;