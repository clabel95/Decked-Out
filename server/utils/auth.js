const jwt = require('jsonwebtoken');

const secret = 'dilophosaurus';
//WILL CHANGE TO LONGER TIME AFTER SUCCESSFUL TEST
const expiration = '1m';

module.exports = {
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data:payload }, secret, { expiresIn: expiration})
    },
};