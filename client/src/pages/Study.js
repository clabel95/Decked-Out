import React from 'react';
import Navbar from '../components/Navbar'
// import Header from "../components/Header_WIP/Header";
// import Footer from "../components/Footer_WIP/Footer";
import FlashcardStudy from "../components/FlashcardStudy/FlashcardStudy";
import { useQuery } from '@apollo/client';
import { FLASHCARDS } from '../utils/queries';



const Study = () => {
  const {loading, data} = useQuery(FLASHCARDS);
  const home_flashcards = data
  console.log(data);
  return (
    <main>
    <Navbar />

      <div className="flex-row justify-center">
        <div>
          <h2>Study</h2>
          <FlashcardStudy flashcards={home_flashcards}/>
          {/* <SearchBar/> */}
        </div>
      </div>
    </main>
  );
};

export default Study;