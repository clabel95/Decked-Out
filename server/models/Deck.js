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
        //create helper function for Date Format
        date_created: {
            type: Date,
            default: Date.now(),
            //this will be a getter function
        },
        //do we need another value here?  name from author schema? - 
        author:
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        flashcards: [
            {   
                
                type: Schema.Types.ObjectId,
                ref: 'flashcard'
            }
            //WOULD LIKE TO SHOW SIDEA HERE
        ],
    }
);

const Deck = model('deck', deckSchema);

module.exports = Deck;



//title
//category
//description
//author - UserSchema