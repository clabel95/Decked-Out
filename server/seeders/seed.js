const db = require('../config/connection');
const { Pokemon, Geography, Coding} = require('../models');
const pokeSeeds = require('./pokeSeeds.json');
const codeSeeds = require('./codeSeeds.json');
const geoSeeds = require('./geoSeeds.json');
const flashcard = require('./flashcard.json');
const user = require('./user.json');


db.once('open', async () => {
    try {
      await Pokemon.deleteMany({});
      await Geography.deleteMany({});
      await Coding.deleteMany({});
  
      await User.create(userSeeds);
  
      for (let i = 0; i < thoughtSeeds.length; i++) {
        const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
        const user = await User.findOneAndUpdate(
          { username: thoughtAuthor },
          {
            $addToSet: {
              thoughts: _id,
            },
          }
        );
      }
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });


