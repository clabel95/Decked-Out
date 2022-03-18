import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login (username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const  ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_FLASHCARD = gql`
    mutation addFlashcard($sideA: String!, $sideB: String!) {
        addFlashCard(sideA: $sideA, sideB: $sideB) {
            token
            flashcard {
                _id
                sideA
                sideB
            }
        }
    }`
export const ADD_DECK = gql`
    mutation addDeck($title: String!, $category: String!, $description: String) {
        addDeck(title: $title, category: $category, description: $description) {
            deck {
                _id
                title
                category
                description
                flashcards
            }
        }
    }
`;
