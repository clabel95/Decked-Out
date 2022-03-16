const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
            minlength: 8,
        },
        decks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'deck',
            }
        ],
    },
    // {
    //     toJSON: {
    //       virtuals: true,
    //     },
    // }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});
  
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User  = model('user', userSchema);

module.exports = User;
