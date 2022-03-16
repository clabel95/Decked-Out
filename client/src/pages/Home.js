import React from 'react';
import Header from "../components/Header_WIP/Header";
import Footer from "../components/Footer_WIP/Footer";
import NavBar from "../components/NavBar/NavBar";
import Carousel_Home from "../components/Carousel/Carousel_home";
import SearchBar from "../components/SearchBar/SearchBar";

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <Header/>
        <div>
          <NavBar/>
          <Carousel_Home/>
          <SearchBar/>
        </div>
        <Footer/>
      </div>
    </main>
  );
};

export default Home;
