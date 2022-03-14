const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Deck {
    title: String
    category: String
    description: String
    author: ID
    date_created: String
    flashcards: [Flashcard]
  }

  type Flashcard {
    _id: ID
    name: String
    sideA: String
    sideB: String
    noteSideA: String
    noteSideB: String
    deck: [Deck]
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
    flashcard(category: ID, name: String): [Flashcard]
    flashcard(_id: ID!): Flashcard
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addDeck(deck: [ID]!): Deck
    updateUser(username: String, email: String, password: String): User
    updateDeck(_id: ID!, quantity: Int!): Deck
    login(email: String!, username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// Card category/deck
// id
// name string

//

