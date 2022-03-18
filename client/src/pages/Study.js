import React from 'react';
import Navbar from '../components/Navbar'
// import Header from "../components/Header_WIP/Header";
// import Footer from "../components/Footer_WIP/Footer";
import FlashcardStudy from "../components/FlashcardStudy/FlashcardStudy";
import { useQuery } from '@apollo/client';
import { FLASHCARDS } from '../utils/queries';



const Study = () => {
  const {loading, data} = useQuery(FLASHCARDS);
  //WE HAVE TO BE SPECIFIC AND TELL IT WHAT WE WANT FROM THE DATA THUS .FLASHCARDS
  //THE OR OPERATOR IS HERE FOR SAFETY IN CASE WE DON'T GET ANYTHING BACK FROM THE QUERY DATA
  const flashcardData = data?.flashcards || {}
  // const home_flashcards = data
  console.log(data);
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <main>
    <Navbar />

      <div className="flex-row justify-center">
        <div>
          <h2>Study</h2>
          <FlashcardStudy flashcards={flashcardData}/>
          {/* <SearchBar/> */}
        </div>
      </div>
    </main>
  );
};

export default Study;