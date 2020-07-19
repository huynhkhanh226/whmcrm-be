
'use strict';

const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const decrypt = (text) => {
    const key = crypto.createDecipher('aes-256-cbc', sails.config.session.secret);
    const str = key.update(text, 'hex', 'utf8');
    return str + key.final('utf8');
};

const encrypt = (text) => {
    const key = crypto.createCipher('aes-256-cbc', sails.config.session.secret);
    const str = key.update(text, 'utf8', 'hex');
    return str + key.final('hex');
};

const createJWT = (tokenData, expiry) => {
    expiry = expiry ? expiry : '30d';
    return jwt.sign(tokenData, sails.config.session.secret, { algorithm: 'HS256', expiresIn: expiry});
};

const verifyJWT = (tokenData) => {
    try {
        return jwt.verify(tokenData, sails.config.session.secret);
    } catch(error) {
        sails.log.warn('Token Error: ' + JSON.stringify(error));
    }
};

module.exports = {
    decrypt: decrypt,
    encrypt: encrypt,
    verifyJWT: verifyJWT,
    createJWT: createJWT,
};
