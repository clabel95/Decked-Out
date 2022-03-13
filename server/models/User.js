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
        //add bcrypt to here
        password: {
            type: String,
            required: true,
        },
        decks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'deck',
            }
        ],
    }
);

const User  = model('user', userSchema);

module.exports = User;