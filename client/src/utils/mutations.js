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

export const ADD_USER = gql`
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
    mutation addFlashcard($sideA: String!, $sideB: String!, $deck: ID!) {
        addFlashCard(sideA: $sideA, sideB: $sideB, deck: $deck) {

                _id
                sideA
                sideB
        
        }
    }`
export const ADD_DECK = gql`
    mutation addDeck($title: String!, $category: String!, $description: String!) {
        addDeck(title: $title, category: $category, description: $description) {
                _id
                title
                category
                description
                date_created

        }
    }
`;
