import React from 'react';
import Navbar from '../components/Navbar'
// import Header from "../components/Header_WIP/Header";
// import Footer from "../components/Footer_WIP/Footer";
// import NavBar from "../components/NavBar/NavBar";
import Carousel_Home from "../components/Carousel_Home/index";
import SearchBar from "../components/SearchBar/index";


const Home = () => {
  const categories = ["Sports", "Pokemon", "Games"];

  return (
    <main>
      <Navbar />
      <div className="flex-row justify-center">
        <div>


          <h2>Deck Out</h2>

          <Carousel_Home/>
          <SearchBar categories={categories}/>
        </div>
      </div>
    </main>
  );
};

export default Home;
