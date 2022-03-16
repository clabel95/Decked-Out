import {gql} from '@apollo/client';
export const HOME_DECKS = gql`
query decks{
    title
}
`

export const FLASHCARDS = gql`
query flashcards{
    flashcards{
        sideA
    }
}`