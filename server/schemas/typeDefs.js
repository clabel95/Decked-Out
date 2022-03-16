const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Deck {
    _id: ID
    title: String
    category: String
    description: String
    author: ID
    date_created: String
    flashcards: [Flashcard]
  }

  type Flashcard {
    _id: ID
    sideA: String!
    sideB: String!
    noteSideA: String
    noteSideB: String
    deckTitle: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    decks: [Deck]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    decks: [Deck]
    flashcard(_id: ID, sideA: String!, sideB: String!): [Flashcard]
    flashcards: [Flashcard]
    user: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addDeck(deck: [ID]!): Deck
    addFlashCard(
      sideA: String!
      sideB: String!
      noteSideA: String 
      noteSideB: String): Flashcard
    updateFlashCard(sideA: String!, sideB: String!, noteSideA: String, noteSideB: String): Flashcard
    updateUser(username: String, email: String, password: String): User
    updateDeck(title: String!, category: String!, description: String): Deck
    login(email: String!, username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;