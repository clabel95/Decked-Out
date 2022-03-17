import React from 'react';
// import Header from "../components/Header_WIP/Header";
// import Footer from "../components/Footer_WIP/Footer";
import Navbar from '../components/Navbar/index'
import Carousel_User from "../components/Carousel_User/index";
import SearchBar from '../components/SearchBar/index'


const User = () => {
  const categories = ["Sports", "Pokemon", "Games"];
  return (
    <>
    <main>

    <Navbar />
      <div className="flex-row justify-center">
        <div>
          <h2>User page</h2>
          {/* <Carousel_User/> */}
          <SearchBar categories={categories}/>
        </div>
        
      </div>
    </main>
    </>
  );
};

export default User;