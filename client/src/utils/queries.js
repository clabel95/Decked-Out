import {gql} from '@apollo/client';
//make a query for user decks that show all the associated with one user

//user flashcards which is dependent on the deck they have

export const HOME_DECKS = gql`
query decks{
    decks{
      _id
      title
      category
      description
    }
}
`
// this is not working yet
export const USER_DECKS = gql`
query userDecks{
    decks{
        _id
        title
        category
        description
        author
    }

}`

// this is not working yet
//you only need the 'query flashcards' here to put parameters in parenthesis

export const FLASHCARDS = gql`
query flashcards{
    flashcards{
        _id
        sideA
        sideB
        noteSideA
        noteSideB
    }
}`