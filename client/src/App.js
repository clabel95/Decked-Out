import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import NewCard from "./pages/NewCard"
import Study from "./pages/Study"
import User from "./pages/User"
import Landing from "./components/Landing/Landing";
import Home from "./pages/Home";
import NewDeck from "./pages/NewDeck";

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});


const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({

  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='home/study'
            element={<Study />}
          />
          <Route
            path='home/user'
            element={<User />}
          />
          <Route
            path='home/deck_create'
            element={<NewDeck />}
          />



        </Routes>



      </Router>
    </ApolloProvider>
  );

}

export default App;

          // <Route
          //   path='/user'
          //   element={<Home />}
          // />
          // <Route
          //   path='/new-deck'
          //   element={<Home />}
          // />
          // <Route
          //   path='/new-card'
          //   element={<Home />}
          // />
