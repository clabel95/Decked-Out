const jwt = require('jsonwebtoken');

const secret = 'dilophosaurus';
//WILL CHANGE TO LONGER TIME AFTER SUCCESSFUL TEST
const expiration = '1m';

module.exports = {
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data:payload }, secret, { expiresIn: expiration})
    },
    authMiddleWare: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return req;
        }
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('invalid token check back-end auth.js')
        }
        return req;
    },
};