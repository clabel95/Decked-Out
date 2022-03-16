import React from 'react';

// import Header from "../components/Header_WIP/Header";
// import Footer from "../components/Footer_WIP/Footer";
// import NavBar from "../components/NavBar/NavBar";
import Carousel_Home from "../components/Carousel_Home/index";
// import SearchBar from "../components/SearchBar/index";


const Home = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div>
          <Carousel_Home/>
          {/* <SearchBar/> */}
        </div>
      </div>
    </main>
  );
};

export default Home;
