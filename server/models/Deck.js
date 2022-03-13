const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const flashcardSchema = require('./Flashcard');

const deckSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        date_created: {
            type: Date,
            default: Date.now(),
        },
        author: userSchema,
        flashcards: [flashcardSchema],
    }
);

const Deck = model('deck', deckSchema);

module.exports = Deck;

//title
//category
//description
//author - UserSchema
