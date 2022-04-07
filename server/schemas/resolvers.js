const { AuthenticationError } = require('apollo-server-express');
const { Deck, Flashcard, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    decks: async () => {
        //find all the decks for the homepage and populate the JUST THE DECKS
        return await Deck.find({});//.populate('flashcards');
    },
    deck: async(parent, {deckId}) => {
      return await Deck.findOne({ _id: deckId});
    },
    userDecks: async(parent, {author}) => {
      return await Deck.find({ author: author});
    },
    deckTitle: async(parent,{deckTitle}) =>{
      return await Deck.findOne({title: deckTitle})
    },
    //populate one flashcard at a time from the corresponding deck by id
    //DO WE HAVE TO LOOP THROUGH THE OTHER FLASHCARDS SOMEHOW
    //WE MAY NEED TO CHANGE THIS
    //CATEGORY MAY NOT BE THE CORRECT ARGUMENT
    flashcard: async (parent, { deck }) => {
      return await Flashcard.find({deck: deck});
    },
    flashcards: async (parent, args) => {
      return Flashcard.find({});
    },
    //find the user by ID, and populate flashcards and decks at the same time
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'decks',
          populate: 'flashcards'
        });
        return user;
      }
      //throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    //this is creating a user from the sign up page
  addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);

    return { token, user };
  },
  //adding a deck from the navbar on the side = on the plus sign on page 6 of wireframe, component is deck_create, associated with next button
  addDeck: async (parent, {title, category, description, author}) => {
      const deck = await Deck.create({title, category, description, author});
      return deck;
  },
  // this will be the 'plus' on the same 'next' page from the same component as the previous one
  addFlashCard: async (parent, {sideA, sideB, deck}) => {
      const flashcard = await Flashcard.create({sideA, sideB, deck});
      return flashcard;
  },
  // NOT NECESSARILY FUNCTIONING IN THE CURRENT SETUP - OPTIONAL
  updateUser: async (parent, args, context) => {
    if (context.user) {
      return await User.findByIdAndUpdate(context.user._id, args, { new: true });
    }
    throw new AuthenticationError('Not logged in');
  },
  //appends information to the deck, title, category, description should be called from slide 5 of wireframe
  updateDeck: async (parent, args, context) => {
      if (context.deck) {
          return await Deck.findByIdAndUpdate(context.deck._id, args, {new: true});
      }
  },
  //same thing as previous but updating a flashcard - NOT NECESSARILY BEING FUNCTIONAL WITH CURRENT WIREFRAME SETUP
  updateFlashCard: async (parent, args, context) => {
      if (context.deck) {
          return await Flashcard.findByIdAndUpdate(context.flashcard._id, args, {new: true});
      }
  },
  // USER IS BEING FOUND BY EMAIL (NO REQUEST FOR USERNAME CURRENTLY BEING USED) 
  // this doesn't exit yet - PASSWORD MUST BE LONGER THAN 8 CHARACTERS TO WORKS
  login: async (parent, { username, password }) => {
    const user = await User.findOne({ username });

    if (!user) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const token = signToken(user);

    return { token, user };
  }
}
};


    // If we wanted to include Stripe payment processing
//--------------------------------------------------------------
//     checkout: async (parent, args, context) => {
//       const url = new URL(context.headers.referer).origin;
//       const order = new Order({ products: args.products });
//       const line_items = [];

//       const { products } = await order.populate('products');

//       for (let i = 0; i < products.length; i++) {
//         const product = await stripe.products.create({
//           name: products[i].name,
//           description: products[i].description,
//           images: [`${url}/images/${products[i].image}`]
//         });

//         const price = await stripe.prices.create({
//           product: product.id,
//           unit_amount: products[i].price * 100,
//           currency: 'usd',
//         });

//         line_items.push({
//           price: price.id,
//           quantity: 1
//         });
//       }
//       return { session: session.id };
//     }
// -----------------------------------------------------------------------

module.exports = resolvers;