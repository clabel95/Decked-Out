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
        deck: deckSchema,
    }
);

const Flashcard = model('flashcard', flashcardSchema);

module.exports = Flashcard;

//keys and values
//sideA
//sideB
//optional noteSideA
//optional noteSideB

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
        deckId:
            {
                type: Schema.Types.ObjectId,
                ref: 'deck',

            },
        deckTitle: {
            type: String,
        }
            //WOULD LIKE TO SHOW DECK TITLE HERE
    }
);

const Flashcard = model('flashcard', flashcardSchema);

module.exports = Flashcard;