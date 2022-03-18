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