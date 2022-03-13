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
        deck: [
            {
                type: Schema.Types.ObjectId,
                ref: 'deck',
            }
        ],
    }
);

const Flashcard = model('flashcard', flashcardSchema);

module.exports = Flashcard;