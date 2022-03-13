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


        for (let i=0; i<deckSeeds.length; i++) {
            const _id = await Deck.create(deckSeeds[i])
            const deckAuthor = await User.findOneAndUpdate(
                { decks: _id },
                {  },
                
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

        //await Flashcard.insertMany([pokeSeeds, codeSeeds, geoSeeds])
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('seeded database!')
    process.exit(0);
})