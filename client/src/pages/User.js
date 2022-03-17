import React from 'react';

// import Header from "../components/Header_WIP/Header";
// import Footer from "../components/Footer_WIP/Footer";
// import NavBar from "../components/NavBar/NavBar";
import Carousel_User from "../components/Carousel_User/index";
// import SearchBar from "../components/SearchBar/index";


const User = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div>
          <h2>Hello</h2>
          <Carousel_User/>
          {/* <SearchBar/> */}
        </div>
      </div>
    </main>
  );
};

export default User;