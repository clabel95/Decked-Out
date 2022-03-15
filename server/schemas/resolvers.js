const { AuthenticationError } = require('apollo-server-express');
const { Deck, Flashcard, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    deck: async () => {
              return await Deck.find();
    },
    flashcard: async (parent, { deck, title }) => {
      const params = {};


      return await Flashcard.find(params).populate('deck');
    },
    flashcard: async (parent, { _id }) => {
      return await Flashcard.findById(_id).populate('deck');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'flashcards',

          
          populate: 'decks'
        });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'flashcards',
          populate: 'decks'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },

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
   },


  //Still functional for the most part
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addDeck: async (parent, args) => {
        const deck = await Deck.create(args);
        return deck;
    },
    addFlashCard: async (parent, args) => {
        const flashcard = await Flashcard.create(args);
        return flashcard;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('Not logged in');
    },
    updateDeck: async (parent, args, context) => {
        if (context.deck) {
            return await Deck.findByIdAndUpdate(context.deck._id, args, {new: true});
        }
    },
    updateFlashCard: async (parent, args, context) => {
        if (context.deck) {
            return await Flashcard.findByIdAndUpdate(context.flashcard._id, args, {new: true});
        }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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

module.exports = resolvers;
