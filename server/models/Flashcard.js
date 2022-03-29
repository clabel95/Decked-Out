const { Schema, model } = require('mongoose');

const flashcardSchema = new Schema(
    {
        sideA: {
            type: String,
            required: true,
        },
        sideB: {
            type: String,
            required: true,
        },
        noteSideA: {
            type: String,
        },
        noteSideB: {
            type: String,
        },
        // deck: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'deck',
        //     },
        // ],
        deckTitle: {
            type: String
        },
        deck: {
            type: Schema.Types.ObjectId,
            ref:'deck'
        }
            //WOULD LIKE TO SHOW DECK TITLE HERE
    }
);

const Flashcard = model('flashcard', flashcardSchema);

module.exports = Flashcard;