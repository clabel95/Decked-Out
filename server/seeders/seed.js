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
        //await Deck.create(deckSeeds)
        //await Flashcard.insertMany(pokeSeeds, codeSeeds, geoSeeds)

        //CREATE DECKS AND POPULATE USER.AUTHOR WITH STARTER DECKS
        //THIS WORKS!
        for (let i=0; i<deckSeeds.length; i++) {
            const deckId = await Deck.create(deckSeeds[i])
            //const authorId = await User.findById(userSeeds._id)
            await User.findOneAndUpdate(
                { $addToSet: {
                    decks: deckId }
                },
            )
            // await Deck.findOneAndUpdate(
            //     { $addToSet: {
            //         author: authorId}
            //     }
            // )
        }

        //ADD AUTHOR TO DECK COLLECTION BY LOOPING THROUGH USER SEEDS
        for (let j=0; j<userSeeds.length; j++) {
            const authorId = await User.findById(userSeeds[j])
            await Deck.populate(deck, { author: authorId }
         )
        }

        // for (let i=0; i<pokeSeeds.length; i++) {
        //     const { _id, sideA, sideB} = await Flashcard.create(pokeSeeds[i]);
        //     const deckUser = await Deck.findOneAndUpdate(
        //         //this may return the _id of the flashcard and not user
        //         { author: _id }
        //     )
        //     const deck = await Deck.findOneAndUpdate(
        //         {
        //             $addToSet: {
        //                 flashcards: sideA
        //             },
        //         }
        //     );
        // }

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('seeded database!')
    process.exit(0);
})