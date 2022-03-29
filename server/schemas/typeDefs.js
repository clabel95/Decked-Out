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
    deck: ID
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
    deck(deckId: ID): Deck
    deckTitle(deckTitle: String): Deck
    flashcard(deck: ID): [Flashcard]
    flashcards: [Flashcard]
    user: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addDeck(title: String!, category: String!, description: String): Deck
    addFlashCard(sideA: String!, sideB: String!, deck: ID!): Flashcard
    updateFlashCard(sideA: String!, sideB: String!, noteSideA: String, noteSideB: String): Flashcard
    updateUser(username: String, email: String, password: String): User
    updateDeck(title: String!, category: String!, description: String): Deck
    login( username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;