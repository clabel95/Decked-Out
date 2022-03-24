const mongoose = require('mongoose');

mongoose.connect(
    //process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/decked-out',
    process.env.MONGODB_URI || 'mongodb+srv://tester:XqwT9Fzs7zqwcEgC@decked-out.ncryo.mongodb.net/decked-out?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;