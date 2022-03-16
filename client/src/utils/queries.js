import {gql} from '@apollo/client';
export const HOME_DECKS = gql`
query decks{
    decks{
    _id
    title
  }
}
`

export const FLASHCARDS = gql`
query flashcards{
    flashcards{
        sideA
    }
}`