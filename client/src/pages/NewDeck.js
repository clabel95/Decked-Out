import React from 'react';
import Navbar from '../components/Navbar'
// import Header from "../components/Header_WIP/Header";
// import Footer from "../components/Footer_WIP/Footer";
import New_Deck from "../components/Deck_Create/index";



const NewDeck = () => {
  return (
    <main>
    <Navbar />
      <div className="flex-row justify-center">
        <div>
          <h2>Hello</h2>
          <New_Deck/>
          {/* <SearchBar/> */}
        </div>
      </div>
    </main>
  );
};

export default NewDeck;