const { Schema, model } = require('mongoose');
const deckSchema = require('./Deck');

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            index: { unique: true }
        },
        password: {
            type: String,
            required: true,
        },
        decks: [deckSchema],
    }
);

const User  = model('user', userSchema);

module.exports = User;