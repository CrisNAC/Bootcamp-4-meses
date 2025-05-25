const jwt = require('jsonwebtoken');
// const { Promise } = require('mongoose');

const createToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            'secret123',
            {
                expiresIn: '1d',
            },
            (error, token) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(token);
                }
            }
        )
    });
}

module.exports = {createToken}