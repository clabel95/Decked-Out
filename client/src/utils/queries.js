import {gql} from '@apollo/client';
export const HOME_DECKS = gql`
query deck{
    title
    category
    description
    date_created
    author
    flashcards
}
`