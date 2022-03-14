const db = require('../config/connection');
const { Deck, Flashcard, User } = require('../models');
const pokeSeeds = require('./pokeSeeds.json');
const codeSeeds = require('./codeSeeds.json');
const geoSeeds = require('./geoSeeds.json');
const userSeeds = require('./userSeeds.json');
const deckSeeds = require('./deckSeeds.json');


db.once('open', async () => {
    try {
        await Flashcard.deleteMany({})
        await Deck.deleteMany({})
        await User.deleteMany({})

        await User.create(userSeeds)

        //CREATE DECKS AND POPULATE USER.decks WITH STARTER DECKS
        //THIS WORKS!
        for (let i=0; i<deckSeeds.length; i++) {
            const deckId = await Deck.create(deckSeeds[i])
            await User.findOneAndUpdate(
                { $addToSet: {
                    decks: deckId }
                },
            )
        }
        const allDecks = await Deck.find({});
        const author = await User.find({})

        //ADD AUTHOR TO DECK COLLECTION BY LOOPING THROUGH USER SEEDS
        for (let j=0; j<allDecks.length; j++) {
            // console.log(author[0]._id)
            await Deck.findOneAndUpdate({_id: allDecks[j]._id}, { author: author[0] }, { runValidators: true } )
        }

        //MANY FLASHCARDS BELONG TO ONE DECK - FIND BY TITLE
        for (let i=0; i<pokeSeeds.length; i++) {
            const pokeFlashcard = await Flashcard.create(pokeSeeds[i]);
            await Deck.findOneAndUpdate(
                //this may return the _id of the flashcard and not user
                { title: "Pokemon Trivia" }, { $push: {flashcards: pokeFlashcard} }, { runValidators: true } )
        }
        for (let i=0; i<geoSeeds.length; i++) {
            const geoFlashcard = await Flashcard.create(geoSeeds[i]);
            await Deck.findOneAndUpdate(
                //this may return the _id of the flashcard and not user
                { title: "Geography Quiz" }, { $push: {flashcards: geoFlashcard} }, { runValidators: true } )
        }
        for (let i=0; i<codeSeeds.length; i++) {
            const codeFlashcard = await Flashcard.create(codeSeeds[i]);
            await Deck.findOneAndUpdate(
                //this may return the _id of the flashcard and not user
                { title: "Javascript Coding" }, { $push: {flashcards: codeFlashcard} }, { runValidators: true } )
        }

        //POPULATE DECK FIELD IN FLASHCARD MODEL 

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('seeded database!')
    process.exit(0);
})